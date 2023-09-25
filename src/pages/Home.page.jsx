import { HomeCarousel } from "../components/home/Carousel.component";
import { HomeCategory } from "../components/home/Category.component";
import { HomeHeader } from "../components/home/Header.component";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <div className="my-6">
        <HomeCarousel />
      </div>
      <div className="my-8">
        <HomeCategory />
      </div>
    </>
  );
};