<script lang="ts">
	import NumberInput from '../../components/inputs/numberInput.svelte';
	import TextAreaInput from '../../components/inputs/textAreaInput.svelte';
	import Icon from '@iconify/svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { createFeedback } from '../../api/feedback';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import { errorToast, successToast } from '../../components/interactions/toasts';
	import Loader from '../../components/loader.svelte';
	const modalStore = getModalStore();
	const toastStore = getToastStore();

	let feedback: string;
	let score: number = 5;
	let min = 0;
	let max = 5;
	let loading = false;
	export let summary_id: number;

	const exitFullScreen = () => {
		modalStore.close();
	};

	const leaveFeedback = async () => {
		loading = true;
		let res = await createFeedback(summary_id, score, feedback);

		if (res.status === 201) {
			// Leave a message
			exitFullScreen();
			toastStore.trigger(successToast('Feedback sent!'));
			loading = false;
		} else {
			// Show an error
			toastStore.trigger(errorToast(res.message));
			loading = false;
		}
	};
</script>

<div class="card w-full md:w-4/6 mx-auto variant-glass">
	<div class="card variant-glass p-2">
		<header class="card-header">
			<div class="grid grid-cols-2">
				<div class="text-xl font-bold">Provide feedback</div>
				<div class="flex justify-end">
					<button
						type="button"
						class="btn-icon variant-filled-secondary relative"
						on:click={exitFullScreen}
						><Icon icon="basil:cross-solid" height="30" />
					</button>
				</div>
			</div>
		</header>
		<div class="p-4">
			<NumberInput name={'Score (/5)'} bind:value={score} {max} {min} />
			<TextAreaInput
				name={'Feedback'}
				placeholder="Write your feedback here..."
				bind:value={feedback}
			/>
			<div class="flex justify-center mt-4">
				<button class="btn variant-filled-secondary" on:click={leaveFeedback}>
					{#if loading}
						<Loader />
					{:else}
						Submit feedback
					{/if}
				</button>
			</div>
		</div>
	</div>
</div>
