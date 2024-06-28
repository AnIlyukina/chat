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
	const menu = document.querySelector('.main-menu__fixed-menu');
	const isMobile = window.innerWidth <= 500;
	if (isOpenChat.value) {
		if (menu) menu.style.display = 'none';
		if (isMobile) document.body.classList.add('modal-open');
	} else {
		if (menu) menu.style.display = '';
		if (isMobile) document.body.classList.remove('modal-open');
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

.modal-open {
    overflow: hidden;
}
</style>
