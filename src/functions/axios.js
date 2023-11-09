import axios from "axios";

const https = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
  withCredentials: true,
});

https.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

https.interceptors.response.use(
  (response) => {
    const resDto = response.data;
    if (resDto.error) {
      window.location.href = "/error/" + resDto.error.status;
    }
    return response.data;
  },
  (error) => {
    const resDto = error.response.data;
    if (resDto.reason === "login_unauthenticated_user") {
      location.href = "/signin";
    }
    if (error.response.status >= 500) {
      window.location.href = "/error/500";
    }
    if (error.response.status >= 404) {
      window.location.href = "/error/404";
    }
    return Promise.reject(error.response.data);
  }
);

export { https };
