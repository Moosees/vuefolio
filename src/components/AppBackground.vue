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
const cloudDelays = [0, 20, 40, 60, 80, 10, 30, 50, 70, 90];
const allClouds = [...Array(10)].map((_x, i) => {
	return {
		key: i,
		delay: `${cloudDelays[i]}s`,
		durationVariance: Math.floor(Math.random() * 7) - 3,
		offsetY: Math.floor(Math.random() * 40) + 5,
		variant: Math.floor(Math.random() * 5 + 1)
	};
});
// keep the random stuff above from being reactive so they don't change
const clouds = computed(() => {
	return allClouds.slice(0, cloudCover.value);
});
</script>

<template>
	<div class="background" :class="{ 'background--day': isDay }">
		<BackgroundLayer>
			<BackgroundCloud v-for="cloud in clouds" :key="cloud.key" :delay="cloud.delay"
				:duration-variance="cloud.durationVariance" :offset-y="cloud.offsetY" :variant="cloud.variant" />
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
	/* background-image is not animatable so we animate position instead */
	transition: filter 1.5s ease-in-out, background-position 1.5s ease-in-out;
	background-image: linear-gradient(to top, #c9adf3, #98cfe7 25%, #94e5fb 50%, #251505 75%, #150500 100%);
	background-size: 100% 200%;
}

.background--day {
	filter: grayscale(0);
	background-position: 0 100%;
}
</style>
