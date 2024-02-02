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

a {
	color: #fefefe;
	font-size: 1.2em;
}

.group {
	display: flex;
	gap: 1em;
}
</style>
