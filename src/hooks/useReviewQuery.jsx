import { useMutation } from "@tanstack/react-query";
import { createReview } from "../apis/review.apis";

/**
 * @param {string} productId
 * @param {number} star
 * @param {string} content
 */
export const useCreateReview = (productId, star, content) => {
  const { mutate: mutationReview } = useMutation(() =>
    createReview(productId, { star, content })
  );
  return { mutationReview };
};
