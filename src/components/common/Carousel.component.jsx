import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./custom-carousel.css";
import classames from "classnames";


/**
 * @param {{
 *  className: string,
 *  data: {
 *    img: React.ImgHTMLAttributes<HTMLImageElement>
 *  }[]
 * }}
 */
export const Carousel = ({ className, data: carouselData }) => {
  return (
    <Swiper
      className={classames("rounded-lg home-carousel", className)}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {carouselData?.map((data) => (
        <SwiperSlide key={data.img.alt}>
          <img {...data.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
