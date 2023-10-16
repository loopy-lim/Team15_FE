import { isAxiosError } from "axios";
import { https } from "../functions/axios";
import { MoneyDto } from "./dtos/money.dto";

export const getPaymoney = async () => {
  const paymoney = await https.get("/paymoney");
  if (isAxiosError(paymoney) && paymoney.response?.status === 404) {
    window.location.href = "/error/404";
  }

  return new MoneyDto(paymoney.response);
};
