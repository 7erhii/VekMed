import { useTranslations } from "next-intl";
import styles from "./AchievementsSection.module.css";
import Image from "next/image";
import PinnacleImage from "@/assets/images/img-pinnacle.png";

import AchievementCard from "./AchievementCard";

import CalendarIcon from "@/assets/icons/icon-card-calendar.png";
import ArrowIcon from "@/assets/icons/icon-card-target.png";
import CheckIcon from "@/assets/icons/icon-card-check.png";
import UserIcon from "@/assets/icons/icon-card-user.png";

import React from "react";

export default function AchievementsSection() {
  const t = useTranslations("achievements");

  const cardData = [
    {
      icon: CalendarIcon,
      number: "9",
      text: "Years",
      borderRadius: "40px 12px 12px 40px",
    },
    {
      icon: ArrowIcon,
      number: "53",
      text: "Projects",
      borderRadius: "12px 12px 12px 12px",
    },
    {
      icon: CheckIcon,
      number: "100+",
      text: "Solutions",
      borderRadius: "12px 12px 12px 12px",
    },
    {
      icon: UserIcon,
      number: "190+",
      text: "Clients",
      borderRadius: "12px 40px 40px 12px",
    },
  ];

  return (
    <div className={styles.AchievementsSection}>
      <div className={styles.achievementsWrapper}>
        <div className={styles.achievementsPinnacle}>
          <div
            className={`${styles.achievementsPinnacleText} flex flex-col gap-8`}
          >
            <div className={styles.achievementsPinnacleTitle}>
              <h2
                className="font-poppins text-white"
                style={{ fontSize: "2.5em", lineHeight: "1" }}
              >
                {t("title")}
              </h2>
              <h2
                className="font-poppins text-red-400"
                style={{ fontSize: "2.5em", color: "#0D99FF", lineHeight: "1" }}
              >
                {t("blueTitle")}
              </h2>
            </div>
            <div
              className={`${styles.achievementsPinnacleSubtitle} flex flex-col gap-4`}
            >
              <p
                className="font-sans text-white font-thin"
                style={{ fontSize: "1em" }}
              >
                {t("subtitle")}
              </p>
              <p
                className="font-sans text-white font-thin"
                style={{ fontSize: "1em" }}
              >
                {t("subtitleSecond")}
              </p>
            </div>
            <div className={styles.achievementsPinnacleAction}>
              <button
                className={`${styles.achievementsPinnacleButton} font-sans`}
              >
                {t("buttonText")}
              </button>
            </div>
          </div>
          <div className={styles.achievementsPinnacleImage}>
            <Image src={PinnacleImage} alt="Image" />
          </div>
        </div>

        <div className={styles.achievementsResults}>
          <div className={styles.achievementsTitle}>
            <h2 className={styles.pageTitlesElements}>
              {t("titleSecond")
                .split(" ")
                .map((word, index) => {
                  let specialWord = ["team,", "команда,", "results", "результаты"].includes(word);
                  let blueWord = ["The", "achievements", "results", "attained"].includes(word);

                  return (
                    <React.Fragment key={index}>
                      <span style={blueWord ? { color: "#0D99FF" } : { color: "#fff" }}>
                        {word}
                      </span>
                      {specialWord ? <br /> : " "}
                    </React.Fragment>
                  );
                })}
            </h2>
          </div>
          <div className={styles.achievementsCards}>
            {cardData.map((data, index) => (
              <AchievementCard
                key={index}
                icon={data.icon}
                number={data.number}
                text={data.text}
                borderRadius={data.borderRadius}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
