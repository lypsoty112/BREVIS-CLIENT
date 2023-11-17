<script lang="ts">
	import PasswordInput from '../../components/inputs/passwordInput.svelte';
	import TextInput from '../../components/inputs/textInput.svelte';
</script>

<div class="container m-auto p-4">
	<div class="card card-hover p-4 variant-glass-primary w-4/6 m-auto">
		<header class="card-header font-bold text-xl">Log in</header>
		<div class="my-4 px-4">
			<form action="login" on:submit|preventDefault={() => console.log('submitted')}>
				<TextInput
					name="E-mail"
					placeholder="chris.doe@gmail.com"
					setValue={(value) => {
						console.log(value);
					}}
				/>
				<PasswordInput
					name="Password"
					setValue={(value) => {
						console.log(value);
					}}
				/>
				<PasswordInput
					name="Repeat password"
					setValue={(value) => {
						console.log(value);
					}}
				/>
				<button class="btn my-2 variant-filled-secondary">Submit</button>
			</form>
		</div>
	</div>
</div>
