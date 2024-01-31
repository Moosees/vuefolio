<template>
	<section>
		<slot></slot>
	</section>
</template>

<style scoped>
section {
	width: 100%;
	max-width: 60em;
	height: 100%;
	max-height: 30em;
	margin: 4em auto;
	opacity: 0.9;
	border-radius: 5px;
	box-shadow: 0 4px 5px 2px rgb(0 0 0 / 0.4);
	background-color: rgb(145, 228, 145);
	display: flex;
}
</style>
