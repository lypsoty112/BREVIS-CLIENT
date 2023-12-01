<script lang="ts">
	import { Tab, TabGroup, FileDropzone, Stepper, Step } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import Loader from '../../components/loader.svelte';
	import { testSummary } from '../../api/summary';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';

	const toastStore = getToastStore();

	let uploadedFiles: FileList;
	let acceptedFileExtensions: string[] = ['pdf', 'docx', 'html', 'txt', 'md'];
	let creatingSummary: boolean = false;

	const onSubmit = async () => {
		creatingSummary = true;

		let res = await testSummary(uploadedFiles[0]);

		switch (res.status) {
			case 201:
				window.location.href = '/summary?id=' + btoa(res.data.summary_id.toString());
				break;
			case 501:
				toastStore.trigger(errorToast('Something went wrong, please try again later'));
				creatingSummary = false;
				break;
			default:
				toastStore.trigger(errorToast(res.message));
				creatingSummary = false;
				break;
		}
	};
</script>

<div class="container m-auto p-4">
	<header class="">
		<div class="text-2xl font-bold my-4 text-center">Create a new summary</div>
	</header>
	<div class="card p-4 variant-glass-primary w-full md:w-4/6 m-auto">
		{#if !creatingSummary}
			<FileDropzone
				name="files"
				bind:files={uploadedFiles}
				class="my-4"
				type="file"
				accept={acceptedFileExtensions.map((ext) => '.' + ext).join(',')}
			>
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
			<button class="btn variant-glass-secondary" on:click={onSubmit}>Start test</button>
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
