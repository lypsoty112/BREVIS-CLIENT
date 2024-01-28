<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { getLoggedIn } from '../api/_loggedIn';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	let loggedIn = getLoggedIn();
	onMount(() => {
		loggedIn = getLoggedIn();
	});

	$: logoLink = loggedIn ? '/home' : '/';

	let menuHidden = true;
	const displayMenu = () => {
		menuHidden = !menuHidden;
	};
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
				<span>Brevis AI</span>
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
		<div class="hidden md:block">
			{#if loggedIn}
				<a href="/account">My account</a>
			{:else}
				<a href="/login">Log in</a>
				<a href="/register" class="btn variant-filled-secondary">Register</a>
			{/if}
		</div>
		<div class="hidden md:block">
			<LightSwitch />
		</div>
		<div class="md:hidden">
			<button class="btn-icon bg-transparent" on:click={displayMenu}
				><Icon icon="basil:menu-solid" class="h-7 w-auto " /></button
			>
		</div>
	</svelte:fragment>
</AppBar>
<div class={'w-full p-4' + (menuHidden ? ' hidden' : '')}>
	<ul class="max-w-md space-y-1 list-none list-inside">
		<li class="flex justify-end">
			<LightSwitch />
		</li>
		<li class="text-center">
			<a href="/company"><div>Company</div></a>
		</li>

		<li class="text-center">
			<a href="/team"><div>Team</div></a>
		</li>

		<li class="text-center">
			<a href="/contact"><div>Contact</div></a>
		</li>
		<li class="text-center">
			<a href="/subscriptions"><div>Pricing</div></a>
		</li>
		<li class="text-center">
			{#if loggedIn}
				<a href="/account"><div>My account</div></a>
			{:else}
				<a href="/login">Log in</a>
				<a href="/register" class="btn variant-filled-secondary">Register</a>
			{/if}
		</li>
		<hr class="!border-t-1" />
	</ul>
</div>
