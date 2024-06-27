import {api, handleApiError, handleApiResponse} from "./index.js";
import {useStore} from "../store/store.js";


export const getMessageHistory = async () => {
  try {
    const response = await api.get('api/chat/messages/');
    return handleApiResponse(response.data);
    // return [{
    //   "message": "Укажите свои данные",
    //   "formType": "not_auth",
    //   "formUrl": "api/chat/user-data/",
    //   "formHint": "Нажимая кнопку, вы даёте согласие на обработку персональных данных",
    //   "type": "form_user_data",
    //   "batch": 4,
    //   "fromBot": true,
    //   "isFinished": false
    // }]
  } catch (error) {
    handleApiError(error)
  }
};

export const postMessage = async (message) => {
  try {
    const response = await api.post('api/chat/messages/', {message});
    return handleApiResponse(response.data);
  } catch (error) {
    handleApiError(error)
  }
};

export const finishMessage = async () => {
  try {
    const response = await api.post('api/chat/finish/');
    return handleApiResponse(response.data);
  } catch (error) {
    handleApiError(error)
  }
}

export const postFormData = async (data) => {
  const store = useStore()
  store.setLoadingForm(true)
  try {
    const response = await api.post('api/chat/user/', data);
    store.setErrorFrom('')
    return handleApiResponse(response.data)
  } catch (error) {
    const data = handleApiError(error)
    if (data && data.error) {
      store.setErrorFrom(data.error)
    }
  } finally {
    store.setLoadingForm(false)
  }
}