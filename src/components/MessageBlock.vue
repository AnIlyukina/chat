<script setup>
import {toRefs} from "vue";
import {getComponent} from "../utils/getComponent.js";

const emits = defineEmits(['sendEvent'])

const props = defineProps({
	data: {
		type: Array,
		required: true,
	}
})

const { data } = toRefs(props)

const sendEvent = (data) => {
	emits('sendEvent', data)
}

</script>

<template>
	<div class="message-block">
		<Component
			v-for="message in data"
			:is="getComponent(message.type)"
			class="message-block__message"
			:class="message.fromBot ? 'message-block__message_type_bot' : 'message-block__message_type_client'"
			:data="message"
			@sendEvent="sendEvent"
		/>
	</div>

</template>

<style scoped>
.message-block__message {
	background-color: #F6F6F6;
	box-sizing: border-box;
	border-radius: 16px;
	padding: 12px;
	margin-bottom: 2px;
	width: 280px;
}

.message-block__message_type_bot {
	border-radius: 0 16px 16px 0;
	background-color: #F6F6F6;
}

.message-block__message_type_bot:first-child {
	border-radius: 16px 16px 16px 0;
	margin-top: 10px;
}

.message-block__message_type_client {
	margin-left: auto;
	background: #FF990026;
	border-radius: 16px 0 0 16px;
}

.message-block__message_type_client:first-child {
	margin-top: 10px;
	border-radius: 16px 16px 0 16px;
}
</style>