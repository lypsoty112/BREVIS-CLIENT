<script lang="ts">
	export let content: string;
	import SvelteMarkdown from 'svelte-markdown';
</script>

<div class="md">
	<SvelteMarkdown source={content} />
</div>

<style>
	/** Import the markdownRenderer.css file*/
	@import url('markdownRenderer.css');
</style>
