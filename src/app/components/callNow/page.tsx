import React from "react";

// Styles
import styles from "./style.module.css";

// Impges
import callNowImage from "@/src/assets/images/callNow-image.png";
import Image from "next/image";
import MainButton from "../ui/MainButton/page";
import { useTranslations } from "next-intl";

export default function CallNow() {
  const t = useTranslations();
  return (
    <div className={styles.CallNowWrapper}>
      <div className={styles.CallNowImage}>
        <Image src={callNowImage} alt="propose to register" />
      </div>
      <div className={styles.CallNowText}>
        <div className={styles.CallNowTextTitle}>
          <h2>{t("MainPage.ActionCall.Title")}</h2>
          <p>{t("MainPage.ActionCall.Description")}</p>
        </div>
        <div className={styles.CallNowTextAction}>
          <p>{t("MainPage.ActionCall.Extra")}</p>
          <MainButton
            text={t("Buttons.Order.Text")}
            link="/"
            color="orange"
            type="lg"
          />
        </div>
      </div>
    </div>
  );
}
