import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./ImageSlider.module.css";
import "./ImageSlider.module.css";
import Wrapper from "../Layout/Wrapper";

const ImageSlider = (props) => {
  const images = props.ImageData;
  const [curr, setCurr] = useState(0);
  const len = images.length;

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurr(curr === len - 1 ? 0 : curr + 1);
    console.log(curr);
    console.log(len);
  };

  const prevSlide = () => {
    setCurr(curr === 0 ? len - 1 : curr - 1);
  };

  return (
    <div className={styles["slider"]}>
      {images.map((slide, index) => {
        return (
          <div
            className={
              index === curr
                ? `${styles["slide"]} ${styles["slide-active"]}`
                : styles["slide-not-active"]
            }
            key={index}
          >
            {index === curr && (
              <img src={slide.image} className={styles["image"]} />
            )}
          </div>
        );
      })}
      <div className={styles["arrows"]}>
        <FaArrowAltCircleLeft
          className={styles["left_arrow"]}
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className={styles["right_arrow"]}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
