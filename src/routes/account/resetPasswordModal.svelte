<script lang="ts">
	import NumberInput from '../../components/inputs/numberInput.svelte';
	import TextAreaInput from '../../components/inputs/textAreaInput.svelte';
	import Icon from '@iconify/svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { createFeedback } from '../../api/feedback';
	import { getToastStore } from '@skeletonlabs/skeleton';
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
</script>

<div class="card w-4/6 mx-auto variant-glass">
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
				<button class="btn variant-filled-secondary">
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
