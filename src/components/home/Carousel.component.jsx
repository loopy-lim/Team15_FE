import { useState } from "react";
import { Carousel } from "../common/Carousel.component.jsx";
import { Modal } from "../common/Modal.component.jsx";
import { Txt } from "../common/Txt.component.jsx";

const carouselData = [
  {
    img: {
      src: "/images/banner/1.png",
      alt: "macbook rental",
      className: "w-full object-cover w-full aspect-[4/3]",
    },
  },
  {
    img: {
      src: "/images/banner/2.png",
      alt: "Lg gram rental",
      className: "w-full object-cover w-full aspect-[4/3]",
    },
  },
  {
    img: {
      src: "/images/banner/3.png",
      alt: "galaxybook rental",
      className: "w-full object-cover w-full aspect-[4/3]",
    },
  },
];

export const HomeCarousel = () => {
  const [onModal, setOnMoeal] = useState(false);

  const onCloseModal = () => setOnMoeal(false);

  return (
    <>
      <div onClick={() => setOnMoeal(true)}>
        <Carousel className="z-0" data={carouselData} />
      </div>
      <Modal.Alert
        isOpen={onModal}
        onClose={onCloseModal}
        onRequestClose={onCloseModal}
      >
        <Txt>준비중입니다.</Txt>
      </Modal.Alert>
    </>
  );
};
