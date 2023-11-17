<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background=" dark:bg-surface-900 bg-surface-1"
>
	<svelte:fragment slot="lead"><a href="/">StudyGPT</a></svelte:fragment>
	<svelte:fragment>
		<div class="hidden md:block">
			<span class="mx-2"><a href="/company">Company</a></span>
			<span class="mx-2"><a href="/team">Team</a></span>
			<span class="mx-2"><a href="/contact">Contact</a></span>
			<span class="mx-2"><a href="/subscriptions">Pricing</a></span>
		</div>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a href="/login">Log in</a>
		<a href="/register" class="btn variant-filled-secondary">Register</a>
		<LightSwitch />
	</svelte:fragment>
</AppBar>
