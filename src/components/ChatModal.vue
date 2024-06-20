<script setup>
import {computed, onMounted, ref} from "vue";
import {getMessageHistory} from "../api/chat.js";
import MessageBlock from "./MessageBlock.vue";
import MessageField from "./ui/MessageField.vue";

const emits = defineEmits(['close']);
const messageHistory = ref([]);

const close = () => {
	emits('close');
};

const groupedMessages = computed(() => {
	let result = [];
	let arrByFrom = [];
	let fromBot = true;

	for (let i = 0; i < messageHistory.value.length; i++) {
		if (fromBot !== messageHistory.value[i].fromBot) {
			if (arrByFrom.length > 0) {
				result.push(arrByFrom);
			}
			arrByFrom = [];
			fromBot = messageHistory.value[i].fromBot;
		}
		arrByFrom.push(messageHistory.value[i]);
	}

	if (arrByFrom.length > 0) {
		result.push(arrByFrom);
	}

	return result;
});

const loadData = async () => {
	messageHistory.value = await getMessageHistory();
};

onMounted(() => {
	loadData();
});
</script>

<template>
	<div class="chat">
		<div class="chat__header">
			<img src="../assets/images/photo.png" alt="фото профиля" class="chat__profile-picture">
			<div class="chat__header-info">
				<span class="chat__consultant-name">Лариса</span>
				<span class="chat__consultant-title">Онлайн-консультант</span>
			</div>
			<div v-if="groupedMessages"></div>
			<button class="chat__close-button" @click="close">
				<img src="../assets/icons/close.svg" alt="close">
			</button>
		</div>
		<div class="chat__body">
			<MessageBlock
				v-for="(block, index) in groupedMessages"
				:key="index"
				:data="block"
			/>
		</div>
		<div class="chat__footer">
			<MessageField/>
		</div>
	</div>

</template>

<style scoped>
.chat {
	z-index: 100;
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
	overflow-y: scroll;
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
	background: transparent;
	border-radius: 4px;
}

.chat__body::-webkit-scrollbar-thumb:hover {
	background: transparent;
}

@media screen and (max-width: 500px) {
	.chat {
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	.chat__header {
		border-radius: 0;
	}

	.chat__body {
		max-height: initial;
	}

}
</style>