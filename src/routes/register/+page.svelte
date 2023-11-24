<script lang="ts">
	import PasswordInput from '../../components/inputs/passwordInput.svelte';
	import TextInput from '../../components/inputs/textInput.svelte';

	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { register } from '../../api/user';
	import { onMount } from 'svelte';
	import { hasToBeLoggedOut } from '../../api/_loggedIn';
	const toastStore = getToastStore();

	let username: string;
	let email: string;
	let password: string;
	let repeatPassword: string;

	onMount(() => {
		hasToBeLoggedOut();
	});

	const onSubmit = async () => {
		let response = await register(username, email, password, repeatPassword);
		if (response.status === 201) {
			window.location.href = '/home';
		} else {
			toastStore.trigger(errorToast(response.message));
		}
	};
</script>

<div class="container m-auto p-4">
	<div class="card card-hover p-4 variant-glass-primary md:w-4/6 m-auto">
		<header class="card-header font-bold text-xl">Register</header>
		<div class="my-4 px-4">
			<TextInput name="Username" placeholder="chris_doe" bind:value={username} />
			<TextInput name="E-mail" placeholder="chris.doe@gmail.com" bind:value={email} />
			<PasswordInput name="Password" bind:value={password} />
			<PasswordInput name="Repeat password" bind:value={repeatPassword} />
			<button class="btn my-2 variant-filled-secondary" on:click={onSubmit}>Submit</button>
		</div>
	</div>
</div>
