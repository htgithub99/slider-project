export interface ISlider {
  slider: {
    children: JSX.Element | any;
    slideData?: any[];
    classname?: string;
    swiper: {
      draggable?: boolean;
      spacing?: number;
      slidesPerView?: number;
      scrollbarHas?: boolean;
      breakpoints?: any;
      dragSize?: number;
      grabCursor?: boolean;
      centeredSlides?: boolean;
    };
  };
}
