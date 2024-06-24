<script setup>
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
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
		:value="modelValue"
		class="input"
		:type="type"
		:name="name"
		:placeholder="placeholder"
		:required="required"
		@input="emits('update:modelValue', $event.target.value)"
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