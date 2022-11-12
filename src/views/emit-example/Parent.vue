<script setup>
	import Child from "./Child.vue";
	function handleChildEmit(emittedContent) {
		alert(emittedContent);
	}
</script>

<template>
	<Child @textConfirmed="handleChildEmit" />
</template>
