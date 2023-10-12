import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/product/Detail.component";
import { AppBar } from "../components/common/AppBar.component";
import { BottomFullLink } from "../components/common/BottomFullLink.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { ErrorBoundary } from "../components/common/Errorboundary.component";
import { Suspense } from "react";

export const PayMoneyPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/mypage/paymoney" />
      <MainContainer hasBottomFullLink={true}>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <ProductDetail id={id} />
          </Suspense>
        </ErrorBoundary>
        <BottomFullLink title="페이머니" to={`/rental/${id}`} br={true} />
      </MainContainer>
    </>
  );
};
