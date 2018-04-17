import axios from 'axios';
// import { baseUrl } from '../../constants';

const baseUrl = 'http://localhost:3000/api/v1';
const authHeaderKeys: Array<string> = [
    'access-token',
    'token-type',
    'client',
    'expiry',
    'uid',
];

const setAuthHeaders = (instanceAxios): void => {
  authHeaderKeys.forEach((key: string) => {
    // headers[key] = localStorage(key);
    instanceAxios.defaults.headers.common[key] = localStorage.getItem(key);
  });
};

const request = () => {
  // getauthHeaders.forEach((key: string) => {
  //   axios.defaults.headers.common[key] = headers[key]
  // })
  let instanceAxios = axios.create ({ baseURL: baseUrl });
  setAuthHeaders(instanceAxios);
  debugger;
  return instanceAxios;
};

export const getBeers =() => {
  return request().get('/beers')
};
export const getBeerLogs = () => {
  return request().get('/beer-logs')
};
export const textTest = 'blablabla';
