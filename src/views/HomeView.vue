<script setup>
import { useWeatherStore } from "@/stores/weather.js";

const weatherStore = useWeatherStore();
</script>

<template>
	<p>HOME</p>
	<a @click.prevent="weatherStore.toggleDay()">Toggle day</a>
</template>
