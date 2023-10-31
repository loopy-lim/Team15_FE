import axios from "axios";
import { errorCase } from "../constants/errorCase";

const https = axios.create({
  baseURL: import.meta.VITE_API_URL,
});

https.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

https.interceptors.response.use((response) => {
  const resDto = response.data;
  if (resDto.error) {
    window.location.href = "/error/" + resDto.error.status;
  }
  return response.data;
});

export { https };
