import axios from "axios";

const https = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
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
