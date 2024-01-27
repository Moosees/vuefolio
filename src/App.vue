<script setup>
import { RouterView } from 'vue-router';
import AppBackground from './components/AppBackground.vue';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import BackgroundControls from './components/BackgroundControls.vue';
</script>

<template>
	<AppHeader />
	<main>
		<AppBackground />
		<AppContent>
			<RouterView />
		</AppContent>
		<BackgroundControls />
	</main>
</template>

<style scoped>
main {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
}
</style>
