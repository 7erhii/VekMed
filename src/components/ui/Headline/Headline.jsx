"use client";
import styles from "./Headline.module.css";

import { useTranslations } from "next-intl";

export default function Headline({ text }) {
  const t = useTranslations("Titles");

  return (
    <div className={styles.Headline}>
      <h2>{t(text)}</h2>
    </div>
  );
}
