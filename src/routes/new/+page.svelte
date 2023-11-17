<script lang="ts">
	import { Tab, TabGroup, FileDropzone, Stepper, Step } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import TextInput from '../../components/inputs/textInput.svelte';
	import TextAreaInput from '../../components/inputs/textAreaInput.svelte';
	let tabSet = 0;
</script>

<div class="container m-auto p-4">
	<header class="">
		<div class="text-2xl font-bold my-4 text-center">Create a new summary</div>
	</header>
	<div class="card card-hover p-4 variant-glass-primary w-4/6 m-auto">
		<Stepper>
			<Step>
				<svelte:fragment slot="header">Upload the file</svelte:fragment>
				<FileDropzone name="files" class="my-4">
					<svelte:fragment slot="lead">
						<div class="flex justify-center">
							<Icon icon="basil:file-upload-solid" height="40px" />
						</div>
					</svelte:fragment>
					<svelte:fragment slot="message">Upload a file or drag & drop</svelte:fragment>
					<svelte:fragment slot="meta">PDF, DOCX, HTML, TXT & MD allowed</svelte:fragment>
				</FileDropzone>
			</Step>
			<Step>
				<svelte:fragment slot="header">Title & description</svelte:fragment>
				<div class="my-4">
					<TextInput
						name="Title"
						placeholder="Write your title here.."
						setValue={(val) => {
							console.log(val);
						}}
					/>
					<TextAreaInput
						name="Description"
						placeholder="(Optional)"
						setValue={(val) => {
							console.log(val);
						}}
					/>
				</div></Step
			>
			<Step>
				<svelte:fragment slot="header">Parameters</svelte:fragment>
				<div class="my-4">(tab panel 3 contents)</div>
			</Step>
		</Stepper>
		<!--<header class="card-header">
			<TabGroup>
				<Tab bind:group={tabSet} name="tab1" value={0}>Upload the file</Tab>
				<Tab bind:group={tabSet} name="tab2" value={1}>Title & description</Tab>
				<Tab bind:group={tabSet} name="tab3" value={2}>Parameters</Tab>
			</TabGroup>
		</header>
		<div class="my-4 px-4">
			{#if tabSet === 0}
				
				<button
					type="button"
					class="btn variant-filled-secondary"
					on:click={() => {
						tabSet = 1;
					}}>Next</button
				>
			{:else if tabSet === 1}
				<div class="my-4">
					<TextInput
						name="Title"
						placeholder="Write your title here.."
						setValue={(val) => {
							console.log(val);
						}}
					/>
					<TextAreaInput
						name="Description"
						placeholder="(Optional)"
						setValue={(val) => {
							console.log(val);
						}}
					/>
				</div>
				<button
					type="button"
					class="btn variant-filled-secondary"
					on:click={() => {
						tabSet = 2;
					}}>Next</button
				>
			{:else if tabSet === 2}
				<div class="my-4">(tab panel 3 contents)</div>
				TODO: Continue this code 
				<button type="button" class="btn variant-filled-secondary"> Create summary </button>
			{/if}
		</div> -->
	</div>
</div>
