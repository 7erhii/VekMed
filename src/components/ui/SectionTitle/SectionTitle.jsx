import React from "react";
import { useTranslations } from "next-intl";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({ title, subtitle, description, styleType }) {
  const isWhiteStyle = styleType === "sectionTitleWhite";
  
  const titleClass = isWhiteStyle ? styles.title : styles.titleDark;
  const subtitleClass = isWhiteStyle ? styles.subtitle : styles.subtitleDark;
  const descriptionClass = isWhiteStyle ? styles.description : styles.descriptionDark;

  return (
    <div className={isWhiteStyle ? styles.sectionTitleWhite : styles.sectionTitleDark}>
      <div className={styles.container}>
        <h2 className={titleClass}>{title}</h2>
        <h4 className={subtitleClass}>{subtitle}</h4>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
}
