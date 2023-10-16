import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";
import { ProductList } from "../components/product/List.component";
import { MainContainer } from "../components/common/MainContainer.component";
import { ErrorBoundary } from "../components/common/Errorboundary.component";
import { Suspense } from "react";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <MainContainer hasBottomFullLink={false}>
        <HomeCarousel />
        <div className="my-8">
          <ErrorBoundary>
            <Suspense fallback={<div>loading...</div>}>
              <HomeCategory />
            </Suspense>
          </ErrorBoundary>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <ProductList />
          </Suspense>
        </ErrorBoundary>
      </MainContainer>
    </>
  );
};
