<script lang="ts">
	export let name: string;
	export let value: string;
	export let title: string = '';
</script>

<label class="flex items-center space-x-2 cursor-pointer" {title}>
	<input class="radio" type="radio" {name} {value} {...$$restProps} />
	<p><slot /></p>
</label>
