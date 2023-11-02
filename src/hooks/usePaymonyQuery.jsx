import { MoneyDto } from "../apis/dtos/money.dto";
import { getPaymoney } from "../apis/paymoney.apis";
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * @returns {{paymoney: MoneyDto}}
 */
export const useGetPaymoney = (config) => {
  const { data: paymoney } = useSuspenseQuery({
    queryKey: ["paymoney"],
    queryFn: () => getPaymoney(),
    ...config,
  });
  return { paymoney };
};
