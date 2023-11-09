import { useParams } from "react-router-dom";
import { ProductDetail } from "../../components/product/Detail.component.jsx";
import { AppBar } from "../../components/common/AppBar.component.jsx";
import { BottomFullLink } from "../../components/common/BottomFullLink.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { ErrorBoundary } from "../../components/common/Errorboundary.component.jsx";
import { Suspense } from "react";
import { ProductReviews } from "../../components/product/Reviews.component.jsx";

export const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <AppBar to="/" />
      <MainContainer>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <ProductDetail id={id} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<></>}>
            <ProductReviews productId={id} />
          </Suspense>
        </ErrorBoundary>
        <BottomFullLink title="대여하기" to={`/rent-period/${id}`} br={true} />
      </MainContainer>
    </>
  );
};
