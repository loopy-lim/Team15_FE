import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";
import { ProductList } from "../components/product/List.component";
import { MainContainer } from "../components/common/MainContainer.component";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <MainContainer hasBottomFulLink={false}>
        <HomeCarousel />
        <div className="my-8">
          <HomeCategory />
        </div>
        <ProductList />
      </MainContainer>
    </>
  );
};
