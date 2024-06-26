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
		<button class="message-field__button" @click="sendEvent">
			<img src="../../assets/icons/send.svg" alt="отправить">
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
}
</style>