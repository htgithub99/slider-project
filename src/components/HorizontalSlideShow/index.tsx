import className from "classnames";
import React from "react";
import { slideList } from "../../common/constant";
import ItemList from "../ItemList";
import Sliders from "../Sliders";
import styles from "./styles.module.scss";

const HorizontalSlideShow = () => {
  const _renderContentSlider = (item: any, key: number) => (
    <div className={styles.wrapContentSlider}>
      <div
        className={className(styles.wrapContentSlider_image, "swiper-image")}
      >
        <img src={item?.imageUrl} alt={item?.imageUrl} />
      </div>
      <div
        className={className(
          styles.wrapContentSlider_itemList,
          "swiper-list-item"
        )}
      >
        <ItemList data={item?.information} />
      </div>
    </div>
  );

  const SLIDER_HORIZONTAL = {
    children: (item: any, key: number) => (
      <React.Fragment key={key}>
        {_renderContentSlider(item, key)}
      </React.Fragment>
    ),
    slideData: slideList,
    swiper: {
      slidesPerView: 5,
      spacing: 10,
      centeredSlides: true,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    },
  };

  return (
    <div className={styles.wrapHorizontalSlideShow}>
      <Sliders slider={SLIDER_HORIZONTAL} />
    </div>
  );
};

export default HorizontalSlideShow;
