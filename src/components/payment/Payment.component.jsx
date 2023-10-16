import { useQueries } from "@tanstack/react-query";
import { getProductById } from "../../apis/product.apis";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom";
import { Txt } from "../common/Txt.component";
import { getPaymoney } from "../../apis/paymoney.apis";
import { canPayByMoney } from "../../stores/payment.atom";
import { useEffect } from "react";
import { differenceInBusinessDays } from "date-fns";

/**
 * @param {import('react-day-picker').DateRange} rentData
 * @param {number} rentalPrice
 */
const calculatePrice = (rentData, rentalPrice) => {
  return differenceInBusinessDays(rentData.to, rentData.from) * rentalPrice;
};

/**
 * @param {{
 *  id: string
 * }}
 */
export const Payment = ({ id }) => {
  const [productData, moneyData] = useQueries({
    queries: [
      {
        queryKey: ["product", id],
        queryFn: () => getProductById(id),
        suspense: true,
      },
      { queryKey: ["money"], queryFn: () => getPaymoney(), suspense: true },
    ],
  });

  const { data } = productData;
  const { data: money } = moneyData;

  const [rentDate] = useAtom(rentDateAtom);
  const [canPay, setCanPay] = useAtom(canPayByMoney);

  useEffect(() => {
    setCanPay(money.totalPiece >= calculatePrice(rentDate, data.rentalPrice));
  }, [data, money, rentDate]);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col py-6 gap-6">
        <div className="flex justify-between py-3">
          <Txt typography="h6" colors="secondaryLight">
            주문금액
          </Txt>
          <Txt className={!canPay && "text-red-600"}>{`${calculatePrice(
            rentDate,
            data.rentalPrice
          )} 원`}</Txt>
        </div>
        <div className="flex justify-between">
          <Txt typography="h6" colors="secondaryLight">
            대여자
          </Txt>
          <Txt>소민경</Txt>
        </div>
        <div className="flex justify-between">
          <Txt typography="h6" colors="secondaryLight">
            페이머니
          </Txt>
          <Txt>{`보유 ${money.totalPiece} 원`}</Txt>
        </div>
        <div className="flex justify-between">
          <Txt typography="h6" colors="secondaryLight">
            사용
          </Txt>
          <Txt>{`${calculatePrice(rentDate, data.rentalPrice)} 원`}</Txt>
        </div>
      </div>
    </div>
  );
};
