<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let placeholder: string = '•••••';
	export let setValue: (value: string) => void;

	const onChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		setValue(target.value);
	};

	let hidden: boolean = true;
	let inputtype: string = 'password';
	const togglePassword = (event: Event) => {
		const target = event.target as HTMLButtonElement;
		if (inputtype === 'password') {
			inputtype = 'text';
			hidden = false;
		} else {
			inputtype = 'password';
			hidden = true;
		}
	};
</script>

<label class="label my-2">
	<span>{name}</span>
	<div class="flex">
		<input class="input w-11/12" type={inputtype} {placeholder} on:change={onChange} />
		<div class="w-1/12 flex justify-end">
			<button class="btn-icon variant-filled-secondary" on:click={togglePassword}>
				{#if hidden}
					<Icon icon="basil:eye-closed-solid" />
				{:else}
					<Icon icon="basil:eye-solid" />
				{/if}
			</button>
		</div>
	</div>
</label>
