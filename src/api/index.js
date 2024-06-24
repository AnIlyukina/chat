import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL === 'production'
  ? `${window.location.origin}`
  : import.meta.env.VITE_API_BASE_URL

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
});


// Функция для обработки ошибок
const handleApiError = (error) => {
  if (error.response) {
    // Сервер ответил статусом, отличным от 2xx
    console.error('Server Error:', error.response.data);
  } else if (error.request) {
    // Запрос был сделан, но ответа не было
    console.error('Network Error:', error.request);
  } else {
    // Что-то произошло при настройке запроса
    console.error('Error:', error.message);
  }
  throw error;
};

// Функция для обработки ответа API
const handleApiResponse = (response) => {
  // Проверка ошибки в ответе
  if (response.error !== null) {
    console.error(`Ошибка: ${response.error}`);
    return;
  }

  // Проверка успешности запроса
  if (!response.success) {
    console.error("Запрос не удался.");
    return;
  }

  // Возвращаем обработанные сообщения
  return response.result;
};

export {api, handleApiError, handleApiResponse};