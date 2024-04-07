"use client";
import React from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

import styles from "./WorkSlider.module.css";

import { IoArrowForward } from "react-icons/io5";

const slides = [
  {
    href: "#",
    stepKey: "steps.step1",
    titleKey: "titles.title1",
    descriptionKey: "descr.descr1",
  },
  {
    href: "#",
    stepKey: "steps.step2",
    titleKey: "titles.title2",
    descriptionKey: "descr.descr2",
  },
  {
    href: "#",
    stepKey: "steps.step3",
    titleKey: "titles.title3",
    descriptionKey: "descr.descr3",
  },
  {
    href: "#",
    stepKey: "steps.step4",
    titleKey: "titles.title4",
    descriptionKey: "descr.descr4",
  },
];

export default function WorkSlider() {
  const t = useTranslations("SlidesWork");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: false,
    initialSlide: -0.5,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${styles.sliderWrapper}`}>
          <div className={`slide ${styles.sliderContainer}`}>
            <a href={slide.href} className={styles.SliderItem}>
              <div className={styles.sliderAction}>
                <IoArrowForward className={styles.WorkSliderIcon} />
              </div>
              <div className={styles.sliderDescr}>
                <h2 className={`slide__title ${styles.slideKey}`}>
                  {t(slide.stepKey)}
                </h2>
                <h3 className={`slide__title ${styles.slideTitle}`}>
                  {t(slide.titleKey)}
                </h3>
                <p className={`slide__title ${styles.slideSubtitle}`}>
                  {t(slide.descriptionKey)}
                </p>
                {" "}
              </div>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
