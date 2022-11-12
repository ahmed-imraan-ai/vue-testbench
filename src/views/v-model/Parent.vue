<script setup>
	import { ref } from "vue";
	import Child from "./Child.vue";
	const imp = ref("test");
</script>

<template>
	<div>
		<div>The input is: {{ imp }}</div>
		<Child v-model="imp" />
	</div>
</template>
