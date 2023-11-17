<script lang="ts">
	import Icon from '@iconify/svelte';
	import SummaryContainer from './summaryContainer.svelte';
</script>

<div class="container mx-auto p-4">
	<div class="card p-4 variant-glass-primary">
		<header class="card-header flex justify-between">
			<div class="text-2xl font-bold flex-grow">My summaries</div>
			<div class="flex">
				<a href="/new" class="btn text-base btn-lg variant-filled-secondary mx-2">New summary</a>
				<button type="button" class="btn btn-icon variant-filled-secondary mx-2">
					<Icon icon="basil:search-solid" class=" w-full" />
				</button>
			</div>
		</header>
		<section class="p-4">
			<div class="flex justify-start my-4">
				<div class="btn-group variant-filled-secondary">
					<button>Sort by name</button>
					<button>Sort by date</button>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<SummaryContainer name="Summary 1" date="02/01/2023" description="" link_id="test" />
			</div>
		</section>
	</div>
</div>
