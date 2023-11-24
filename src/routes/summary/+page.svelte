<script lang="ts">
	import Icon from '@iconify/svelte';

	// Get the id from the URL
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { deleteSummary, getSummary } from '../../api/summary';
	import Loader from '../../components/loader.svelte';
	import MarkdownRenderer from './markdownRenderer.svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import FullScreenComponent from './fullScreenComponent.svelte';
	import FeedbackModal from './feedbackModal.svelte';
	const toastStore = getToastStore();
	const modalStore = getModalStore();

	onMount(async () => {
		let id = $page.url.searchParams.get('id');

		if (!id || id === '' || id === null || typeof id !== 'string') {
			window.location.href = '/';
		}

		// Decode the id
		let decoded_id = +atob(<string>id);

		// Get the summary
		let res = await getSummary(decoded_id);
		console.log(res);
		if (res.status === 200) {
			title = res.data.name;
			description = res.data.description;
			content = res.data.content;
			date = res.data.date_completed;
			document.title = title + ' - StudyGPT';
		} else {
			const toastStore = getToastStore();
			toastStore.trigger(errorToast(res.message));
		}
		loading = false;
	});

	const openFeedback = () => {
		let id = $page.url.searchParams.get('id');
		let decoded_id = atob(<string>id);
		let modalComponent: ModalComponent = {
			ref: FeedbackModal,
			props: {
				summary_id: decoded_id
			}
		};

		modalStore.trigger({
			type: 'component',
			component: modalComponent
		});
	};

	const enterFullScreen = () => {
		let modalComponent: ModalComponent = {
			ref: FullScreenComponent,
			props: {
				content: content,
				title: title
			}
		};

		modalStore.trigger({
			type: 'component',
			component: modalComponent
		});
	};

	const onDelete = async () => {
		new Promise<boolean>((resolve) => {
			const modal: ModalSettings = {
				type: 'confirm',
				title: 'Please Confirm',
				body: 'Are you sure you want to delete this summary?',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
		}).then(async (r: any) => {
			if (r) {
				let id = $page.url.searchParams.get('id');
				let decoded_id = +atob(<string>id);
				let resp = await deleteSummary(decoded_id);
				if (resp.status === 204) {
					window.location.href = '/home';
				} else {
					toastStore.trigger(errorToast(resp.message));
				}
			}
		});
	};
	let title: string;
	let description: string;
	let content: string;
	let date: string;
	let loading: boolean = true;
	$: displayDate = new Date(date).toLocaleDateString();
</script>

<div class="container m-auto p-4">
	<div class="p-2 space-x-2 space-y-2 md:flex md:justify-end">
		<button class="btn variant-ghost-warning">
			<Icon icon="basil:download-solid" />
			<span>Download (Coming soon)</span>
		</button>
		<button class="btn variant-ghost-error" on:click={onDelete}>
			<Icon icon="basil:trash-alt-solid" />
			<span>Delete this summary</span>
		</button>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="card card-hover p-2 m-2 variant-ghost-primary">
			<header class="card-header font-bold text-xl">Description</header>
			<div class="p-4 text-base">
				{#if !loading}
					{description}
				{:else}
					<div class="flex justify-center align-middle">
						<Loader />
					</div>
				{/if}
			</div>
		</div>
		<div class="card card-hover p-2 m-2 variant-ghost-primary">
			{#if !loading}
				<header class="card-header font-bold text-xl">
					{title}
				</header>
				<div class="italic p-4 font-light text-sm">
					{displayDate}
				</div>
			{:else}
				<div class="flex justify-center align-middle">
					<Loader />
				</div>
			{/if}
		</div>

		<div class="card card-hover p-2 m-2 variant-ghost-primary">
			<header class="card-header font-bold text-xl">Feedback?</header>
			<div class="p-4">
				<div class="text-base">
					Was this summary helpful? Was it not? Write feedback here, and help us improve!
				</div>
				<div class="text-base flex align-middle items-center justify-center mt-2">
					<button class="btn variant-filled-secondary" on:click={openFeedback}
						>Write feedback</button
					>
				</div>
			</div>
		</div>
	</div>
	<div class="card p-4 my-4 variant-glass-primary m-auto">
		<header class="card-header">
			<div class="flex justify-end">
				<button type="button" class="btn variant-filled-secondary" on:click={enterFullScreen}>
					<span><Icon icon="basil:expand-solid" height="30" /></span>
					<span>Fullscreen</span>
				</button>
			</div>
		</header>
		<div class="p-4">
			{#if !loading}
				<MarkdownRenderer {content} />
			{:else}
				<div class="flex justify-center align-middle">
					<Loader />
				</div>
			{/if}
		</div>
	</div>
</div>
