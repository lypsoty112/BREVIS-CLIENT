<script lang="ts">
	import Icon from '@iconify/svelte';
	import SummaryContainer from './summaryContainer.svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast } from '../../components/interactions/toasts';
	import { getSummaries } from '../../api/summary';
	import { onMount } from 'svelte';
	import { hasToBeLoggedIn } from '../../api/_loggedIn';
	import Loader from '../../components/loader.svelte';
	const toastStore = getToastStore();

	let allSummaries: any[] = [];
	let loading: boolean = true;
	let showSearch: boolean = false;

	$: summaries = allSummaries;
	onMount(async () => {
		hasToBeLoggedIn();
		let response = await getSummaries();
		if (response.status === 200) {
			allSummaries = response.data;
			console.log(allSummaries);
		} else {
			toastStore.trigger(errorToast('Could not get summaries'));
		}
		loading = false;
	});

	let searchValue: string = '';
	const searchChange = () => {
		console.log(searchValue);

		// Filter all values
		let filteredSummaries = allSummaries.filter((summary) => {
			return (
				summary.name.toLowerCase().includes(searchValue.toLowerCase()) ||
				summary.description.toLowerCase().includes(searchValue.toLowerCase()) ||
				summary.date_completed.toLowerCase().includes(searchValue.toLowerCase())
			);
		});
		console.log(filteredSummaries);
		summaries = filteredSummaries;
	};
</script>

<div class="container mx-auto p-4">
	<div class="card p-4 variant-glass-primary">
		<header class="card-header flex justify-between">
			{#if showSearch}
				<input
					type="text"
					class="input input-bordered"
					placeholder="Search summaries"
					on:keyup={searchChange}
					bind:value={searchValue}
				/>
				<div class="flex">
					<button
						type="button"
						class="btn btn-icon variant-filled-secondary mx-2"
						on:click={() => {
							showSearch = false;
						}}
					>
						<Icon icon="basil:cross-solid" class=" h-fit w-fit" />
					</button>
				</div>
			{:else}
				<div class="text-2xl font-bold flex-grow">My summaries</div>
				<div class="flex">
					<a href="/new" class="btn text-base btn-lg variant-filled-secondary mx-2">New summary</a>
					<button
						type="button"
						class="btn btn-icon variant-filled-secondary mx-2"
						on:click={() => {
							showSearch = true;
						}}
					>
						<Icon icon="basil:search-solid" class=" h-fit w-fit" />
					</button>
				</div>
			{/if}
		</header>
		<section class="p-4">
			{#if summaries.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{#each summaries as summary}
						<SummaryContainer
							name={summary.name}
							date_completed={summary.date_completed}
							description={summary.description}
							summary_id={summary.summary_id}
						/>
					{/each}
				</div>
			{:else if !loading}
				<div class="text-center text-2xl font-bold">You have no summaries yet</div>
				<div class="text-center flex justify-center my-4">
					<a href="/new" class="btn text-base btn-lg variant-filled-secondary mx-2">New summary</a>
				</div>
			{:else}
				<div class="text-center flex justify-center my-4">
					<Loader />
				</div>
			{/if}
		</section>
	</div>
</div>
