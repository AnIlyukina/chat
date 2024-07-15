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
	},
	isLoading: {
		type: Boolean,
		default: false
	},
	code: {
		type: String,
		default: ''
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
			:class="[type ? `button_type_${code}` : '']"
			:disabled="disabled"
			@click="onClickButton">
			<img v-if="isIcon" class="button__icon" src="../../assets/icons/whatsapp.svg" alt="WhatsApp Logo">
			<span v-if="isLoading"><img class="button__loading" alt="загрузка"  width="24" height="24" src="../../assets/icons/progress_light.svg"/></span>
			<span v-else>{{ text }}</span>
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
	padding: 6px;
	min-height: 44px;
	width: 100%;
	border-radius: 8px;
	transition: background-color ease .3s;
}

.button:hover {
	background-color: #ff6700d4;
}

.button_type_whatsapp {
	padding: 8px 10px;
	min-height: initial;
	border-radius: 80px;
	width: fit-content;
	background: linear-gradient(180deg, #61FD7D 0%, #25CF43 100%);
}

.button_type_whatsapp:hover {
	background: linear-gradient(180deg, #29ff50 0%, #1fa836 100%);
}

.button_type_phone {
	padding: 6px 8px;
	min-height: initial;
	border-radius: 80px;
	width: fit-content;
	background:transparent;
	color: #2982a4;
	border: 2px solid #2982a4;
}

.button_type_phone:hover {
	background: transparent;
}

.button__icon {
	width: 24px;
	height: 24px;
	margin-right: 8px;
}

.button:disabled {
	cursor: auto;
	background: #EBEBEC;
	color: #B5B5BC;
}

.button__loading {
	animation: spin 3s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>