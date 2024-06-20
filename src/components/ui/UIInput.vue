<script setup>
const props = defineProps({
	type: {
		type: String,
		default: 'text'
	},
	name: {
		type: String,
		required: true
	},
	placeholder: {
		type: String,
		default: ''
	},
	required: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<input
		class="input"
		:type="type"
		:name="name"
		:placeholder="placeholder"
		:required="required"
	>
</template>

<style scoped>
.input {
	padding: 13px 16px;
	border-radius: 8px;
	border: 1px solid #E5E5EA;
	outline: none;
	font-size: 14px;
	line-height: 14px;
}
</style>