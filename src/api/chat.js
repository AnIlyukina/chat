import {api, handleApiError, handleApiResponse} from "./index.js";

export const getMessageHistory = async () => {
  try {
    const response = await api.get('api/chat/messages/');
    return handleApiResponse(response.data);
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
  try {
    const response = await api.post('api/chat/user/', data);
    return handleApiResponse(response.data)
  } catch (error) {
    handleApiError(error)
  }
}