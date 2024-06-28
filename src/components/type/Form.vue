<script setup>
import {computed, onMounted, ref, toRefs} from "vue";
import UIButton from "../ui/UIButton.vue";
import UIInput from "../ui/UIInput.vue";
import UIInputPhone from "../ui/UIInputPhone.vue";
import {useStore} from "../../store/store.js";
import {storeToRefs} from "pinia";

const emits = defineEmits(['sendEvent'])

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

const {data} = toRefs(props)

const store = useStore()
const { errorForm, isLoadingForm } = storeToRefs(store)

const username = ref(data.value.name ? data.value.name : '')
const phone = ref(data.value.phone ? formatPhone(data.value.phone) : '')
const isErrorUsername = ref(false)
const isErrorPhone = ref(false)
const isValidForm = ref(false)

function formatPhone(phoneNumber){
	return phoneNumber.slice(1);
}

const sendEvt = (e) => {
	e.preventDefault();
	emitForm();
};

const updateUsername = (value) => {
	username.value = value
	isValidForm.value = isFormValid()
}

const updatePhone = (value) => {
	phone.value = value
	isValidForm.value = isFormValid()
}

const isFormValid = () => {
	validateUsername();
	validatePhone();
	return !isErrorUsername.value && !isErrorPhone.value;
};

const validateUsername = () => {
	isErrorUsername.value = username.value.replace(/\s+/g, '') === '';
};

const validatePhone = () => {
	const digitsOnlyPhone = phone.value.replace(/\D/g, '');
	isErrorPhone.value = digitsOnlyPhone.length !== 10;
};

const emitForm = () => {
	emits('sendEvent', {
		name: username.value,
		phone: formatPhoneToSend(phone.value),
		index: data.value.index
	});
};

const formatPhoneToSend = (phone) => {
	const digitsOnlyPhone = phone.replace(/\D/g, '');
	return `8${digitsOnlyPhone}`;
};

const isDisabled = computed(() => {
	return data.value.isFinished || !isValidForm.value
})

onMounted(() => {
	isValidForm.value = isFormValid()
})
</script>

<template>
	<div>
		<form class="form" data="">
			<h2 class="form__title">Укажите свои данные</h2>
			<div class="form__inputs">
				<UIInput
					v-model="username"
					:disabled="data.isFinished"
					name="name"
					placeholder="Введите имя"
					required
					@update:model-value="updateUsername"
				/>
				<UIInputPhone
					v-model="phone"
					:disabled="data.isFinished"
					name="phone"
					required
					@update:model-value="updatePhone"
				/>
			</div>
			<div v-if="errorForm" class="form__error">
				<img src="../../assets/icons/error.svg" alt="error"/> {{errorForm}}
			</div>
			<UIButton :is-loading="isLoadingForm" text="Отправить" :disabled="isDisabled " @click="sendEvt"/>
			<p class="form__consent">Нажимая кнопку, вы даёте согласие на обработку персональных данных</p>
		</form>
	</div>
</template>

<style scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 14px;
}

.form__inputs {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.form__title {
	color: #8E8E93;
	font-weight: 400;
	margin: 0;
	font-size: 14px;
}

.form__consent {
	font-size: 12px;
	margin: 0;
	line-height: 120%;
	color: #8E8E93;
}

.form__error {
	display: flex;
	align-items: center;
	color: #DF3131CC;
	font-size: 14px;
	line-height: 14px;
	font-weight: 400;
	gap: 4px;
}
</style>