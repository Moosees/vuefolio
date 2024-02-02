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
		<h3>{{ props.subHeading }}</h3>
		<div class="project-card__buttons">
			<a :href="props.repoUrl" target="_blank" rel="noopener noreferrer">Code</a>
			<a :href="props.liveUrl" target="_blank" rel="noopener noreferrer">Live</a>
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
	gap: 1em;
}

.project-card__buttons {
	display: flex;
	gap: 5px;
}
</style>
