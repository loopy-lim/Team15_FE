import { https } from "../functions/axios.js";
import { ReviewDto } from "./dtos/review.dto.js";

export const createReview = async ({rentalId, star, content }) => {
  const review = await https.post(`/review/${rentalId}`, { star, content });
  if (result.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return review.response;
};

export const getReviews = async({ productId }) => {
  const reviews = await https.get(`/review/${productId}`);
  if (reviews.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return reviews.response.map((review) => new ReviewDto(review));
}