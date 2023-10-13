import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../apis/product";

/**
 * @param {string} id
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{product: import("../types/product").product}}
 */
export const useGetProductById = (id, config) => {
  const { data: product } = useQuery(
    ["product", id],
    () => getProductById(id),
    { ...config, suspense: true }
  );
  return { product };
};

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{products: import("../types/product").product[]}}
 */
export const useGetProductAll = (config) => {
  const { data: products } = useQuery(["allProduct"], () => getAllProduct(), {
    ...config,
    suspense: true,
  });
  return { products };
};
