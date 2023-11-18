<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let value: string = '';
</script>

<label class="label my-2">
	<span>{name}</span>
	<input class="input" type="text" {placeholder} {...$$restProps} bind:value />
</label>
