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
