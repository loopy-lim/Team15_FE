import { isAxiosError } from "axios";
import { https } from "../functions/axios";
import { ProductDto } from "./dtos/product.dto";

export const getProductById = async (id) => {
  const product = await https.get(`/product/${id}`);
  if (isAxiosError(product) && product.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return new ProductDto(product.response);
};

export const getAllProduct = async () => {
  const products = await https.get("/product");
  if (isAxiosError(products) && products.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return products.response.map((product) => new ProductDto(product));
};
