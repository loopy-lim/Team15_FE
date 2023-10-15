import { useParams } from "react-router-dom";
import { AppBar } from "../../components/common/AppBar.component";
import { Payment } from "../../components/payment/Payment.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { useAtom } from "jotai";
import { canPayByMoney } from "../../stores/payment.atom";
import { PaymoneyProduct } from "../../components/payment/Product.component";
import { AnounceCanPayment } from "../../components/payment/AnounceCanPayment.component";
import { PaymentPayButton } from "../../components/payment/PayButton.component";

export const PaymentPage = () => {
  const { id } = useParams();

  const [canPay] = useAtom(canPayByMoney);

  return (
    <>
      <AppBar to={`/rent/${id}`} title="결제하기" br={true} />
      <MainContainer>
        <div className="flex flex-col h-full justify-between">
          <div>
            <PaymoneyProduct id={id} />
            <Payment id={id} />
          </div>
          {!canPay && <AnounceCanPayment />}
        </div>
        <PaymentPayButton />
      </MainContainer>
    </>
  );
};
