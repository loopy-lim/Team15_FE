import { isAxiosError } from "axios";
import { https } from "../functions/axios.js";
import { ProductDto } from "./dtos/product.dto.js";

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

export const getProductByCategory = async (category) => {
  const products = await https.get(`/category/${category}`);
  if (isAxiosError(products) && products.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return products.response.map((product) => new ProductDto(product));
};

export const getProductBySearch = async (search) => {
  const products = await https.get(`/product?search=${search}`);
  if (isAxiosError(products) && products.response?.status === 404) {
    window.location.href = "/error/404";
  }
  return products.response.map((product) => new ProductDto(product));
};
