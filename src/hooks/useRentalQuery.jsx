import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  createRental,
  getProductCalculateRental,
} from "../apis/paymoney.apis.js";
import { getAllRental } from "../apis/rental.apis.js";
import { RentalDto } from "../apis/dtos/rental.dto.js";
import { ProductCalculateRentalDto } from "../apis/dtos/product.dto.js";

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @returns {{rentals: RentalDto[]}}
 */
export const useGetRentalAll = (config) => {
  const { data: rentals } = useSuspenseQuery({
    queryKey: ["allRental"],
    queryFn: () => getAllRental(),
    ...config,
  });
  return { rentals };
};
/**
 * @param {string} productId
 * @param {{
 *  startAt: Date
 *  endAt: Date
 * }} param1
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @returns {{rental: ProductCalculateRentalDto}}
 */
export const useGetProductRentalCalculate = (
  productId,
  { startAt, endAt },
  config
) => {
  const { data: rental } = useSuspenseQuery({
    queryKey: ["rental", productId, { startAt, endAt }],
    queryFn: () => getProductCalculateRental(productId, { startAt, endAt }),
    ...config,
  });
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
