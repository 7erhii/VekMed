"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "./Cards.module.css";

import imageLiver from "@/assets/images/no-bg.webp";
import imageDna from "@/assets/images/image-dna.png";
import imageMask from "@/assets/images/mask.png";
import imageFish from "@/assets/images/fish.png";
import imagePill from "@/assets/images/pill.png";
import imageTablet from "@/assets/images/tablet.png";
import imageLiv from "@/assets/images/liv.png";
import { useTranslations } from "next-intl";

const cardsData = [
  {
    title: "card1.title",
    descr: "card1.text",
    image: imageMask,
  },
  { title: "card2.title", descr: "card2.text", image: imageTablet },
  { title: "card3.title", descr: "card3.text", image: imageLiv },
  { title: "card4.title", descr: "card4.text", image: imagePill },
];

export default function Cards({ data = cardsData }) {
  const t = useTranslations("Cards");

  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <div style={{ padding: "0.5em" }}>
      <div className={styles.CardWrapper}>
        {data.map((card, index) => (
          <div
            key={index}
            className={styles.Card}
            onClick={() => handleCardClick(index)}
          >
            <Image
              className={`${styles.cardImage} ${
                activeCard === index ? styles.active : ""
              }`}
              src={card.image.src || card.image}
              alt="Card image"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
            <div
              className={styles.CardText}
              style={{ left: activeCard === index ? "0%" : "50%" }}
            >
              <div className={styles.CardTitile}>
              <p>{t(card.title)}</p>
              </div>
              <div className={styles.CardDescr}>{t(card.descr)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
