import { Suspense } from "react";
import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { AppBar } from "../../components/common/AppBar.component.jsx";
import { Payment } from "../../components/payment/Payment.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { PaymoneyProduct } from "../../components/payment/Product.component.jsx";
import { AnounceCanPayment } from "../../components/payment/AnounceCanPayment.component.jsx";
import { PaymentPayButton } from "../../components/payment/PayButton.component.jsx";
import { ErrorBoundary } from "../../components/common/Errorboundary.component.jsx";
import { canPayByMoney } from "../../stores/payment.atom.js";

export const PaymentPage = () => {
  const { id } = useParams();

  const [canPay] = useAtom(canPayByMoney);

  return (
    <>
      <AppBar to={`/rent-period/${id}`} title="결제하기" br={true} />
      <MainContainer>
        <div className="flex flex-col h-full justify-between">
          <div>
            <ErrorBoundary>
              <Suspense fallback={<div>loading...</div>}>
                <PaymoneyProduct id={id} />
                <Payment id={id} />
              </Suspense>
            </ErrorBoundary>
          </div>
          {!canPay && <AnounceCanPayment productId={id} />}
        </div>
        <PaymentPayButton />
      </MainContainer>
    </>
  );
};
