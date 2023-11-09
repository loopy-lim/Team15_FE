import { useEffect } from "react";
import { useAtom } from "jotai";
import { rentDateAtom } from "../../stores/rent.atom.js";
import { canPayByMoney } from "../../stores/payment.atom.js";
import { Txt } from "../common/Txt.component.jsx";
import { useGetProductRentalCalculate } from "../../hooks/useRentalQuery.jsx";
import { useGetPaymoney } from "../../hooks/usePaymonyQuery.jsx";
import { koString } from "../../functions/localeString.js";
import { useNavigate } from "react-router-dom";

/**
 * @param {{
 *  id: string
 * }}
 */
export const Payment = ({ id }) => {
  const [rentDate] = useAtom(rentDateAtom);
  const [canPay, setCanPay] = useAtom(canPayByMoney);
  const navigate = useNavigate();

  const { payment } = useGetPaymoney();
  const { rental } = useGetProductRentalCalculate(id, {
    startAt: rentDate.from,
    endAt: rentDate.to,
  });

  useEffect(() => {
    setCanPay(payment.piece >= rental.totalPrice && rental.totalPrice > 0);
    if (!rental.totalPrice || rental.totalPrice < 0) {
      alert("에러가 발행했습니다. 다시 시도해주세요.");
      navigate("/");
    }
  }, [rental, payment]);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col py-6 gap-6">
        <div className="flex justify-between py-3">
          <Txt typography="h6" colors="secondaryLight">
            주문금액
          </Txt>
          <Txt className={!canPay && "text-red-600"}>{`${koString(
            rental.totalPrice
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
          <Txt>{`보유 ${koString(payment.piece)} 원`}</Txt>
        </div>
        <div className="flex justify-between">
          <Txt typography="h6" colors="secondaryLight">
            사용
          </Txt>
          <Txt>{`${koString(rental.totalPrice)} 원`}</Txt>
        </div>
      </div>
    </div>
  );
};
