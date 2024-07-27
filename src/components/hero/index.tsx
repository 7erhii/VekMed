// "use client";
import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";

import HeroImage from "@/src/assets/images/hero-image.png";
import IconGov from "@/src/assets/icons/vector-ua.svg";
import { useTranslations } from "next-intl";
import MainButton from "../ui/MainButton";

export default function Hero() {
  const t = useTranslations("MainPage");

  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.HeroBlock}>
        <Image src={HeroImage} alt="Two doctors looking at a medical card" />
        <div className={styles.GovBlock}>
          <div className={styles.GovLogo}>
            <Image src={IconGov} alt="Goverment Logo" />
            <p>{t("Hero.Info")}</p>
          </div>
        </div>
        <div className={styles.ExtraBlock}>
          
          <h1>{t("Hero.About.Title")}</h1>
          <h2>{t("Hero.About.Subtitle")}</h2>
          <div className={styles.ButtonWrapper}>
            <MainButton text={t("Hero.About.Button")} link="/" color="orange"/>
          </div>
        </div>
      </div>

      
    </div>
  );
}
