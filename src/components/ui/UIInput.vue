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
	},
	isValid: {
		type: Boolean,
		default: true
	},
	disabled: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<input
		:value="modelValue"
		class="input"
		:class="[!isValid ? 'input__error' : '']"
		:type="type"
		:name="name"
		:disabled="disabled"
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
	font-size: 16px;
	line-height: 16px;
}

.input__error {
	border: 1px solid #ff3c3c;
}
</style>