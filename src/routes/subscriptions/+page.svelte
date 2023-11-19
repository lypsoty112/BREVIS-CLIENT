<script lang="ts">
	import SubscriptionContainer from './subscriptionContainer.svelte';
	import { getSubscriptions, getSubscriptionByUser } from '../../api/subscription';
	import { onMount } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { getLoggedIn } from '../../api/_loggedIn';

	const toastStore = getToastStore();

	let subscriptions: any[] = [];
	onMount(async () => {
		let response = await getSubscriptions();
		if (response.status === 200) {
			subscriptions = response.data;
		} else {
			toastStore.trigger(errorToast(response.message));
		}

		// Get the current subscription
		if (getLoggedIn()) {
			let currentSubscription = (await getSubscriptionByUser()).data;

			if (currentSubscription) {
				subscriptions = subscriptions.map((subscription) => {
					subscription.current = false;
					if (subscription.name === currentSubscription.name) {
						subscription.current = true;
					}
					return subscription;
				});
			}
		}
	});
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each subscriptions as subscription}
			<SubscriptionContainer
				subscriptionName={subscription.name}
				price={subscription.price}
				description={subscription.description}
				currently_subscribed={subscription?.current || false}
				link={'https://catalogus-2-2ebf.vercel.app/'}
			/>
		{/each}
	</div>
</div>
