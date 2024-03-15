import axios from "axios";
import ErrorHandling from "./ErrorHandling";

// Axios Interceptors sabit Url Ve Timeout süresi belirleme
const HTTP = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  timeout: 500,
});

// Add a request interceptor
HTTP.interceptors.request.use(
  function (config) {

    return config;
  },
  function (error) {

    return Promise.reject(error);
  }
);

// Add a response interceptor
HTTP.interceptors.response.use(
  function (response) {


    return response;
  },
  function (error) {


    return Promise.reject(error);
  }
);

export default HTTP;
