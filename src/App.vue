<script setup>
import { RouterView } from 'vue-router';

import AppBackground from '@/components/AppBackground.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppContent from '@/components/AppContent.vue';
</script>

<template>
	<AppHeader />
	<main>
		<AppBackground />
		<AppContent>
			<RouterView />
		</AppContent>
	</main>
</template>

<style scoped>
main {
	position: relative;
	flex: 1;
}
</style>
