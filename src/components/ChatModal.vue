<script setup>
import {computed, nextTick, onMounted, onUnmounted, ref} from "vue";
import {finishMessage, getMessageHistory, postFormData, postMessage} from "../api/chat.js";
import MessageBlock from "./MessageBlock.vue";
import MessageField from "./ui/MessageField.vue";
import {useTimer} from "../composable/useTimer.js";
import TypingIndicator from "./ui/TypingIndicator.vue";


const emits = defineEmits(['close']);

const {startTimer, resetTimer} = useTimer()
const messageHistory = ref([]);
const isTyping = ref(false)
const chatBody = ref(null)

const close = () => {
	emits('close');
};

const message = ref('')

const groupedMessages = computed(() => {
	let result = [];
	let arrByFrom = [];
	let fromBot = true;

	if (messageHistory.value) {
		for (let i = 0; i < messageHistory.value.length; i++) {
			if (fromBot !== messageHistory.value[i].fromBot) {
				if (arrByFrom.length > 0) {
					result.push(arrByFrom);
				}
				arrByFrom = [];
				fromBot = messageHistory.value[i].fromBot;
			}
			arrByFrom.push({...messageHistory.value[i], index: i});
		}

		if (arrByFrom.length > 0) {
			result.push(arrByFrom);
		}
	}

	return result;
});

// загрузка истории сообщений при инициализации чата
const loadData = async () => {
	messageHistory.value = await getMessageHistory();
	scrollToLastMessage()
};

const scrollToLastMessage = () => {
	nextTick(() => {
		let lastBlock = chatBody.value.lastElementChild;
		let lastChild = lastBlock.lastElementChild;
		if (lastChild) {
			lastChild.scrollIntoView({behavior: 'smooth'})
		}
	})
}

// отправляю сообщение
const sendMessage = async () => {
	if (message.value) {
		let result = await postMessage(message.value)
		if (result && messageHistory.value) {
			saveMessageClient()
			finishChatMessage()
			scrollToLastMessage()
		}
	}
}

// после отправки 1 сообщения устанавливаю тацмер на 30 сек, после которого будет завершение контекста общения
const finishChatMessage = () => {
	isTyping.value = true
	startTimer(30000, async () => {
		let result = await finishMessage()
		if (result && messageHistory.value) {
			saveMessageBot(result)
			isTyping.value = false
			scrollToLastMessage()
		}
	})
}

const isAuthForm = computed(() => {
	const lastMessage = messageHistory.value[messageHistory.value.length - 1]
	if (lastMessage) {
		return lastMessage.formType === 'not_auth'
	}
	return false
})

const saveMessageBot = (result) => {
	messageHistory.value.push(...result)
}

const saveMessageClient = () => {
	messageHistory.value.push({
		message: message.value,
		fromBot: false,
		type: 'text'
	})

	message.value = ''
}

const sendFormData = async (data) => {
	let result = await postFormData(data)
	if (result && messageHistory.value) {
		messageHistory.value[data.index].isFinished = true
		saveMessageBot(result)
		scrollToLastMessage()
	}
}

onMounted(loadData);
onUnmounted(resetTimer)
</script>

<template>
	<div class="chat">
		<div class="chat__header">
			<img src="../assets/images/photo.png" alt="фото профиля" class="chat__profile-picture">
			<div class="chat__header-info">
				<span class="chat__consultant-name">Лариса</span>
				<span class="chat__consultant-title">
					 <TypingIndicator v-if="isTyping" /> <!-- Индикатор печати -->
          <template v-else>Онлайн-консультант</template>
				</span>
			</div>
			<button class="chat__close-button" @click="close">
				<img src="../assets/icons/close.svg" alt="close">
			</button>
		</div>
		<div class="chat__body" ref="chatBody">
			<MessageBlock
				v-for="(block, index) in groupedMessages"
				:key="index"
				:index="index"
				:data="block"
				@send-event="sendFormData"
			/>
		</div>
		<div class="chat__footer">
			<MessageField v-model="message" @send-event="sendMessage" :disabled="isAuthForm"/>
		</div>
	</div>

</template>

<style scoped>
.chat {
	z-index: 1000;
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
	user-select: none;
}

.chat__profile-picture {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

.chat__header-info {
	flex-grow: 1;
	margin-left: 8px;
	display: flex;
	flex-direction: column;
}

.chat__consultant-name {
	font-size: 16px;
	display: block;
	font-weight: bold;
}

.chat__consultant-title {
	font-size: 14px;
	line-height: 100%;
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
	overflow-y: auto;
	background-color: #fff;
	max-height: calc(100vh - 250px);
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
	background: #9f9c9c;
	border-radius: 4px;
}

.chat__body::-webkit-scrollbar-thumb:hover {
	background: transparent;
}

@media screen and (max-width: 500px) {
	.chat {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
	}

	.chat__header {
		border-radius: 0;
	}

	.chat__body {
		max-height: initial;
	}
}
</style>