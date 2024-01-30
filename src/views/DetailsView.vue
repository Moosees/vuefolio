<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<button>Prev</button>
	<p>{{ route.params.project }}</p>
	<button>Next</button>
</template>
