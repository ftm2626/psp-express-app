import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const publicRequest = axios.create({
  baseURL: API_URL,
});

publicRequest.interceptors.response.use(
  (response: any) => {
    if ((response && response?.status === 200) || response.status === 201) {
      return response;
    }
  },
  (err) => {
    const response = err && err?.response;
    if (response && response?.status === 401) {
      return Promise.reject(response);
    } else {
      return Promise.reject("An Error Occurred");
    }
  }
);
publicRequest.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.defaults.baseURL = API_URL;
