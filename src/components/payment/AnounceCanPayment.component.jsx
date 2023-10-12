import { Txt } from "../common/Txt.component";

export const AnounceCanPayment = () => {
  return (
    <Txt typography="subtitle" className="text-center mb-4">
      <div>보유 페이머니보다 주문 금액이 커서 결제가 불가합니다.</div>
      <div>마이페이지 &gt;페이머니에서 충전 후 결제 바랍니다.</div>
    </Txt>
  );
};
