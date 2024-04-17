"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import styles from "./ReadyCards.module.css";

const ReadyCardData = [
  {
    size: "1/2",
    title: "card1.title",
    descr: "card1.descr",
    href: "#link1"
  },
  {
    size: "1/2",
    title: "card2.title",
    descr: "card2.descr",
    href: "#link2"
  },
  {
    size: "1/3",
    title: "card3.title",
    descr: "card3.descr",
    href: "#link3"
  },
  {
    size: "1/3",
    title: "card4.title",
    descr: "card4.descr",
    href: "#link4"
  },
  {
    size: "1/3",
    title: "card5.title",
    descr: "card5.descr",
    href: "#link5"
  },
  {
    size: "1/2",
    title: "card6.title",
    descr: "card6.descr",
    href: "#link5"
  },
  {
    size: "1/2",
    title: "card7.title",
    descr: "card7.descr",
    href: "#link5"
  }
];

export default function ReadyCards({ data = ReadyCardData}) {
  const t = useTranslations("ReadySection.ReadyCards");

  return (
    <div className={styles.ReadyCards}>
      {data.map(card => (
        <a href={card.href} key={card.title} className={`ready ${styles.marketingCards} ${card.size === "1/3" ? styles.marketingCardsThird : styles.marketingCardsHalf}`}>
          <div className={`ready__title ${styles.marketingCardsTitle}`}>
            <h2>{t(card.title)}</h2>
            <IoArrowForward />
          </div>
          <div className={`ready__descr ${styles.marketingCardsDescr}`}>
            <p>{t(card.descr)}</p> 
          </div>
        </a>
      ))}
    </div>
  );
}
