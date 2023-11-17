<script lang="ts">
	export let name: string;
	export let placeholder: string;
	export let setValue: (value: string) => void = () => {};

	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		setValue(target.value);
	};
</script>

<label class="label my-2">
	<span>{name}</span>
	<input class="input" type="text" {placeholder} on:change={onChange} {...$$restProps} />
</label>
