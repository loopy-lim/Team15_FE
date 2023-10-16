import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import classnames from "classnames";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom-carousel.css";

/**
 * @param {{
 *  data: {
 *    img: React.ImgHTMLAttributes<HTMLImageElement
 *  }[]
 * }}
 */
export const Carousel = ({ data: carouselData }) => {
  return (
    <Swiper
      className="home-carousel rounded-lg"
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {carouselData.map((data) => (
        <SwiperSlide key={data.img.alt}>
          <img {...data.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
