<script lang="ts">
	import ParameterClass from './parameterClass.svelte';

	export let parameters: any[];
	export let checkClassName: string = 'TOCHECK';
</script>

<div class="grid grid-cols-2 gap-4">
	{#each parameters as parameterClass}
		<div class="my-2">
			<ParameterClass {parameterClass} {checkClassName} />
		</div>
	{/each}
</div>
