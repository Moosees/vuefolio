<script setup>
import { computed, onMounted } from 'vue';
import { useWeatherStore } from "@/stores/weather.js";

import BackgroundCloud from '@/components/BackgroundCloud.vue';
import BackgroundLayer from '@/components/BackgroundLayer.vue';
import BackgroundForest from './BackgroundForest.vue';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();
const { isDay, cloudCover } = storeToRefs(weatherStore);

onMounted(async () => {
	// const url = 'https://api.open-meteo.com/v1/forecast?latitude=60.0667&longitude=16.2167&current=temperature_2m,is_day,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=snow_depth&wind_speed_unit=ms&timezone=auto&forecast_days=1';

	// const response = await fetch(url);
	// const data = await response.json();

	// weatherStore.setWeatherData(data);
});

// create array with data needed to create cloud components
const clouds = computed(() => {
	const ary = [];
	for (let i = 0; i < cloudCover.value; ++i) {
		ary.push({ key: i, delay: `${i * 5}s`, offsetY: Math.floor(Math.random() * 40) + 5 });
	}
	return ary;
});
</script>

<template>
	<div class="background" :class="{ 'day-time': isDay }">
		<BackgroundLayer>
			<BackgroundCloud v-for="cloud in clouds" :key="cloud.key" :delay="cloud.delay" :offset-y="cloud.offsetY" />
		</BackgroundLayer>
		<BackgroundLayer>
			<BackgroundForest />
		</BackgroundLayer>
	</div>
</template>

<style scoped>
.background {
	position: absolute;
	z-index: -1;
	inset: 0;
	overflow: hidden;
	filter: grayscale(90%);
	transition: filter 3s ease-in-out;
}

.day-time {
	filter: grayscale(0);
}
</style>
