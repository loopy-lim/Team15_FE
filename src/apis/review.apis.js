import { https } from "../functions/axios";

export const createReview = async (productId, { star, content }) => {
  const review = await https.get(`/review/${productId}`, { star, content });
  if (result.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};
