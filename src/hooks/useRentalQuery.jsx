import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createRental,
  getProductCalculateRental,
} from "../apis/paymoney.apis.js";
import { getAllRental } from "../apis/rental.apis.js";
import { RentalDto } from "../apis/dtos/rental.dto.js";

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

export const useGetProductRentalCalculate = (productId, { startAt, endAt }) => {
  const { data: rental } = useQuery(
    ["rental", productId, { startAt, endAt }],
    () => getProductCalculateRental(productId, { startAt, endAt }),
    {
      suspense: true,
    }
  );
  return { rental };
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
