import { AppBar } from "../components/common/AppBar.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { MyMoney } from "../components/paymoney/MyMoney.component.jsx";
import { MoneyHistory } from "../components/paymoney/MoneyHistory.component.jsx";
import { Suspense } from "react";
import { ErrorBoundary } from "../components/common/Errorboundary.component.jsx";

export const PayMoneyPage = () => {
  return (
    <>
      <AppBar to="/mypage" title="페이머니" />
      <MainContainer hasBottomFullLink={false}>
        <div className="flex flex-col gap-6 h-full pb-6">
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <MyMoney />
            </Suspense>
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<></>}>
              <MoneyHistory />
            </Suspense>
          </ErrorBoundary>
        </div>
      </MainContainer>
    </>
  );
};
