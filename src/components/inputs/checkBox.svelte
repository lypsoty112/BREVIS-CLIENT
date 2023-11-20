<script lang="ts">
	export let name: string;
	export let value: string;
	export let title: string = '';

	export let onClick: (e: any) => void = () => {};
	export let onChange: (e: any) => void = () => {};
</script>

<label class="flex items-center space-x-2 cursor-pointer" {title}>
	<input
		class="checkbox"
		type="checkbox"
		{name}
		{value}
		{...$$restProps}
		on:click={onClick}
		on:change={onChange}
	/>
	<p><slot /></p>
</label>
