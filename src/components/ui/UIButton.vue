<script setup>
import {toRefs} from "vue";

const props = defineProps({
	type: {
		type: String,
		default: ''
	},
	isIcon: {
		type: Boolean,
		default: false
	},
	text: {
		type: String,
		default: ''
	}
})

const {type} = toRefs(props)
</script>

<template>
	<button
		class="button"
		:class="type ? `button_type_${type}` : ''"
		@click="">
		<img v-if="isIcon" class="button__icon" src="../../assets/icons/whatsapp.svg" alt="WhatsApp Logo">
		{{ text }}
	</button>

</template>

<style scoped>
.button {
	color: white;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: #FF9900;
	font-size: 14px;
	font-weight: 600;
	padding: 12px;
	border-radius: 8px;
}

.button_type_link {
	padding: 8px 10px;
	border-radius: 80px;
	background: linear-gradient(180deg, #61FD7D 0%, #25CF43 100%);
}

.button__icon {
	width: 24px;
	height: 24px;
	margin-right: 8px;
}
</style>