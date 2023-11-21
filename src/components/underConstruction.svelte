<script lang="ts">
	import Icon from '@iconify/svelte';

	export let errorMessage: string =
		'This page is still being made. Please check back later. We apologize for the inconvenience.';
	export let errorTitle: string = 'Under construction';
</script>

<div class="card card-hover variant-ghost-warning">
	<header class="card-header flex">
		<Icon icon="basil:info-triangle-solid" height="30px" />
		<span class=" font-bold text-2xl mx-2">{errorTitle}</span>
	</header>
	<div class="p-4">
		<p>{errorMessage}</p>
	</div>
</div>
