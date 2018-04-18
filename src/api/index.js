import axios from 'axios';
import { baseUrl as baseURL } from '../constants';

const authHeaderKeys = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid',
];

export const persistAuthHeadersInDeviceStorage = (headers) => {
  authHeaderKeys.forEach((key) => {
    localStorage.setItem(key, headers[key])
  });
}


const setRequestHeaders = (instanceAxios) => {
  authHeaderKeys.forEach((key) => {
    instanceAxios.defaults.headers.common[key] = localStorage.getItem(key);
  });
};


const request = () => {
 const instanceAxios = axios.create ({ baseURL });

  instanceAxios.interceptors.response.use(function (response) {
    // Do something with response data
    persistAuthHeadersInDeviceStorage(response.headers);
    return response;
  });

  setRequestHeaders(instanceAxios);
  return instanceAxios;
};

export default {
  get: (path, params) => request().get(path, { params })
}
