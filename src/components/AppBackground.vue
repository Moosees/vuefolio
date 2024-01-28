<script setup>
import BackgroundCloud from './BackgroundCloud.vue';
import BackgroundLayer from './BackgroundLayer.vue';

</script>

<template>
	<div class="container">
		<BackgroundLayer>
			<BackgroundCloud delay="1s" duration="20s" :offset-y="50" />
			<BackgroundCloud delay="7s" duration="30s" :offset-y="30" />
			<BackgroundCloud delay="12s" duration="15s" :offset-y="60" />
		</BackgroundLayer>
		<BackgroundLayer />
		<BackgroundLayer />
	</div>
</template>

<style scoped>
.container {
	position: absolute;
	z-index: -1;
	inset: 0;
	overflow: hidden;
}
</style>
