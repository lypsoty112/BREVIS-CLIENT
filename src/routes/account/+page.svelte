<script lang="ts">
	import TextInput from '../../components/inputs/textInput.svelte';
	import { logOut } from '../../api/_loggedIn';

	let email: string = 'chris.doe@gmail.com';
	let subscriptionName: string = 'Free plan';
	let payments = ['dfsq'];

	const onLogout = () => {
		logOut();
		window.location.href = '/';
	};
</script>

<div class="container mx-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		<div class="card card-hover">
			<header class="card-header font-bold text-xl">My account</header>
			<div class="p-4">
				<TextInput name="E-mail" placeholder="E-mail" value={email} disabled />
				<TextInput
					name="Current subscription"
					placeholder="Subscription name"
					value={subscriptionName}
					disabled
				/>
				<a href="/subscriptions" class="underline">View all options for subscriptions</a>
				<div class="my-4">
					<button class="btn variant-filled-secondary">Change password</button>
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
					<div />
				{/if}
			</div>
		</div>
	</div>
	<div class="mt-4 flex justify-center">
		<button class="btn-lg btn variant-filled-secondary" on:click={onLogout}>Log out</button>
	</div>
</div>
