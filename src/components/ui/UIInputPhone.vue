<script setup>
import IMask from 'imask';

import {onMounted, ref, toRefs} from "vue";

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
	isValid: {
		type: Boolean,
		default: true
	},
	modelValue: {
		type: String,
		default: ''
	},
	required: {
		type: Boolean,
		default: false
	},
	name: {
		type: String,
		required: true
	},
})

const {isValid} = toRefs(props)

const mask = ref('(000)-000-00-00')
const phoneInput = ref(null)

onMounted(() => {
	IMask(phoneInput.value, {
		mask: mask.value
	});
})

</script>

<template>
	<div class="input-phone" :class="[!isValid ? 'input-phone__error' : '']">
		<span class="input-phone__prefix">+7</span>
		<input
			:value="modelValue"
			:required="required"
			ref="phoneInput"
			type="text"
			placeholder="(000)-000-00-00"
			class="input-phone__input"
			@input="emits('update:modelValue', $event.target.value)"
		/>
	</div>
</template>

<style scoped>
.input-phone {
	padding: 13px 16px;
	border-radius: 8px;
	border: 1px solid #E5E5EA;
	display: flex;
	background-color: #ffffff;
	align-items: center;
	justify-content: center;
}

.input-phone__prefix {
	font-size: 14px;
	line-height: 14px;
	margin-right: 10px;
}

.input-phone__input {
	flex: 1;
	border: none;
	background-color: transparent;
	outline: none;
	font-size: 14px;
	line-height: 14px;
}

.input-phone__error {
	border: 1px solid #ff3c3c;
}
</style>