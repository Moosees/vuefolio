<script setup>
import BackgroundLayer from './BackgroundLayer.vue';

</script>

<template>
	<div class="container">
		<BackgroundLayer />
		<BackgroundLayer />
		<BackgroundLayer />
	</div>
</template>

<style scoped>
.container {
	position: absolute;
	z-index: -1;
	inset: 0;
}
</style>
