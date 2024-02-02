<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const projects = {
	ding: {
		name: 'Ding and Tones',
		img: new URL('../assets/img/ding.png', import.meta.url).href,
		description: "Started out as an app to compare musical scales, then grew into into a multi use app with a focus on making printable tablature for melodic drums. Built with MERN stack (MongoDb, Express, React, Node). It's why and how I started learning web development."
	},
	memory: {
		name: 'Memory (and cats)!!!',
		img: new URL('../assets/img/memory.png', import.meta.url).href, description: "Group project in a Javascript course at the web developer program I'm currently enrolled in."
	}
};

const projectExists = computed(() => !!projects[route.params.project]);
</script>

<template>
	<div class="details-wrapper">
		<p v-if="!projectExists">This project does not exist... yet.</p>
		<template v-else>
			<h2>{{ projects[route.params.project].name }}</h2>
			<p>{{ projects[route.params.project].description }}</p>
			<div class="img-wrapper">
				<img :src="projects[route.params.project].img" alt="Project screenshot" width="2200" height="1158" />
			</div>
		</template>
	</div>
</template>

<style scoped>
.details-wrapper {
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	font-size: 1.6em;
	margin-bottom: 1em;
}

p {
	font-size: 1.1em;
	max-width: 60ch;
	margin-bottom: 1em;
}

.img-wrapper {
	border: 1px solid #000;
	border-radius: 20px;
	overflow: hidden auto;
}
</style>
