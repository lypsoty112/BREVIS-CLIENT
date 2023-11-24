<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { resetPassword } from '../../api/user';
	import { errorToast, successToast } from '../../components/interactions/toasts';
	import Loader from '../../components/loader.svelte';
	import PasswordInput from '../../components/inputs/passwordInput.svelte';
	const modalStore = getModalStore();
	const toastStore = getToastStore();

	let loading = false;
	let password: string;
	let newPassword: string;
	let repeatNewPassword: string;

	const exitFullScreen = () => {
		modalStore.close();
	};

	const onSubmit = async () => {
		loading = true;
		let res = await resetPassword(password, newPassword, repeatNewPassword);
		if (res.status == 204) {
			loading = false;
			exitFullScreen();
			toastStore.trigger(successToast('Password changed!'));
		} else {
			loading = false;
			toastStore.trigger(errorToast(res.message));
		}
	};
</script>

<div class="card w-full md:w-4/6 mx-auto variant-glass">
	<div class="card variant-glass p-2">
		<header class="card-header">
			<div class="grid grid-cols-2">
				<div class="text-xl font-bold">Change password</div>
				<div class="flex justify-end">
					<button
						type="button"
						class="btn-icon variant-filled-secondary relative"
						on:click={exitFullScreen}
						><Icon icon="basil:cross-solid" height="30" />
					</button>
				</div>
			</div>
		</header>
		<div class="p-4">
			<PasswordInput name="Current password" bind:value={password} />
			<PasswordInput name="New password" bind:value={newPassword} />
			<PasswordInput name="Repeat new password" bind:value={repeatNewPassword} />
			<div class="flex justify-center mt-4">
				<button class="btn variant-filled-secondary" on:click={onSubmit}>
					{#if loading}
						<Loader />
					{:else}
						Reset password
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>
