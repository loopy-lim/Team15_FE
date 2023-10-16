import axios from "axios";

const https = axios.create({
  baseURL: import.meta.VITE_API_URL,
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
    return response;
  },
  (error) => {
    const resDto = error.response.data;

    if (error.response.status === 500) {
      console.error(resDto.error?.message);
      return error;
    }

    if (error.response.status === 401) {
      alert(resDto.error?.message);
      console.error(resDto.error?.message);
      return error;
    }
    if (error.response.status === 400) {
      alert(resDto.error?.message);
      console.error(resDto.error?.message);
      return error;
    }

    alert(resDto.error?.message);
    return error;
  }
);

export { https };
