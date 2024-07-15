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
			<div class="button-link__blocks">
				<div v-for="button in data.buttons">
					<UIButton class="button-link__button" :text="button.buttonText" type="link" :code="button.buttonType" :link="button.buttonUrl" :isIcon="button.buttonType === 'whatsapp'"/>
				</div>
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

.button-link__blocks {
	display: flex;
	gap: 10px;
}
</style>