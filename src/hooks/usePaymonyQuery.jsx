import { MoneyDto } from "../apis/dtos/money.dto";
import { getPaymoney } from "../apis/paymoney.apis";
import { useSuspenseQuery } from "@tanstack/react-query";

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
