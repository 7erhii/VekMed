"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./RunningLine.module.css";

import { FaPlus } from "react-icons/fa6";
import { useTranslations } from "next-intl";

const RunningLineData = {
  item1: "item1",
  item2: "item2",
  item3: "item3",
  item4: "item4",
  item5: "item5",
  item6: "item6",
  item7: "item7",
  item8: "item8",
  item9: "item9",
  item10: "item10",
}

export default function RunningLine({ speed = 5000, images, data =RunningLineData }) {
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


  const t = useTranslations('RunningLine')

  

  return (
    <div style={{ padding: "0.5em" }}>
      <div className={styles.runningLineContainer}>
        <Slider {...settings}>
          <div className={styles.slide}>
            <p>{t(data.item1)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item2)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item3)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item4)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item5)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item6)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item7)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item8)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item9)}</p>
          </div>
          <div className={styles.slide}>
            <p>{t(data.item10)}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
