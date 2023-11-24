<script lang="ts">
	import Icon from '@iconify/svelte';

	export let name: string;
	export let placeholder: string = '•••••';
	export let value: string = '';
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
	<div class="md:flex">
		{#if hidden}
			<input class="input w-full md:w-11/12" type="password" {placeholder} bind:value />
		{:else}
			<input class="input w-full md:w-11/12" type="text" {placeholder} bind:value />
		{/if}
		<div class="hidden w-0 md:w-1/12 md:flex justify-end">
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
