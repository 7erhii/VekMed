"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface AccordionCardHolderProps {
  data: { Title: string; Description: string }[];
}

const AccordionCardHolder: React.FC<AccordionCardHolderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (data.length === 1) {
      setActiveIndex(0);
    }
  }, [data.length]);

  const toggleCard = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.cardsWrapper}>
      {data.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} ${activeIndex === index ? styles.activeCard : ""}`}
          onClick={() => toggleCard(index)}
        >
          <div className={styles.cardTitle}>
            <h6 className={styles.cardIndex}>{`( ${index + 1} )`}</h6>
            <h3 className={styles.cardTitleText}>{card.Title}</h3>
            <span
              className={`${styles.iconWrapper} ${activeIndex === index ? styles.iconOpen : styles.iconClose}`}
            >
              <span className={styles.horizontalLine}></span>
              <span className={styles.verticalLine}></span>
            </span>
          </div>
          <div
            className={`${styles.cardContent} ${activeIndex === index ? styles.open : ""}`}
          >
            <div className={styles.description}>
              <p>{card.Description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionCardHolder;
