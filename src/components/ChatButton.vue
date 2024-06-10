<template>
	<button class="chat-button">
		<img src="../assets/icons/chat.svg" alt="чат"/>
	</button>
</template>

<style scoped>
.chat-button {
	height: 60px;
	width: 60px;
	background-color: #FF9900;
	position: fixed;
	border-radius: 50%;
	border: none;
	right: 40px;
	bottom: 50px;
	cursor: pointer;
	animation: animateWidget 2.5s ease infinite;
}

@keyframes animateWidget {
	0%,100% {
		box-shadow: 0 0 0 #FE9901
	}

	50% {
		box-shadow: 0 0 14px #FE9901
	}
}
</style>