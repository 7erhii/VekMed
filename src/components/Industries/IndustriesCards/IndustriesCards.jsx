"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import styles from "./IndustriesCards.module.css";


import iconHome from "@/assets/icons/icon-home.svg";
import iconCardiology from "@/assets/icons/icon-cardiology.svg";
import iconNature from "@/assets/icons/icon-nature.svg";
import iconSchool from "@/assets/icons/icon-school.svg";
import iconHomeWork from "@/assets/icons/icon-home_work.svg";
import iconBackHand from "@/assets/icons/icon-back_hand.svg";


const IndustriesCardsData = [
  {
    image: iconHome,
    title: "card1.title",
  },
  {
    image: iconCardiology,

    title: "card2.title",
  },
  {
    image: iconNature,
    title: "card3.title",
  },
  {
    image: iconSchool,
    title: "card4.title",
  },
  {
    image: iconHomeWork,
    title: "card5.title",
  },
  {
    image: iconBackHand,
    title: "card6.title",
  },
];

export default function IndustriesCards({ data = IndustriesCardsData}) {
  const t = useTranslations("IndustriesSections.IndustriesCards");

  return (
    <div className={styles.IndustriesCards}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.IndustriesCard}
          style={{
            borderRadius: index === 0 ? "40px 12px 12px 12px" :
                        index === 2 ? "12px 40px 12px 12px" :
                        index === data.length - 3 ? "12px 12px 12px 40px" :
                        index === data.length - 1 ? "12px 12px 40px 12px" :
                        "12px"
          }}
        >
          <Image src={card.image} alt={t(card.title)} width={50} height={50} className={styles.IndustriesCardImage} />
          <p className={styles.IndustriesCardDescr}>{t(card.title)}</p>
        </div>
      ))}
    </div>
  );
}
