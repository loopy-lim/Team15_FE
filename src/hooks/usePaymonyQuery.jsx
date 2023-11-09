import { MoneyDto, MoneyLogDto } from "../apis/dtos/money.dto";
import {
  getPaymoney,
  getPaymoneyLog,
  postChargeMoney,
} from "../apis/paymoney.apis";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

/**
 * @returns {{payment: MoneyDto}}
 */
export const useGetPaymoney = (config) => {
  const { data: payment } = useSuspenseQuery({
    queryKey: ["payment"],
    queryFn: () => getPaymoney(),
    ...config,
  });
  return { payment };
};

/**
 * @returns {{paymentLog: MoneyLogDto[]}}
 */
export const useGetPaymoneyLog = (config) => {
  const { data: paymentLog } = useSuspenseQuery({
    queryKey: ["paymentLog"],
    queryFn: () => getPaymoneyLog(),
    ...config,
  });
  return { paymentLog };
};

export const usePostPaymoney = (config) => {
  const { mutate: chargeMoney } = useMutation({
    mutationFn: postChargeMoney,
    ...config,
  });
  return { chargeMoney };
};
