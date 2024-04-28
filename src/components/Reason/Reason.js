import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Reason.module.css";
import Image from "next/image";

import mainLogo from "@/assets/icons/main-logo.svg";
import { PiStethoscopeFill } from "react-icons/pi";

const ReasonCardsData = [
  {
    icon: PiStethoscopeFill,
    title: "card1.title",
    descr: "card1.descr",
  },
  {
    icon: PiStethoscopeFill,
    title: "card2.title",
    descr: "card2.descr",
  },
  {
    icon: PiStethoscopeFill,
    title: "card3.title",
    descr: "card3.descr",
  },
  {
    icon: PiStethoscopeFill,
    title: "card4.title",
    descr: "card4.descr",
  },
];

const WhyWe = ({ data = ReasonCardsData }) => {
  const t = useTranslations("Reason");
  return (
    <div className={styles.ReasonWrapper}>
      <div className={styles.ReasonContainer}>
        {data.map((card, index) => (
          <div key={index} className={styles.ReasonCard}>
            <div className={styles.ReasonIcon}>
              <card.icon />
            </div>
            <div className={styles.ReasonText}>
              <h4>{t(card.title)}</h4>
              <h6>{t(card.descr)}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWe;
