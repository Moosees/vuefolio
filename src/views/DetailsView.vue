<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
	<main>
		<p>{{ route.params.project }}</p>
	</main>
</template>
