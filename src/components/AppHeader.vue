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
	padding: 1em;
	background-color: rgb(41, 53, 70);
}

nav {
	display: flex;
	justify-content: space-between;
}

nav a {
	color: #fefefe;
	font-size: 1.2em;
	text-decoration: underline currentColor 3px;
}

nav a:not(.router-link-exact-active):hover {
	text-decoration-color:forestgreen;
}

nav a.router-link-exact-active {
	cursor: default;
	opacity: 0.5;
}

.group {
	display: flex;
	gap: 1em;
}
</style>
