import { isAxiosError } from "axios";
import { https } from "../functions/axios";

export const getPaymoney = async () => {
  const paymoney = await https.get("/paymoney");
  if (isAxiosError(paymoney) && paymoney.response?.status === 404) {
    window.location.href = "/error/404";
  }

  return paymoney.response;
};
