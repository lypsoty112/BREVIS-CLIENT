<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import ParameterClass from './parameterClass.svelte';

	export let selectedParameters: number[];
	export let parameters: any[];
</script>

<div class="grid grid-cols-2 gap-4">
	{#each parameters as parameterClass}
		<div class="my-2">
			<ParameterClass {parameterClass} />
		</div>
	{/each}
</div>
