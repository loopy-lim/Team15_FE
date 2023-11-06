import { useEffect } from "react";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom.js";
import { canPayByMoney } from "../../stores/payment.atom.js";
import { Txt } from "../common/Txt.component.jsx";
import { useGetProductRentalCalculate } from "../../hooks/useRentalQuery.jsx";
import { useGetPaymoney } from "../../hooks/usePaymonyQuery.jsx";

/**
 * @param {{
 *  id: string
 * }}
 */
export const Payment = ({ id }) => {
  const [rentDate] = useAtom(rentDateAtom);
  const [canPay, setCanPay] = useAtom(canPayByMoney);

  const { payment } = useGetPaymoney();
  const { rental } = useGetProductRentalCalculate(id, {
    startAt: rentDate.from,
    endAt: rentDate.to,
  });

  useEffect(() => {
    setCanPay(payment.piece >= rental.totalPrice);
  }, [rental, payment]);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col py-6 gap-6">
        <div className="flex justify-between py-3">
          <Txt typography="h6" colors="secondaryLight">
            주문금액
          </Txt>
          <Txt
            className={!canPay && "text-red-600"}
          >{`${rental.totalPrice} 원`}</Txt>
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
          <Txt>{`보유 ${payment.piece} 원`}</Txt>
        </div>
        <div className="flex justify-between">
          <Txt typography="h6" colors="secondaryLight">
            사용
          </Txt>
          <Txt>{`${rental.totalPrice} 원`}</Txt>
        </div>
      </div>
    </div>
  );
};
