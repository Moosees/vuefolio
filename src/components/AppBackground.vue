<script setup>
import { onMounted } from 'vue';
import { useWeatherStore } from "@/stores/weather.js";

import BackgroundCloud from '@/components/BackgroundCloud.vue';
import BackgroundLayer from '@/components/BackgroundLayer.vue';
import BackgroundForest from './BackgroundForest.vue';
import { storeToRefs } from 'pinia';

const weatherStore = useWeatherStore();

const { isDay } = storeToRefs(weatherStore);

onMounted(async () => {
	// const url = 'https://api.open-meteo.com/v1/forecast?latitude=60.0667&longitude=16.2167&current=temperature_2m,is_day,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=snow_depth&wind_speed_unit=ms&timezone=auto&forecast_days=1';

	// const response = await fetch(url);
	// const data = await response.json();

	// weatherStore.setWeatherData(data);
});
</script>

<template>
	<div class="background" :class="{ 'day-time': isDay }">
		<BackgroundLayer>
			<BackgroundCloud fileName="cloud1.png" delay="1s" duration="20s" :offset-y="50" />
			<BackgroundCloud fileName="cloud2.png" delay="4s" duration="30s" :offset-y="30" />
			<BackgroundCloud fileName="cloud3.png" delay="6s" duration="25s" :offset-y="20" />
			<BackgroundCloud fileName="cloud4.png" delay="7s" duration="35s" :offset-y="10" />
			<BackgroundCloud fileName="cloud5.png" delay="10s" duration="40" :offset-y="40" />
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
