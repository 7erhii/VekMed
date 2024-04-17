"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import Image from "next/image";
import heroBgImage from "@/assets/images/hero-bg.png";

import cardIcon from "@/assets/icons/icon-cards.svg";
import gridIcon from "@/assets/icons/icon-grid2.svg";

import imageCard1 from "@/assets/images/image-card1.svg";
import imageCard2 from "@/assets/images/image-card2.svg";
import imageCard3 from "@/assets/images/image-card3.svg";
import imageCard4 from "@/assets/images/image-card4.svg";

import styles from "./Hero.module.css";

import HeroTitle from "./ui/HeroTitle";

export default function Hero() {
  const t = useTranslations("Hero");

  const highlightKeyword = (text) => {
    const parts = text.split(/(ready | готово)/gi);
    return parts.map((part, index) =>
      /ready|готово/i.test(part) ? (
        <span key={index} className="highlight" style={styles.spanColor}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // const [activeButton, setActiveButton] = useState("cardIcon");

  // const handleButtonClick = (buttonType) => {
  //   setActiveButton(buttonType);
  // };

  const cardClass = (index) => {
    if (activeButton === "cardIcon") {
      return [
        styles.heroCardImageFirst,
        styles.heroCardImageSecond,
        styles.heroCardImageThird,
        styles.heroCardImageFourth,
      ][index];
    }
    return "";
  };

  return (
    <div className="hero">
      <div
        className="mx-auto text-center py-20 pb-48"
        style={{ maxWidth: "62em" }}
      >
        <div className="hero__title relative">
          <h2
            className="uppercase text-8xl font-poppins pr-[3em]"
            style={{ fontSize: "5.25em", fontWeight: "600" }}
          >
            {highlightKeyword(t("title-line1"))}
          </h2>
          <h2
            className="uppercase text-8xl font-poppins "
            style={{ fontSize: "5.25em", fontWeight: "600" }}
          >
            {t("title-line2")}
          </h2>
          <button className="main-btn main-btn--red btn absolute top-0 right-0">
            {t("button")}
          </button>
        </div>
        <div className="hero__subtitle font-poppins py-[5rem]">
          <p>{t("subtitle")}</p>
        </div>
        {/* <button>CLICK1</button> */}
      </div>
      <div
        className={`hero__bg bg-blue-600 flex justify-center ${styles.heroBg}`}
      >
        <Image src={heroBgImage} alt="Main Logo" />
        <div className={`hero__cards ${styles.heroCardsContainer}`}>
          <button className={`card ${cardClass(0)}`}>
            <Image src={imageCard1} alt="cardImage" />
          </button>
          <button className={`card ${cardClass(1)}`}>
            <Image src={imageCard2} alt="cardImage" />
          </button>
          <button className={`card ${cardClass(2)}`}>
            <Image src={imageCard3} alt="cardImage" />
          </button>
          <button className={`card ${cardClass(3)}`}>
            <Image src={imageCard4} alt="cardImage" />
          </button>
        </div>
        <div className={`hero__actions ${styles.heroActions}`}>
          <button
            // onClick={() => handleButtonClick("cardIcon")}
            className={
              activeButton === "cardIcon"
                ? `${styles.heroButton} ${styles.heroButtonActive}`
                : styles.heroButton
            }
          >
            <Image src={cardIcon} alt="" />
          </button>
          <button
            onClick={() => handleButtonClick("gridIcon")}
            className={
              activeButton === "gridIcon"
                ? `${styles.heroButton} ${styles.heroButtonActive}`
                : styles.heroButton
            }
          >
            <Image src={gridIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
