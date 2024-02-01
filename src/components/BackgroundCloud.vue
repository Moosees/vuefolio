<script setup>
import { computed, ref } from 'vue';
import { useWeatherStore } from "@/stores/weather.js";
import { storeToRefs } from 'pinia';

const props = defineProps({
	delay: String,
	offsetY: Number
});

// Vite shenanigans, might be easier to put images in public folder instead
const imgPath = `../assets/img/cloud${Math.floor(Math.random() * 5 + 1)}.png`;
const src = ref(new URL(imgPath, import.meta.url).href);

const weatherStore = useWeatherStore();
const { windSpeed } = storeToRefs(weatherStore);

// wind speed controls duration of cloud animation
const duration = computed(() => {
	const variance = Math.floor(Math.random() * 7) - 3;
	return `${45 - windSpeed.value + variance}s`;
});
</script>

<template>
	<img :src="src" class="cloud"
		:style="{ '--delay': props.delay || '1s', '--duration': duration, top: props.offsetY + '%' }" width="500" height="200" />
</template>

<style scoped>
.cloud {
	position: absolute;
	left: 100%;
	animation: var(--duration) linear var(--delay) move infinite,
		5s ease-in-out sway infinite alternate;
}

@keyframes move {
	to {
		left: -500px;
	}
}

@keyframes sway {
	from {
		translate: 0 0;
	}

	to {
		translate: 0 10px;
	}
}
</style>
