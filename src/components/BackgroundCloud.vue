<script setup>
import { computed, ref } from 'vue';
import { useWeatherStore } from "@/stores/weather.js";
import { storeToRefs } from 'pinia';

const props = defineProps({
	delay: String,
	durationVariance: Number,
	offsetY: Number,
	variant: Number
});

// Vite shenanigans, might be easier to put images in public folder instead
const imgPath = `../assets/img/cloud${props.variant}.png`;
const src = ref(new URL(imgPath, import.meta.url).href);

const weatherStore = useWeatherStore();
const { isDay, windSpeed } = storeToRefs(weatherStore);

// wind speed controls duration of cloud animation
const duration = computed(() => {
	return `${45 - windSpeed.value + props.durationVariance}s`;
});
</script>

<template>
	<img :src="src" class="cloud" :class="{ 'cloud--day': isDay }"
		:style="{ '--delay': props.delay || '1s', '--duration': duration, top: props.offsetY + '%' }" width="500"
		height="200" />
</template>

<style scoped>
.cloud {
	position: absolute;
	left: 100%;
	filter: brightness(0.1);
	transition: filter 2.5s ease;
	animation: var(--duration) linear var(--delay) move infinite,
		5s ease-in-out sway infinite alternate;
}

.cloud--day {
	filter: none;
	transition: filter 1.5s ease;
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
