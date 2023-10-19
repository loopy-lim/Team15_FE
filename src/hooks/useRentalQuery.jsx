import { useMutation, useQuery } from "@tanstack/react-query";
import { createRental } from "../apis/paymoney.apis";
import { getAllRental } from "../apis/rental.apis";
import { RentalDto } from "../apis/dtos/rental.dto";

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @returns {{rentals: RentalDto[]}}
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
