import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";

const pinia = createPinia()
const app = createApp(App);

document.addEventListener('DOMContentLoaded', function () {
  let chatDiv = document.createElement('div');
  chatDiv.id = 'chat';
  console.log(document.body, 'document.body')
  document.body.prepend(chatDiv);

  app.use(pinia);
  app.mount('#chat');
});