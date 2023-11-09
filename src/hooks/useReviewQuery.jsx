import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { createReview, getReviews } from "../apis/review.apis.js";
import { ReviewDto } from "../apis/dtos/review.dto.js";

/**
 * @param {string} productId
 * @param {number} star
 * @param {string} content
 */
export const useCreateReview = () => {
  const { mutate: mutationReview } = useMutation({
    mutationFn: createReview,
  });
  return { mutationReview };
};

/**
 * @returns {{reviews:ReviewDto[]}}
 */
export const useGetAllReviews = ({ productId }) => {
  const { data: reviews } = useSuspenseQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getReviews({ productId }),
  });
  return { reviews };
};
