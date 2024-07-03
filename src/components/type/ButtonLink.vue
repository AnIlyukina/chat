<script setup>
import {toRefs} from "vue";
import UIButton from "../ui/UIButton.vue";

const props = defineProps({
	data: {
		type: Object,
		required: true,
	}
})

const {data} = toRefs(props)
</script>

<template>
	<div>
		<div class="button-link">
			<p class="button-link__text" v-html="data.message"></p>
			<div v-for="button in data.buttons">
				<UIButton v-if="button.buttonType === 'whatsapp'" class="button-link__button" :text="button.buttonText" type="link" :link="button.buttonUrl" isIcon/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.button-link__text {
	margin: 0;
	font-size: 14px;
	line-height: 120%;
}

.button-link__button {
	margin-top: 12px;
}
</style>