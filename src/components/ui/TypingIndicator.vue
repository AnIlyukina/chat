<template>
	<div class="typing-indicator">
		печатает
		<span class="typing-indicator__dots">
			<span class="dot" v-for="n in 3" :key="n">.</span>
		</span>
	</div>
</template>

<style scoped>
.typing-indicator {
	display: flex;
	align-items: center;
}

.typing-indicator__dots {
	margin-left: 2px;
}

.dot {
	font-size: 24px;
	line-height: 0;
	animation: blink 1.4s infinite both;
}

.dot:nth-child(2) {
	animation-delay: 0.2s;
}

.dot:nth-child(3) {
	animation-delay: 0.4s;
}

@keyframes blink {
	0%, 80%, 100% {
		opacity: 0;
	}
	40% {
		opacity: 1;
	}
}
</style>
<script setup lang="ts">
</script>