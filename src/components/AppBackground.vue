<script setup>
import { onMounted } from 'vue';
import { useWeatherStore } from "@/stores/weather.js";

import BackgroundCloud from './BackgroundCloud.vue';
import BackgroundLayer from './BackgroundLayer.vue';

const weatherStore = useWeatherStore();

onMounted(async () => {
	const url = 'https://api.open-meteo.com/v1/forecast?latitude=60.0667&longitude=16.2167&current=temperature_2m,is_day,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=snow_depth&wind_speed_unit=ms&timezone=auto&forecast_days=1';

	const response = await fetch(url);
	const data = await response.json();

	weatherStore.setWeatherData(data);
});
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
