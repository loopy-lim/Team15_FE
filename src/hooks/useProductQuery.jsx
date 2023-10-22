import { useQuery } from "@tanstack/react-query";
import {
  getAllProduct,
  getProductByCategory,
  getProductById,
} from "../apis/product.apis.js";
import { ProductDto } from "../apis/dtos/product.dto.js";

/**
 * @param {string} id
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{product: ProductDto}}
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
 * @return {{products: ProductDto[]}}
 */
export const useGetProductAll = (config) => {
  const { data: products } = useQuery(["allProduct"], () => getAllProduct(), {
    ...config,
    suspense: true,
  });
  return { products };
};

/**
 * @param {string} category
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{products: ProductDto[]}}
 */
export const useGetProductByCategory = (category, config) => {
  const { data: products } = useQuery(
    ["product", category],
    () => getProductByCategory(category),
    { ...config, suspense: true }
  );
  return { products };
};
