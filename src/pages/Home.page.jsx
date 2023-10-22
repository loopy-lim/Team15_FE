import { Suspense } from "react";
import { HomeCarousel } from "../components/home/Carousel.component.jsx";
import { HomeCategory } from "../components/home/Category.component.jsx";
import { HomeHeader } from "../components/home/Header.component.jsx";
import { ProductList } from "../components/product/List.component.jsx";
import { MainContainer } from "../components/common/MainContainer.component.jsx";
import { ErrorBoundary } from "../components/common/Errorboundary.component.jsx";

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
