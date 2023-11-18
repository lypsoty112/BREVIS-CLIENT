<script lang="ts">
	import PasswordInput from '../../components/inputs/passwordInput.svelte';
	import TextInput from '../../components/inputs/textInput.svelte';
	import { login } from '../../api/user';

	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { onMount } from 'svelte';
	import { hasToBeLoggedOut } from '../../api/_loggedIn';
	const toastStore = getToastStore();

	let email: string = '';
	let password: string = '';

	onMount(() => {
		hasToBeLoggedOut();
	});

	const onSubmit = async () => {
		let response = await login(email, password);
		if (response.status === 200) {
			window.location.href = '/home';
		} else {
			toastStore.trigger(errorToast(response.message));
		}
	};
</script>

<div class="container m-auto p-4">
	<div class="card card-hover p-4 variant-glass-primary w-4/6 m-auto">
		<header class="card-header font-bold text-xl">Log in</header>
		<div class="my-4 px-4">
			<TextInput bind:value={email} name="E-mail" placeholder="chris.doe@gmail.com" />
			<PasswordInput bind:value={password} name="Password" />
			<button class="btn my-2 variant-filled-secondary" on:click={onSubmit}>Submit</button>
		</div>
	</div>
</div>
