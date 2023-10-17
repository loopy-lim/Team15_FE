import { Suspense } from "react";
import { ErrorBoundary } from "../../components/common/Errorboundary.component";
import { MainContainer } from "../../components/common/MainContainer.component";
import { HomeHeader } from "../../components/home/Header.component";
import { ProductListByCategory } from "../../components/product/ListByCategory.component";
import { useParams } from "react-router-dom";

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
