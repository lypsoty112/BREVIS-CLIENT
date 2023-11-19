<script lang="ts">
	export let subscriptionName: string;
	export let price: number;
	export let description: string;
	export let link: string;
	export let currently_subscribed: boolean = false;

	$: displayPrice = price > 0 ? `€${price.toFixed(2)}` : 'Free';
</script>

<div class="card card-hover variant-ghost-primary">
	<header class="card-header font-bold text-lg">{subscriptionName}</header>
	<div class="p-4">
		<div
			class="p-12 my-2 flex card card-hover variant-filled-tertiary font-bold text-2xl justify-center align-middle"
		>
			{displayPrice}
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
