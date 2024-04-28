"use client";
import Image from "next/image";
import { useState } from "react";

import styles from "./Cards.module.css";

import imageLiver from "@/assets/images/no-bg.webp";

const cardsData = [
  {
    title: "Genomics",
    descr: "asdfa asdfasdf asdfasdfasdf asdfasdfasdfadsfads saf",
    image: imageLiver,
  },
  { title: "sds", descr: "sdfas", image: imageLiver },
  { title: "sds", descr: "sdfas", image: imageLiver },
  { title: "sds", descr: "sdfas", image: imageLiver },
];

export default function Cards({ data = cardsData }) {
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
              className={styles.cardImage}
              src={card.image.src || card.image}
              alt="Card image"
              layout="fill"
              objectFit="cover"
            />
            <div
              className={styles.CardText}
              style={{ left: activeCard === index ? "0%" : "50%" }}
            >
              <div className={styles.CardTitile}>
                <p>{card.title}</p>
              </div>
              <div className={styles.CardDescr}>{card.descr}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
