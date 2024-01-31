<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<header>
		<nav>
			<div class="group">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/projects">Projects</RouterLink>
			</div>
			<div class="group">
				<a href="#">Email</a>
				<a href="#">Github</a>
				<a href="#">LinkedIn</a>
			</div>
		</nav>
	</header>
</template>

<style scoped>
header {
	padding: 1em 2em;
	background-color: azure;
}

nav {
	display: flex;
	justify-content: space-between;
}

nav a.router-link-exact-active {
	opacity: 0.5;
}

nav a.router-link-exact-active:hover {
	opacity: 0.75;
}

.group {
	display: flex;
	gap: 1em;
}
</style>
