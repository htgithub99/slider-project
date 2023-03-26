// Swiper React components
import className from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import { ISlider } from "../../common/interface";

const Sliders = ({ slider }: ISlider) => {
  const { classname, children, slideData, swiper } = slider;
  const {
    slidesPerView = 1,
    spacing = 10,
    grabCursor = false,
    centeredSlides = false,
    breakpoints,
  } = swiper;

  const classnames = className(classname, "mySwiper");

  const _renderSwiperSlide = (data: any) => {
    if (!data?.length) return null;
    return data?.map((item: any, index: number) => (
      <SwiperSlide key={index}>{children(item, index)}</SwiperSlide>
    ));
  };

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spacing}
      centeredSlides={centeredSlides}
      grabCursor={grabCursor}
      breakpoints={breakpoints}
      className={classnames}
      setWrapperSize={true}
      noSwiping
      loop
    >
      {_renderSwiperSlide(slideData)}
    </Swiper>
  );
};

export default Sliders;
