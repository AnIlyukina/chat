<script setup>
import {toRefs} from "vue";

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

const {data} = toRefs((props))
</script>

<template>
	<div>
		<p class="text" v-html="data.message"></p>
	</div>
</template>

<style scoped>
.text {
	margin: 0;
	white-space: pre-wrap;
	word-break: break-word;
	font-size: 14px;
	line-height: 120%;
}
</style>
