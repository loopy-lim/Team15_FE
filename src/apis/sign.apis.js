import { https } from "../functions/axios.js";

export const signIn = async ({ email, password }) => {
  const review = await https.post(`/user/login`, { email, password });
  if (result.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};
