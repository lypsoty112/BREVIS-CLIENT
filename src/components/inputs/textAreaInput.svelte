<script lang="ts">
	export let name: string;
	export let placeholder: string = '';
	export let rows: number = 4;
	export let value: string;
</script>

<label class="label">
	<span>{name}</span>
	<textarea class="textarea !resize-none" {rows} {placeholder} bind:value />
</label>
