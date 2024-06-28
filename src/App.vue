<script setup>
import ChatButton from "./components/ChatButton.vue";
import ChatModal from "./components/ChatModal.vue";
import {ref} from "vue";

const isOpenChat = ref(false)

const toggleChat = () => {
	isOpenChat.value = !isOpenChat.value
	if (isOpenChat.value) {
		hiddenMobileMenu()
	} else {
		showMobileMenu()
	}
}

const hiddenMobileMenu = () => {
	let menu = document.querySelector('.main-menu__fixed-menu')
	if (menu) {
		menu.setAttribute('style', 'display: none !important;');
	}
}

const showMobileMenu = () => {
	let menu = document.querySelector('.main-menu__fixed-menu')
	if (menu) {
		menu.removeAttribute('style');
	}
}
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
</style>
