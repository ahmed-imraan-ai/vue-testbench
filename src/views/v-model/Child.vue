<script setup>
	import { computed } from "vue";
	const props = defineProps(["modelValue", "onUpdate:modelValue"]);
	const emit = defineEmits("update:modelValue");

	const impInChild = computed({
		get: () => props.modelValue,
		set: value => emit("update:modelValue", value),
	});
</script>

<template>
	<div>
		<input v-model="impInChild" />
	</div>
</template>
