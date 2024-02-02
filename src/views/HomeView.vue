<script setup>
import { useWeatherStore } from "@/stores/weather.js";
import { RouterLink } from "vue-router";

const weatherStore = useWeatherStore();
</script>

<template>
	<div class="home-wrapper">
		<h1>Linus Almgren - Portfolio</h1>
		<p>Welcome to my WebDev exhibition, I hope you like the Swedish nature where I have decided to showcase my projects.
		</p>
		<p>Feel free to head straight to <RouterLink to="/projects">my projects</RouterLink>, or perhaps you would like to use
			the magic of the web to <a @click.prevent="weatherStore.toggleDay()">toggle daytime?</a>
		</p>
	</div>
</template>

<style scoped>
.home-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1;
	padding-inline: 3em;
}

h1 {
	font-size: 2.2em;
	margin-block: 1em;
}

p {
	font-size: 1.1em;
	padding-block: 1em;
}

a {
	/* makes inline links easier to click */
	padding-block: 2px;
}
</style>
