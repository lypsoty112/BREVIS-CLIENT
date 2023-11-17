<script lang="ts">
	export let name: string;
	export let placeholder: string = '';
	export let rows: number = 4;
	export let setValue: (value: string) => void;

	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		setValue(target.value);
	};
</script>

<label class="label">
	<span>{name}</span>
	<textarea class="textarea !resize-none" {rows} {placeholder} on:change={onChange} />
</label>
