<script setup>
import { ref } from 'vue';

const props = defineProps({
	fileName: String,
	delay: String,
	duration: String,
	offsetY: Number
});

// Vite shenanigans, might be easier to put images in public folder instead
const imgPath = `../assets/img/cloud${Math.floor(Math.random() * 5 + 1)}.png`;
const src = ref(new URL(imgPath, import.meta.url).href);
</script>

<template>
	<img :src="src" class="cloud"
		:style="{ '--delay': props.delay || '1s', '--duration': props.duration || '20s', top: props.offsetY + '%' }" />
</template>

<style scoped>
.cloud {
	position: absolute;
	left: calc(100% + 100px);
	animation: var(--duration) linear var(--delay) move infinite,
		5s ease-in-out sway infinite alternate;
}

@keyframes move {
	to {
		left: calc(-100% - 100px);
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
