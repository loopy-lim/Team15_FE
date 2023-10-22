import { isAxiosError } from "axios";
import { https } from "../functions/axios.js";
import { MoneyDto } from "./dtos/money.dto.js";

export const getPaymoney = async () => {
  const paymoney = await https.get("/paymoney");
  if (isAxiosError(paymoney) && paymoney.response?.status === 404) {
    window.location.href = "/error/404";
  }

  return new MoneyDto(paymoney.response);
};

/**
 * @param {string} productId
 * @param {{
 *  startAt: Date
 *  endAt: Date
 * }} param1
 */
export const createRental = async (productId, { startAt, endAt }) => {
  const result = await https.post(`/paymoney/${productId}` / create, {
    startAt,
    endAt,
  });
  if (isAxiosError(result) && result.response?.status === 404) {
    window.location.href = "/error/404";
  }

  return result.response;
};
