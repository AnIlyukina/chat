<script setup>
import {ref, toRefs} from "vue";
import UIButton from "../ui/UIButton.vue";
import UIInput from "../ui/UIInput.vue";
import UIInputPhone from "../ui/UIInputPhone.vue";

const emits = defineEmits(['sendEvent'])

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

const {data} = toRefs(props)

const username = ref('')
const phone = ref('')
const isErrorUsername = ref(false)
const isErrorPhone = ref(false)

const sendEvt = (e) => {
	e.preventDefault();
	if (isFormValid()) {
		emitForm();
	}
};

const isFormValid = () => {
	validateUsername();
	validatePhone();

	return !isErrorUsername.value && !isErrorPhone.value;
};

const validateUsername = () => {
	isErrorUsername.value = username.value.length < 3;
};

const validatePhone = () => {
	const digitsOnlyPhone = phone.value.replace(/\D/g, '');
	isErrorPhone.value = digitsOnlyPhone.length !== 10;
};

const emitForm = () => {
	emits('sendEvent', {
		name: username.value,
		phone: formatPhoneNumber(phone.value),
		index: data.value.index
	});
};

const formatPhoneNumber = (phone) => {
	const digitsOnlyPhone = phone.replace(/\D/g, '');
	return `8${digitsOnlyPhone}`;
};

</script>

<template>
	<div>
		<form class="form" data="">
			<h2 class="form__title">Укажите свои данные</h2>
			<div class="form__inputs">
				<UIInput
					v-model="username"
					:is-valid="!isErrorUsername"
					name="name"
					placeholder="Введите имя"
					required
				/>
				<UIInputPhone
					v-model="phone"
					:is-valid="!isErrorPhone"
					name="phone"
					required
				/>
			</div>
			<UIButton text="Отправить" :disabled="data.isFinished" @click="sendEvt"/>
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
</style>