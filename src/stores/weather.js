import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWeatherStore = defineStore('weather', () => {
	const temperature = ref(0); // °C
	const isDay = ref(false); // boolean
	const rain = ref(0); // mm (last 15 minutes)
	const snowFall = ref(0); // cm (last 15 minutes)
	const snowDepth = ref(0); // cm (on ground)
	const cloudCover = ref(3); // number of clouds
	const windSpeed = ref(0); // m/s
	const windDirectionFromEast = ref(true); // boolean

	const setWeatherData = (newData) => {
		// temperature.value = Math.floor(newData.current.temperature_2m);
		isDay.value = !!newData.current.is_day; // convert 0/1 to boolean
		// rain.value = newData.current.rain;
		// snowFall.value = newData.current.snowfall;
		// snowDepth.value = newData.hourly.snow_depth[newData.hourly.snow_depth.length - 1] * 100;

		// convert cloud cover % to 3 - 10 range
		const cloudParsed = Math.floor(newData.current.cloud_cover / 10);
		cloudCover.value = cloudParsed > 3 ? cloudParsed : 3;

		// convert to whole number and prevent from being too stormy
		const windFloored = Math.floor(newData.current.wind_speed_10m);
		windSpeed.value = windFloored < 25 ? windFloored : 25;

		// windDirectionFromEast.value = newData.current.wind_direction_10m < 180;
	};

	function toggleDay() {
		isDay.value = !isDay.value;
	};

	return { temperature, isDay, rain, snowFall, snowDepth, cloudCover, windSpeed, windDirectionFromEast, setWeatherData, toggleDay };
});
