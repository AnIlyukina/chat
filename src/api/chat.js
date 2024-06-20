import { api, handleApiError} from "./index.js";

export const getMessageHistory = () => {
  return [
    {
      "type": "text",
      "message": "Здравствуйте! Если у Вас есть вопросы, мы с радостью ответим на них.",
      "batch": 3,
      "fromBot": true,
      "isFinished": true
    },
    {
      "type": "buttonLink",
      "message": "Перейдите по ссылке в WhatsApp или напишите в чат, и мы свяжемся с Вами",
      "buttonType": "whatsapp",
      "buttonUrl": "testurl",
      "batch": 3,
      "fromBot": true,
      "isFinished": true
    },
    {
      "type": "text",
      "message": "test",
      "batch": 3,
      "fromBot": false,
      "isFinished": true
    },
    {
      "type": "text",
      "message": "Кажется, вы не авторизованы... Пожалуйста, оставьте свои контакты для связи",
      "batch": 3,
      "fromBot": true,
      "isFinished": true
    },
    {
      "type": "form",
      "message": "Укажите свои данные",
      "formType": "not_auth",
      "formUrl": "api\/chat\/user-data\/",
      "formHint": "Нажимая кнопку, вы даёте согласие на обработку персональных данных",
      "batch": 3,
      "fromBot": true,
      "isFinished": true
    }
  ];
};

export const sendMessage = async () => {
  return {}
};

export const finish = async () => {
  return {}
}