"use client";
import React from "react";
import Slider from "react-slick";
import { useTranslations } from "next-intl";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import styles from "./DesignSlider.module.css";

import sliderImage1 from "@/assets/images/slide1.png";
import sliderImage2 from "@/assets/images/slide2.png";
import sliderImage3 from "@/assets/images/slide3.png";

import { IoArrowForward } from "react-icons/io5";

const slides = [
  {
    image: sliderImage1,
    href: "#",
    titleKey: "titles.title",
    subtitleKey: "subtitles.subtitle1",
  },
  {
    image: sliderImage2,
    href: "#",
    titleKey: "titles.title2",
    subtitleKey: "subtitles.subtitle2",
  },
  {
    image: sliderImage3,
    href: "#",
    titleKey: "titles.title3",
    subtitleKey: "subtitles.subtitle3",
  },
];

export default function DesignSlider() {
  const t = useTranslations("SlidesDesign");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "30.3333%",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className={`slide ${styles.sliderContainer}`}>
          <div className={`slide ${styles.sliderItem}`}>
            <a href={slide.href} className={styles.DesignItem}>
              <img
                src={slide.image.src}
                alt={t(slide.titleKey)}
                style={{ width: "100%", display: "block" }}
                className={styles.sliderImage}
              />
              <div className={styles.sliderBottom}>
                <div className={`slider__text ${styles.sliderText}`}>
                  <h3 className={`slide__title ${styles.slideTitle}`}>
                    {t(slide.titleKey)}
                  </h3>
                  <p className={`slide__title ${styles.slideSubtitle}`}>
                    {t(slide.subtitleKey)}
                  </p>
                </div>
                <IoArrowForward className={styles.DesignSliderIcon} />
              </div>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
}
