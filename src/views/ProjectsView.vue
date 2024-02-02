<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
	<div class="projects-wrapper">
		<ProjectCard name="Ding and Tones" sub-heading="Scales and sheet music for drums"
			repo-url="https://github.com/Moosees/ding-and-tones" live-url="https://www.dingandtones.com"
			details-url="/projects/ding" />
		<ProjectCard name="Memory" sub-heading="The classic game (with cats)" repo-url="https://github.com/Moosees/Memory"
			live-url="https://moosees.github.io/Memory/" details-url="/projects/memory" />
	</div>
</template>

<style scoped>
.projects-wrapper {
	overflow: auto hidden;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	gap: 2em;
}
</style>
