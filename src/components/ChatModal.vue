<script setup>
const emits = defineEmits(['closeChat'])

const closeChat = () => {
	emits('closeChat')
}
</script>

<template>
	<div class="chat">
		<div class="chat__header">
			<img src="../assets/images/photo.png" alt="фото профиля" class="chat__profile-picture">
			<div class="chat__header-info">
				<span class="chat__consultant-name">Лариса</span>
				<span class="chat__consultant-title">Онлайн-консультант</span>
			</div>
			<button class="chat__close-button" @click="closeChat">
				<img src="../assets/icons/close.svg" alt="close">
			</button>
		</div>
		<div class="chat__body">
			<div class="chat__message-container">
				<div class="chat__message chat__message_type_consultant">
					<p>Здравствуйте!<br>Если у Вас есть вопросы, мы с радостью ответим на них.</p>
				</div>

				<div class="chat__message chat__message_type_consultant">
					<p>Перейдите по ссылке в WhatsApp или напишите в чат, и мы свяжемся <br> с Вами</p>
					<button class="chat__whatsapp-button">
						<img src="../assets/icons/whatsapp.svg" alt="WhatsApp Logo">
						WhatsApp
					</button>
				</div>
			</div>

			<div class="chat__message-container">
				<div class="chat__message chat__message_type_client">
					<p>Здравствуйте!<br>Есть в наличии вата Матопат зигзаг?</p>
				</div>
			</div>

			<div class="chat__message-container">
				<div class="chat__message chat__message_type_consultant">
					<p>Кажется, вы не авторизованы... Пожалуйста, оставьте свои контакты для связи</p>
				</div>

				<div class="chat__message chat__message_type_consultant">
					<form class="chat-form">
						<h2 class="chat-form__title">Укажите свои данные</h2>
						<div class="chat-form__inputs">
							<input class="chat-form__input" type="text" name="name" placeholder="Введите имя" required>
							<input class="chat-form__input" type="tel" name="phone" placeholder="+7 (000)-000-00-00" required>
						</div>
						<button class="chat-form__button" type="submit">Отправить</button>
						<p class="chat-form__consent">Нажимая кнопку, вы даёте согласие на обработку персональных данных</p>
					</form>
				</div>

			</div>

		</div>
		<div class="chat__footer">
			<textarea placeholder="Напишите сообщение..." class="chat__message-text"></textarea>
			<button class="chat__send-button">
				<img src="../assets/icons/send.svg" alt="отправить">
			</button>
		</div>
	</div>

</template>

<style scoped>
.chat {
	width: 377px;
	box-shadow: 0 0 60px 4px #00000033;
	display: flex;
	flex-direction: column;
	right: 40px;
	bottom: 50px;
	position: fixed;
	border-radius: 12px
}

.chat__header {
	background-color: #FF9900;
	color: white;
	padding: 12px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 12px 12px 0 0;
}

.chat__profile-picture {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.chat__header-info {
	flex-grow: 1;
	margin-left: 8px;

}

.chat__consultant-name {
	font-size: 16px;
	display: block;
	font-weight: bold;
}

.chat__consultant-title {
	font-size: 14px;
}

.chat__close-button {
	background: none;
	border: none;
	color: white;
	cursor: pointer;
	padding: 0;
}

.chat__body {
	padding: 10px 20px 20px;
	flex-grow: 1;
	height: 460px;
	overflow: hidden;
	overflow-y: scroll;
	background-color: #fff;
}

/* Стилизация прокрутки в textarea */
.chat__body::-webkit-scrollbar {
	width: 4px;
}

.chat__body::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 4px;
}

.chat__body::-webkit-scrollbar-thumb {
	background: transparent;
	border-radius: 4px;
}

.chat__body::-webkit-scrollbar-thumb:hover {
	background: transparent;
}



.chat__message {
	background-color: #F6F6F6;
	box-sizing: border-box;
	border-radius: 16px;
	padding: 12px;
	margin-bottom: 2px;
	width: 280px;
	font-size: 14px;
	line-height: 130%;
	p {
		margin: 0;
	}
}

.chat__message_type_consultant {
	border-radius: 0 16px 16px 0;
	background-color: #F6F6F6;
}


.chat__message_type_consultant:first-child {
	border-radius: 16px 16px 16px 0;
	margin-top: 10px;
}

.chat__message_type_client {
	margin-left: auto;
	background: #FF990026;
	border-radius: 16px 0 0 16px;
}

.chat__message_type_client:first-child {
	margin-top: 10px;
	border-radius: 16px 16px 0 16px;
}

.chat__whatsapp-button {
	background: linear-gradient(180deg, #61FD7D 0%, #25CF43 100%);
	color: white;
	border: none;
	padding: 8px 10px;
	border-radius: 80px;
	display: flex;
	align-items: center;
	cursor: pointer;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	margin-top: 12px;
}

.chat__whatsapp-button img {
	width: 24px;
	height: 24px;
	margin-right: 8px;
}

.chat__footer {
	display: flex;
	align-items: center;
	padding: 16px 20px;
	background-color: #fff;
	border-top: 1px solid #E6E6E6;
}

.chat__message-text {
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
.chat__message-text::-webkit-scrollbar {
	width: 4px;
}

.chat__message-text::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 4px;
}

.chat__message-text::-webkit-scrollbar-thumb {
	background: #888;
	border-radius: 4px;
}

.chat__message-text::-webkit-scrollbar-thumb:hover {
	background: #555;
}


.chat__send-button {
	background-color: transparent;
	border: none;
	padding: 0;
	cursor: pointer;
}


/*chat-form*/

.chat-form {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.chat-form__inputs {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.chat-form__title {
	color: #8E8E93;
	font-weight: 400;
	margin: 0;
	font-size: 14px;
}

.chat-form__consent {
	font-size: 12px;
	padding: 0;
	color: #8E8E93;
}

.chat-form__input {
	padding: 13px 16px;
	border-radius: 8px;
	border: 1px solid #E5E5EA;
	outline: none;
}

.chat-form__button {
	background-color: #FF9900;
	font-size: 14px;
	font-weight: 600;
	border: none;
	padding: 12px;
	color: white;
	border-radius: 8px;
}


@media screen and (max-width: 500px){
	.chat {
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	.chat__header {
		border-radius: 0;
	}

}
</style>