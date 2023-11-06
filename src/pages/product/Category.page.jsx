import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "../../components/common/Errorboundary.component.jsx";
import { MainContainer } from "../../components/common/MainContainer.component.jsx";
import { HomeHeader } from "../../components/home/Header.component.jsx";
import { ProductListByCategory } from "../../components/product/ListByCategory.component.jsx";

export const ProductCategoryPage = () => {
  const { id } = useParams();

  return (
    <>
      <HomeHeader />
      <MainContainer hasBottomFullLink={false}>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <ProductListByCategory category={id} />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};
