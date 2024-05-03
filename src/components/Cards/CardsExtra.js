"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./CardsExtra.module.css";

import iconLung from "@/assets/icons/icon-lung.svg";
import iconHead from "@/assets/icons/icon-head.svg";
import iconFood from "@/assets/icons/icon-food.svg";
import iconStomach from "@/assets/icons/icon-stomach.svg";
import iconVit from "@/assets/icons/icon-vit.svg";
import iconCardio from "@/assets/icons/icon-cardio.svg";
import iconReabil from "@/assets/icons/icon-psy.svg";
import iconPsy from "@/assets/icons/icon-psy1.svg";
import iconCheck from "@/assets/icons/icon-check.svg";
import iconMeal from "@/assets/icons/icon-meal.svg";
import iconTemp from "@/assets/icons/icon-temp.svg";
import iconPhis from "@/assets/icons/icon-phis.svg";
import iconEndo from "@/assets/icons/icon-endo.svg";


import { useTranslations } from "next-intl";

const cardsExtraData = [
  {
    title: "card0",
    descr: "asdfa asdfasdf asdfasdfasdf asdfasdfasdfadsfads saf",
    image: iconLung,
  },
  { title: "card1", image: iconHead },
  { title: "card2", image: iconMeal },
  { title: "card3", image: iconStomach },
  { title: "card4", image: iconVit },
  { title: "card5", image: iconCardio },
  { title: "card6", image: iconPsy },
  { title: "card7", image: iconCheck },
  { title: "card8", image: iconReabil },
  { title: "card9", image: iconFood },
  { title: "card10", image: iconTemp },
  { title: "card11", image: iconPhis },
  { title: "card12", image: iconEndo },
];

export default function CardsExtra({ data = cardsExtraData }) {

  const t = useTranslations('CardsExtra')
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear",
    variableWidth: false,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000
  };
  

  return (
    <div style={{ padding: "0.5em" }}>
      <div className={styles.CardExtraContainer}>
        <Slider {...settings} >
          {data.map((card, index) => (
            <div key={index} className={styles.cardExtra}>
              <div className={styles.cardExtraImage}>
                <Image src={card.image} alt={card.title} width={500} height={300} className={styles.cardExtraIcon}/>
              </div>
              <div className={styles.cardExtraText}>
                <p className={styles.cardExtraTitle}>{t(card.title)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
