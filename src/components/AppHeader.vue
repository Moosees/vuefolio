<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<header>
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/projects">Projects</RouterLink>
		</nav>
	</header>
</template>

<style scoped>
header {
	box-shadow: 0 0 0 5px rgb(0 0 0 / 0.2);
	padding: 1em;
}

nav {
	display: flex;
	justify-content: space-around;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}
</style>
