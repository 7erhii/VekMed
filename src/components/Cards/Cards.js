"use client";
import Image from "next/image";

import styles from "./Cards.module.css";

import imageLiver from "@/assets/images/img-liver.png";

const cardsData = [
  { title: "sd", descr: "sdfas", image: imageLiver },
  { title: "sds", descr: "sdfas", image: imageLiver },
  { title: "sds", descr: "sdfas", image: imageLiver },
  { title: "sds", descr: "sdfas", image: imageLiver },
];

export default function Cards({ data = cardsData }) {
  return (
    <div className={styles.CardWrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={styles.Card}
          style={{ backgroundImage: `url(${card.image.src || card.image})` }}
        >
          <div className={styles.CardText}>
            <div>{card.title}</div>
            <div>{card.descr}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
