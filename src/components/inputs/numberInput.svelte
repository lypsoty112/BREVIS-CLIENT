<script lang="ts">
	export let name: string;
	export let value: number = 0;
	export let min: number = 0;
	export let max: number = 100;
</script>

<label class="label my-2">
	<span>{name}</span>
	<input
		class="input"
		type="number"
		{...$$restProps}
		bind:value
		{min}
		{max}
		on:change={() => {
			value = min <= value ? (max >= value ? value : max) : min;
			value = value ? value : min;
		}}
	/>
</label>
