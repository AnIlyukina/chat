<script setup>

</script>

<template>
	<div class="message-field">
		<textarea placeholder="Напишите сообщение..." class="message-field__textarea"></textarea>
		<button class="message-field__button">
			<img src="../../assets/icons/send.svg" alt="отправить">
		</button>
	</div>
</template>

<style scoped>
.message-field {
	display: flex;
	align-items: center;
	padding: 16px 20px 10px;
	background-color: #fff;
	border-top: 1px solid #E6E6E6;
}

.message-field__textarea {
	flex-grow: 1;
	padding: 0;
	border: none;
	font-size: 14px;
	margin-right: 10px;
	outline: transparent;
	resize: none; /* Убираем возможность изменения размеров */
	height: 25px; /* Фиксированная высота, чтобы выглядело как однострочное поле */
	overflow-y: auto; /* Добавляем прокрутку по вертикали */
	box-sizing: border-box; /* Учитываем padding и border в общую ширину и высоту */
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