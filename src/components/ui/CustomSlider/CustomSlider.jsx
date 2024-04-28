"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./CustomSlider.module.css";

import SiderImage1 from "@/assets/images/slider-bg.png";

// import './styles.css';

import {
  Pagination,
  FreeMode,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper/modules";

export default function CustomSlider() {
  return (
    <div className={styles.SliderContainer}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        freeMode={{
          enabled: true,
          sticky: true,
        }}
        autoplay={{
          delay: 34000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        effect="coverflow"
        coverflowEffect={{
          depth: 100,
          rotate: 10,
          slideShadows: false,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        modules={[Pagination, FreeMode, EffectCoverflow, Autoplay, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title1</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title2</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title3</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.SlideImage}>
            <Image src={SiderImage1} />
          </div>
          <div className={styles.SlideText}>
            <h2>title</h2>
            <p>text text</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
