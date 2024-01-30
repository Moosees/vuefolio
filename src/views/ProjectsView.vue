<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
	<div class="projects-wrapper">
		<ProjectCard name="Test1" thumbnail="#" repo-url="#" live-url="#" details-url="/projects/test1" />
		<ProjectCard name="Test2" thumbnail="#" repo-url="#" live-url="#" details-url="/projects/test2" />
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
