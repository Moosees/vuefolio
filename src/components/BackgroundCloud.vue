<script setup>
const props = defineProps({
	delay: String,
	duration: String,
	offsetY: Number
});
console.log(typeof props.offsetY);
</script>

<template>
	<div class="cloud"
		:style="{ '--delay': props.delay || '1s', '--duration': props.duration || '20s', top: props.offsetY + '%' }">
	</div>
</template>

<style scoped>
.cloud {
	position: absolute;
	width: 100px;
	height: 50px;
	background-color: rgb(164, 144, 144);
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
