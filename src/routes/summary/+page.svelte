<script lang="ts">
	import Icon from '@iconify/svelte';

	let title: string = 'Sample title'; // TODO: Add title
	let description: string = 'Description'; // TODO: Add description
	let content: string = 'sample content'; // TODO: Add content
	let date: string = 'XX/XX/20XX'; // TODO: Add date
</script>

<div class="container m-auto p-4">
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
		<div class="card p-2 m-2 variant-ghost-primary">
			<header class="card-header font-bold text-xl">Description</header>
			<div class="p-4 text-base">
				{description}
			</div>
		</div>
		<div class="card p-2 m-2 variant-ghost-primary">
			<header class="card-header font-bold text-xl">
				{title}
			</header>
			<div class="italic p-4 font-light text-sm">
				{date}
			</div>
		</div>

		<div class="card p-2 m-2 variant-ghost-primary">
			<header class="card-header font-bold text-xl">Feedback?</header>
			<div class="p-4">
				<div class="text-base">
					Was this summary helpful? Was it not? Write feedback here, and help us improve!
				</div>
				<div class="text-base flex align-middle items-center justify-center mt-2">
					<button class="btn variant-filled-secondary">Write feedback</button>
				</div>
			</div>
		</div>
	</div>
	<div class="card p-4 my-4 variant-glass-primary m-auto">
		<header class="card-header">
			<div class="flex justify-end">
				<button type="button" class="btn variant-filled-secondary">
					<span><Icon icon="basil:expand-solid" height="30" /></span>
					<span>Fullscreen</span>
				</button>
			</div>
		</header>
		<div class="p-4">{content}</div>
	</div>
</div>
