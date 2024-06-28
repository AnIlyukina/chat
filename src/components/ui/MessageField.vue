<script setup>
import {onMounted, ref, toRefs} from "vue";

const emits = defineEmits(['sendEvent', 'update:modelValue'])

const props = defineProps({
	modelValue: {
		type: String,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	}
})

const {modelValue} = toRefs(props)

const messageField = ref(null)

const sendEvent = () => {
	emits('sendEvent')
	messageField.value.style.height = 25 + 'px';
}

const handleKeyDown = (event) => {
	if (event.key === 'Enter') {
		if (event.shiftKey) {
			// Shift+Enter for new line
			return;
		} else {
			// Enter for sending message
			event.preventDefault();
			sendEvent();
		}
	}
}

const handleInput = (event) => {
	emits('update:modelValue', event.target.value);
	adjustTextareaHeight()
}

const adjustTextareaHeight = () => {
	const textarea = messageField.value;
	textarea.style.height = 25 + 'px';
	textarea.style.height = Math.min(textarea.scrollHeight, 70) + 'px';
}

onMounted(adjustTextareaHeight)

</script>

<template>
	<div class="message-field">
		<textarea
			ref="messageField"
			:value="modelValue"
			:disabled="disabled"
			placeholder="Напишите сообщение..."
			class="message-field__textarea"
			@input="handleInput"
			@keydown="handleKeyDown"
		>
		</textarea>
		<button
			:disabled="disabled || !modelValue"
			class="message-field__button"
			@click="sendEvent"
		>
			<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1.4 15.4252C1.06667 15.5585 0.75 15.5294 0.45 15.3377C0.15 15.146 0 14.8669 0 14.5002V10.0002L8 8.00022L0 6.00022V1.50022C0 1.13355 0.15 0.854382 0.45 0.662715C0.75 0.471049 1.06667 0.441882 1.4 0.575215L16.8 7.07522C17.2167 7.25855 17.425 7.56688 17.425 8.00022C17.425 8.43355 17.2167 8.74188 16.8 8.92522L1.4 15.4252Z"
				      style="transition: fill .5s ease"
				      :fill="disabled || !modelValue ? '#CCCCCC' : '#FF9900'"
				/>
			</svg>
		</button>
	</div>
</template>

<style scoped>
.message-field {
	display: flex;
	align-items: center;
	padding: 15px 20px 12px;
	background-color: #fff;
	border-top: 1px solid #E6E6E6;
}

.message-field__textarea {
	flex-grow: 1;
	padding-top: 4px;
	border: none;
	font-size: 14px;
	line-height: 120%;
	margin-right: 10px;
	outline: transparent;
	resize: none; /* Убираем возможность изменения размеров */
	overflow-y: auto; /* Добавляем прокрутку по вертикали */
	box-sizing: border-box; /* Учитываем padding и border в общую ширину и высоту */
}

.message-field__textarea:disabled {
	background-color: transparent;
}

/* Стилизация прокрутки в textarea */
.message-field__textarea::-webkit-scrollbar {
	width: 4px;
}

.message-field__textarea::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 4px;
}

.message-field__textarea::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 4px;
}

.message-field__textarea::-webkit-scrollbar-thumb:hover {
	background: #555;
}

.message-field__button {
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;

	&:disabled {
		cursor: auto;
	}
}

</style>