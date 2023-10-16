import { Carousel } from "../common/Carousel.component";

export const HomeCarousel = () => {
  const carouselData = [
    {
      img: {
        src: "https://placehold.co/600x400",
        alt: "placeholder1",
        className: "w-full object-cover w-full aspect-[4/3]",
      },
    },
    {
      img: {
        src: "https://placehold.co/600x400",
        alt: "placeholder2",
        className: "w-full object-cover w-full aspect-[4/3]",
      },
    },
    {
      img: {
        src: "https://placehold.co/600x400",
        alt: "placeholder3",
        className: "w-full object-cover w-full aspect-[4/3]",
      },
    },
  ];
  return <Carousel data={carouselData} />;
};
