<script lang="ts">
	export let name: string;
	export let date_completed: string;
	export let description: string;
	export let summary_id: number;

	$: link_id = btoa(summary_id.toString());
	$: date = new Date(date_completed).toLocaleDateString();
</script>

<a href={'/summary?id=' + link_id}>
	<div class="card card-hover cursor-pointer p-2 variant-filled-primary !h-40 overflow-hidden">
		<header class="card-header font-bold text-lg">{name}</header>
		<section class="p-4">
			<div class="italic">{date}</div>
			<div class="">
				{description}
			</div>
		</section>
	</div>
</a>
