<script lang="ts">
	import MarkdownRenderer from './markdownRenderer.svelte';
	import Icon from '@iconify/svelte';

	export let content: string;
	export let title: string;

	import { getModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	const exitFullScreen = () => {
		modalStore.close();
	};
</script>

<div class="card w-10/12 mx-auto variant-glass">
	<div class="card variant-glass p-2">
		<header class="card-header">
			<div class="grid grid-cols-2">
				<div class="text-xl font-bold italic">{title}</div>
				<div class="flex justify-end">
					<button
						type="button"
						class="btn-icon variant-filled-secondary relative"
						on:click={exitFullScreen}
						><Icon icon="basil:collapse-solid" height="30" />
					</button>
				</div>
			</div>
		</header>
		<div class="p-4">
			<MarkdownRenderer {content} />
		</div>
	</div>
</div>
