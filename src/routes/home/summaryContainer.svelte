<script lang="ts">
	export let name: string;
	export let date: string;
	export let description: string;
	export let link_id: string;
</script>

<a href={'/summary/' + link_id}>
	<div class="card card-hover cursor-pointer p-2 variant-filled-primary">
		<header class="card-header font-bold text-lg">{name}</header>
		<section class="p-2">
			<div class="italic">{date}</div>
			<div>
				{description}
			</div>
		</section>
	</div>
</a>
