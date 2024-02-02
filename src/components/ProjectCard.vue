<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
	name: String,
	subHeading: String,
	// thumbnail: String,
	repoUrl: String,
	liveUrl: String,
	detailsUrl: String
});
</script>

<template>
	<article class="project-card">
		<!-- <img :src="props.thumbnail" :alt="props.name + ' preview image'"> -->
		<h2>{{ props.name }}</h2>
		<p>{{ props.subHeading }}</p>
		<div class="project-card__buttons">
			<a :href="props.repoUrl" target="_blank" rel="noopener noreferrer">Code</a>
			<a :href="props.liveUrl" target="_blank" rel="noopener noreferrer">Visit</a>
			<RouterLink :to="props.detailsUrl">Details</RouterLink>
		</div>
	</article>
</template>

<style scoped>
.project-card {
	background-color: #eee;
	border-radius: 5px;
	box-shadow: 0 2px 0 1px rgb(0 0 0 / 0.2);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;
	padding: 1em;
	width: 40%;
	height: 40%;
}

h2 {
	font-size: 1.4em;
}
.project-card__buttons {
	display: flex;
	gap: 0.5em;
}
</style>
