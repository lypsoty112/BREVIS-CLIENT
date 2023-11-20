<script lang="ts">
	import { Accordion, AccordionItem, ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import RadioButton from '../../components/inputs/radioButton.svelte';
	import CheckBox from '../../components/inputs/checkBox.svelte';

	export let parameterClass: any;
	export let checkClassName: string = 'TOCHECK';
	$: multiple = parameterClass?.selection_type === 0;
</script>

<div class="mb-4 variant-ghost-primary rounded-lg">
	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="summary"
				><div class=" font-semibold text-lg">{parameterClass.name}</div></svelte:fragment
			>
			<svelte:fragment slot="content">
				<div class="italic text-sm">{parameterClass.description}</div>
				<hr class="!border-t-1" />
				<div class=" my-2 space-y-2">
					{#if multiple}
						{#each parameterClass.parameters as param}
							<CheckBox
								class={'checkbox ' + checkClassName}
								name={parameterClass.parameter_class_id}
								value={param.parameter_id}
								checked={param.is_default}
								title={param.description}
							>
								{param.name}
							</CheckBox>
						{/each}
					{:else}
						{#each parameterClass.parameters as param}
							<RadioButton
								class={'radio ' + checkClassName}
								name={parameterClass.parameter_class_id}
								value={param.parameter_id}
								checked={param.is_default}
								title={param.description}
							>
								{param.name}
							</RadioButton>
						{/each}
					{/if}
				</div>
			</svelte:fragment>
		</AccordionItem>
	</Accordion>
</div>
