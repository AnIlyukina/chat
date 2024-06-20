<script setup>
import {toRefs} from "vue";
import UIButton from "../ui/UIButton.vue";
import UIInput from "../ui/UIInput.vue";

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

const {data} = toRefs((props))
</script>

<template>
	<div>
		<form class="form" data="">
			<h2 class="form__title">Укажите свои данные</h2>
			<div class="form__inputs">
				<UIInput
					name="name"
					placeholder="Введите имя"
					required
				/>
				<UIInput
					type="tel"
					name="phone"
					placeholder="+7 (000)-000-00-00"
					required
				/>
			</div>
			<UIButton text="Отправить"/>
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
	color: #8E8E93;
}
</style>