import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
	const temperature = ref(0); // °C
	const isDay = ref(false); // 0 or 1
	const rain = ref(0); // mm
	const snowFall = ref(0); // cm
	const snowDepth = ref(0); // m
	const cloudCover = ref(null); // %
	const windSpeed = ref(1); // m/s
	const windDirectionFromEast = ref(true);

	const setWeatherData = (newData) => {
		temperature.value = Math.floor(newData.current.temperature_2m);
		isDay.value = !!newData.current.is_day;
		rain.value = newData.current.rain;
		snowFall.value = newData.current.snowfall;
		snowDepth.value = newData.hourly.snow_depth[newData.hourly.snow_depth.length - 1];
		cloudCover.value = newData.current.cloud_cover;
		windSpeed.value = newData.current.wind_speed_10m;
		windDirectionFromEast.value = newData.current.wind_direction_10m < 180;

		console.log({ newData });
	};

	function toggleDayNight() {
		isDay.value = !isDay.value;
	};

	return { temperature, isDay, rain, snowFall, snowDepth, cloudCover, windSpeed, windDirectionFromEast, setWeatherData, toggleDayNight };
});
