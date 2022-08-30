// axios instance and handler error

import axios from 'axios';
import { basicNotif } from '../components/notification';
import HANDLER_STORAGE from '../data';
import { API_URL, TOKEN_TYPE, USER_SESSION } from '../utilities/constant/app.constant';

const HTTP_CLIENT = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

HTTP_CLIENT.interceptors.request.use(
  config => {
    const handlerData = HANDLER_STORAGE.GET(USER_SESSION, 'object');
    const user = handlerData?.data ?? null;
    if (user?.token) {
        config.headers.authorization = `${TOKEN_TYPE} ${user?.token}`
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

HTTP_CLIENT.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const {response} = error;
    if(response && response.status === 401) {
        HANDLER_STORAGE.REMOVE(USER_SESSION);
        basicNotif("Session expirée, Veuillez vous reconnecter.")
        location.replace('/login')
    }
    return Promise.reject(error);
  },
);

export default HTTP_CLIENT;

export const handlingErrors = error => {
  if (error.response) {
    const dataResponse = error.response.data;
    const message = dataResponse?.errors;
    if(dataResponse) {
        const errors = dataResponse?.errors;
        return errors
    }
    return message
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(error.request);
  }
  return error?.message ?? 'Oops !! Léger souci.'
};

export const formatPropValueToString = (error, objectMessage={}) => {
    try {
        const _message = {...objectMessage};
        for (const key in error) {
            if (error.hasOwnProperty(key)) {
                _message[key] = error[key]?.toString();
            }
        }
        return _message;
    } catch (error) {
        return objectMessage;
    }
}
