<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getLoggedIn } from '../api/_loggedIn';
	import { onMount } from 'svelte';

	let loggedIn = getLoggedIn();
	onMount(() => {
		loggedIn = getLoggedIn();
	});

	$: logoLink = loggedIn ? '/home' : '/';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background=" dark:bg-surface-900 bg-surface-1"
>
	<svelte:fragment slot="lead">
		<a href={logoLink}>
			<button type="button" class="btn">
				<img
					src="/images/android-chrome-512x512.png"
					alt="logo"
					class="h-9 variant-glass-primary p-1 rounded-lg"
				/>
				<span>StudyGPT</span>
			</button>
		</a></svelte:fragment
	>
	<svelte:fragment>
		<div class="hidden md:block">
			<span class="mx-2"><a href="/company">Company</a></span>
			<span class="mx-2"><a href="/team">Team</a></span>
			<span class="mx-2"><a href="/contact">Contact</a></span>
			<span class="mx-2"><a href="/subscriptions">Pricing</a></span>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if loggedIn}
			<a href="/account">My account</a>
		{:else}
			<a href="/login">Log in</a>
			<a href="/register" class="btn variant-filled-secondary">Register</a>
		{/if}
		<LightSwitch />
	</svelte:fragment>
</AppBar>
