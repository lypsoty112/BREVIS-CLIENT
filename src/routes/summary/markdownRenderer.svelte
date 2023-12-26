<script lang="ts">
	export let content: string;
	import mermaid from 'mermaid';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	onMount(async () => {
		let element: HTMLElement = document.querySelectorAll('.md')[0] as HTMLElement;
		console.log(element);
		element.querySelectorAll('code').forEach(async (block) => {
			// Try to render mermaid diagrams if they exist
			try {
				await mermaid.parse(block.textContent as string);
				await mermaid.init(
					{
						startOnLoad: false,
						theme: 'dark',
						securityLevel: 'sandbox',
						htmlLabels: false,
						wrap: false
					},
					block
				);

				// Set the code block transparent
				block.parentElement!.style.backgroundColor = 'transparent';
			} catch (e) {
				console.log(e);
			}
		});
	});
</script>

<div class="md">
	<SvelteMarkdown source={content} />
</div>

<style>
	/** Import the markdownRenderer.css file*/
	@import url('markdownRenderer.css');
</style>
