"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./RunningLine.module.css";

import { FaPlus } from "react-icons/fa6";

export default function RunningLine({ speed = 5000, images }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: speed,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={styles.runningLineContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <p>hello</p>
        </div>
        <div className={styles.slide}>
          <p>hello</p>
        </div>
        <div className={styles.slide}>
          <p>hello</p>
        </div>
        <div className={styles.slide}>
          <p>hello</p>
        </div>
      </Slider>
    </div>
  );
}
