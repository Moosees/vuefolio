<script setup>
import { RouterView } from 'vue-router';

import AppBackground from '@/components/AppBackground.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';
</script>

<template>
	<AppBackground />
	<main>
		<AppHeader />
		<AppContent>
			<RouterView />
		</AppContent>
	</main>
</template>

<style scoped>
main {
	flex: 1;
	display: flex;
	flex-direction: column;
	max-width: 60em;
	max-height: 30em;
	margin: 4em auto;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 5px 2px rgb(0 0 0 / 0.4);
}
</style>
