import axios, { AxiosResponse } from "axios";
// export const InternalError = {
//   message: "Internal error during request.",
//   code: -500,
// };

// export const onFulfilledRequest = (response: AxiosResponse) => response;
// export const onRejectedResponse = (): any => Promise.reject(InternalError);

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
    // const token = Cookies.get('propiy_token');
    // if (config != undefined && config.headers != undefined) {
    //   config.headers['Accept'] = 'application/json';
    //   if (token) {
    //     config.headers['Authorization'] = 'Bearer ' + token;
    //   }
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.defaults.baseURL = API_URL;
