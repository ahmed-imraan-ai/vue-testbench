<script setup>
	import { ref } from "vue";

	// lets define our emits
	const emit = defineEmits("textConfirmed");

	const inpValue = ref("");

	function onBtnClick() {
		emit("textConfirmed", inpValue.value);
	}
</script>
<template>
	<div>
		<input v-model="inpValue" />
		<button @click="onBtnClick">Click to Emit ("textConfirmed")</button>
	</div>
</template>
