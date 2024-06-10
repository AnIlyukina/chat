<script setup>
import ChatButton from "./components/ChatButton.vue";
import ChatModal from "./components/ChatModal.vue";
import {ref} from "vue";

const isOpenChat = ref(false)

const openChat = () => {
	isOpenChat.value = true
}

const closeChat = () => {
	isOpenChat.value = false
}

</script>

<template>
	<ChatButton v-if="!isOpenChat" @click="openChat" />
	<ChatModal v-if="isOpenChat" @close-chat="closeChat" />
</template>

<style>
</style>
