import axios from "axios";
// import {
//   turnOffLoading,
//   turnOnLoading,
// } from "../redux/loadingReducer/loadingSlice";
// import store from "../redux/store";
export const BASE_URL = "https://movienew.cybersoft.edu.vn/api";
export const MA_NHOM = "GP01";
export const TOKEN_CYBER =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjA4LzA5LzIwMzAiLCJIZXRIYW5UaW1lIjoiMTgyNTc1MzYwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1OTAxMjAwfQ.jyV3i-_5vC6XHKz4qa51eCtgPm_esLCLYyPxDGTB74g";

export const http = axios.create({
  baseURL: BASE_URL,
  headers: {
    TokenCybersoft: TOKEN_CYBER,
  },
});

// // Add a request interceptor
// http.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     dispatch(turnOnLoading());
//     // Bật loading khi bắt đầu gửi request
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// http.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     setTimeout(() => {
//       dispatch(turnOffLoading());
//     }, 2000);

//     // tắt loading khi nhận response
//     return response;
//   },
//   function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     // tắt loading khi nhận reject
//     setTimeout(() => {
//       dispatch(turnOffLoading());
//     }, 2000);

//     return Promise.reject(error);
//   }
// );
