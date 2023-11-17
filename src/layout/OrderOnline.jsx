import React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Title from "./Title";
// import "./styles.css";

const OrderOnline = () => {
  const title = "online order";
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 1,
    },
  });
  return (
    <div>
      <div>
        <Title title={title}></Title>
      </div>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 relative">
          <img src="../../public/home/slide1.jpg" alt="" />
          <h1 className="absolute z-10">Salads</h1>
        </div>
        <div className="keen-slider__slide number-slide2">
          <img src="../../public/home/slide2.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="../../public/home/slide3.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="../../public/home/slide4.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src="../../public/home/slide5.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide6">
          <img src="../../public/home/slide6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
