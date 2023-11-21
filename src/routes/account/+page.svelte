<script lang="ts">
	import TextInput from '../../components/inputs/textInput.svelte';
	import { logOut, hasToBeLoggedIn } from '../../api/_loggedIn';
	import { onMount } from 'svelte';
	import { getUser } from '../../api/user';
	import { getSubscriptionByUser } from '../../api/subscription';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import UnderConstruction from '../../components/underConstruction.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import ResetPasswordModal from './resetPasswordModal.svelte';

	const modalStore = getModalStore();
	const toastStore = getToastStore();

	let email: string = 'chris.doe@gmail.com';
	let subscriptionName: string = 'Free plan';
	let registration_date: string = '2021-01-01';
	$: display_registration_date = new Date(registration_date).toDateString();
	let username: string = 'chris.doe';
	let payments = ['dfsq'];

	onMount(async () => {
		hasToBeLoggedIn();

		// Get the account info
		let response = await getUser();

		if (response.status === 200) {
			email = response.data.email;
			username = response.data.username;
			registration_date = response.data.registration_date;
			console.log(response.data);
		} else {
			toastStore.trigger(errorToast(response.message));
		}

		// Get the current subscription
		response = await getSubscriptionByUser();

		if (response.status) {
			subscriptionName = response.data.name;
		} else {
			toastStore.trigger(errorToast(response.message));
		}
	});

	const onLogout = () => {
		logOut();
		window.location.href = '/';
	};

	const onResetPassword = async () => {
		let modalComponent: ModalComponent = {
			ref: ResetPasswordModal
		};

		modalStore.trigger({
			type: 'component',
			component: modalComponent
		});
	};
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="card card-hover">
			<header class="card-header font-bold text-xl">My account</header>
			<div class="p-4">
				<TextInput name="Username" placeholder="Username" value={username} disabled />

				<TextInput name="E-mail" placeholder="E-mail" value={email} disabled />
				<TextInput
					name="Register date"
					placeholder="Register date"
					value={display_registration_date}
					disabled
				/>

				<TextInput
					name="Current subscription"
					placeholder="Subscription name"
					value={subscriptionName}
					disabled
				/>
				<a href="/subscriptions" class="underline">View all options for subscriptions</a>
				<div class="my-4">
					<button class="btn variant-filled-secondary" on:click={onResetPassword}
						>Change password</button
					>
				</div>
			</div>
		</div>
		<div class="card card-hover">
			<header class="card-header font-bold text-xl">Last payments</header>
			<div class="p-4">
				{#if payments.length == 0}
					<div>You've made no payments to StudyGPT</div>
				{:else}
					<!--TODO: Change this to include payment containers-->
					<UnderConstruction
						errorMessage="We're still building this part of the page. Please check again later. Sorry for the inconvenience."
					/>
				{/if}
			</div>
		</div>
	</div>
	<div class="mt-4 flex justify-center">
		<button class="btn-lg btn variant-filled-secondary" on:click={onLogout}>Log out</button>
	</div>
</div>
