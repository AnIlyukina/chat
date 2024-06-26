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
	},
	link: {
		type: String,
		default: ''
	},
	disabled: {
		type: Boolean,
		default: false
	}
})

const {type, link} = toRefs(props)
const onClickButton = () => {
	if (type.value === 'link') {
		window.open(link.value, '_blank')
	}
}

</script>

<template>
	<div>
		<button
			class="button"
			:class="[type ? `button_type_${type}` : '']"
			:disabled="disabled"
			@click="onClickButton">
			<img v-if="isIcon" class="button__icon" src="../../assets/icons/whatsapp.svg" alt="WhatsApp Logo">
			{{ text }}
		</button>
	</div>
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
	width: 100%;
	border-radius: 8px;
	transition: background-color ease .3s;
}

.button:hover {
	background-color: #ff6700d4;
}

.button_type_link {
	padding: 8px 10px;
	border-radius: 80px;
	width: fit-content;
	background: linear-gradient(180deg, #61FD7D 0%, #25CF43 100%);
}

.button_type_link:hover {
	background: linear-gradient(180deg, #29ff50 0%, #1fa836 100%);
}


.button__icon {
	width: 24px;
	height: 24px;
	margin-right: 8px;
}

.button:disabled {
	cursor: auto;
	background: #00000026;
}
</style>