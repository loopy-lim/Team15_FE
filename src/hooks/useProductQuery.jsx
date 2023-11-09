import { useSuspenseQuery } from "@tanstack/react-query";
import {
  getAllProduct,
  getProductByCategory,
  getProductById,
  getProductBySearch,
} from "../apis/product.apis.js";
import { ProductDto } from "../apis/dtos/product.dto.js";

/**
 * @param {string} id
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{product: ProductDto}}
 */
export const useGetProductById = (id, config) => {
  const { data: product } = useSuspenseQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    ...config,
  });
  return { product };
};

/**
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{products: ProductDto[]}}
 */
export const useGetProductAll = (config) => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["allProduct"],
    queryFn: () => getAllProduct(),
    ...config,
  });
  return { products };
};

/**
 * @param {string} category
 * @param {import("@tanstack/react-query").UseQueryOptions} config
 * @return {{products: ProductDto[]}}
 */
export const useGetProductByCategory = (category, config) => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["productByCategory", category],
    queryFn: () => getProductByCategory(category),
    ...config,
  });
  return { products };
};

export const useGetProductBySearch = (search, config) => {
  const { data: products } = useSuspenseQuery({
    queryKey: ["productBySearch", search],
    queryFn: () => getProductBySearch(search),
    ...config,
  });
  return { products };
};
