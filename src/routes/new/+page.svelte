<script lang="ts">
	import { Tab, TabGroup, FileDropzone, Stepper, Step } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import TextInput from '../../components/inputs/textInput.svelte';
	import TextAreaInput from '../../components/inputs/textAreaInput.svelte';
	import ParameterApp from './parameterApp.svelte';
	import { getParameters } from '../../api/parameters';
	import { hasToBeLoggedIn } from '../../api/_loggedIn';
	import { onMount } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { createSummary } from '../../api/summary';
	import Loader from '../../components/loader.svelte';

	const toastStore = getToastStore();

	onMount(() => {
		hasToBeLoggedIn();
	});

	let uploadedFiles: FileList;
	let title: string;
	let description: string;
	let selectedParameters: number[] = [];
	let parameters: any[] = [];
	let checkClassName: string = 'TOCHECK';
	let creatingSummary: boolean = false;

	$: lockFirstStep = uploadedFiles?.length === 0 || uploadedFiles === undefined;
	$: lockSecondStep = title === '' || title === undefined;

	const updateParameters = async () => {
		let response = await getParameters();
		if (response.status === 200) {
			parameters = response.data;
			console.log(parameters);
		} else {
			toastStore.trigger(errorToast(response.message));
		}
	};

	const onNextStep = async (e: {
		detail: { state: { current: number; total: number }; step: number };
	}) => {
		if (e.detail.state.current === 1) {
			title = uploadedFiles[0].name.split('.').slice(0, -1).join(' ').replaceAll('_', ' ');
		} else if (e.detail.state.current === 2) {
			await updateParameters();
		}
	};

	const checkParameters = (): number[] => {
		// Get all the elements with the class name
		let elements: any[] = Array.from(document.getElementsByClassName(checkClassName));
		// Iterate over the elements
		let selectedParameters: number[] = [];
		elements.forEach((el: any) => {
			// Check if the element is checked
			if (el?.checked && el?.value !== undefined) {
				selectedParameters.push(+el.value);
			}
		});
		return selectedParameters;
	};

	const onSubmit = async () => {
		creatingSummary = true;
		selectedParameters = checkParameters();
		let res = await createSummary(
			uploadedFiles[0] as File,
			title,
			description,
			selectedParameters,
			parameters
		);
		if (res.status === 201) {
			window.location.href = '/summary?id=' + btoa(res.data.summary_id.toString());
		} else if (res.status === 501) {
			toastStore.trigger(errorToast('Something went wrong, please try again later'));
			creatingSummary = false;
		} else {
			toastStore.trigger(errorToast(res.message));
			creatingSummary = false;
		}
	};
</script>

<div class="container m-auto p-4">
	<header class="">
		<div class="text-2xl font-bold my-4 text-center">Create a new summary</div>
	</header>
	<div class="card p-4 variant-glass-primary w-4/6 m-auto">
		{#if !creatingSummary}
			<Stepper on:next={onNextStep} on:complete={onSubmit}>
				<Step locked={lockFirstStep}>
					<svelte:fragment slot="header">Upload the file</svelte:fragment>
					<FileDropzone name="files" bind:files={uploadedFiles} class="my-4" type="file">
						<svelte:fragment slot="lead">
							<div class="flex justify-center">
								<Icon icon="basil:file-upload-solid" height="40px" />
							</div>
						</svelte:fragment>
						<svelte:fragment slot="message">Upload a file or drag & drop</svelte:fragment>
						<svelte:fragment slot="meta">
							{#if uploadedFiles?.length == 0 || uploadedFiles === undefined}
								PDF, DOCX, HTML, TXT & MD allowed
							{:else}
								uploaded file: {uploadedFiles[0].name}
							{/if}
						</svelte:fragment>
					</FileDropzone>
				</Step>
				<Step locked={lockSecondStep}>
					<svelte:fragment slot="header">Title & description</svelte:fragment>
					<div class="my-4">
						<TextInput name="Title" placeholder="Write your title here.." bind:value={title} />
						<TextAreaInput name="Description" placeholder="(Optional)" bind:value={description} />
					</div></Step
				>
				<Step>
					<svelte:fragment slot="header">Parameters</svelte:fragment>
					<div class="my-4"><ParameterApp {parameters} {checkClassName} /></div>
				</Step>
			</Stepper>
		{:else}
			<div class="my-12">
				<div class="flex justify-center">
					<Loader />
				</div>
				<div class="flex justify-center">
					<div class="text-xl font-bold my-4 text-center">Creating your summary now...</div>
				</div>
				<div class="text-base italic text-center">This might take a while...</div>
			</div>
		{/if}
	</div>
</div>
