<script setup>
import ChatButton from "./components/ChatButton.vue";
import ChatModal from "./components/ChatModal.vue";
import {ref} from "vue";

const isOpenChat = ref(false)

const toggleChat = () => {
	isOpenChat.value = !isOpenChat.value;
	updateMenuVisibility();
};

const updateMenuVisibility = () => {
	const isMobile = window.innerWidth <= 500;
	if (isOpenChat.value) {
		if (isMobile) document.body.classList.add('modal-chat-open');
	} else {
		if (isMobile) document.body.classList.remove('modal-chat-open');
	}
};
</script>

<template>
	<ChatButton v-if="!isOpenChat" @click="toggleChat"/>
	<Transition name="fade">
		<ChatModal v-if="isOpenChat" @close="toggleChat"/>
	</Transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active в версии <2.1.8 */ {
	opacity: 0;
}
.modal-chat-open {
	overflow: hidden;
}

.modal-chat-open > *{
	display: none;
}
</style>
