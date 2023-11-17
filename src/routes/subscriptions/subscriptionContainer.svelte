<script lang="ts">
	export let subscriptionName: string = 'Demo name';
	export let price: string = 'Free';
	export let description: string = 'Demo subscription';
	export let link: string = '/link';
	export let currently_subscribed: boolean = false;
</script>

<div class="card card-hover variant-ghost-primary">
	<header class="card-header font-bold text-lg">{subscriptionName}</header>
	<div class="p-4">
		<div
			class="p-12 my-2 flex card card-hover variant-filled-tertiary font-bold text-2xl justify-center align-middle"
		>
			{price}
		</div>
		<hr class="!border-primary-400" />
		<div>
			{description}
		</div>
	</div>
	<footer class="card-footer">
		{#if currently_subscribed}
			<button class="btn variant-filled-secondary" disabled>Current plan</button>
		{:else}
			<a href={link} class="btn variant-filled-secondary"> Subscribe</a>
		{/if}
	</footer>
</div>
