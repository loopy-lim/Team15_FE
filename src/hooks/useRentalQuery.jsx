import { useMutation } from "@tanstack/react-query";
import { createRental } from "../apis/paymoney.apis";

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @returns {{rentals: import("../types/rental").rentalItem[]}}
 */
export const useGetRentalAll = (config) => {
  const { data: rentals } = useQuery(["allRental"], () => getAllRental(), {
    ...config,
    suspense: true,
  });
  return { rentals };
};

/**
 * @param {string} productId
 * @param {{
 *  startAt: Date
 *  endAt: Date
 * }} param1
 */
export const useCreateRental = (productId, { startAt, endAt }) => {
  const { mutate: mutationRental } = useMutation(() =>
    createRental(productId, { startAt, endAt })
  );
  return { mutationRental };
};
