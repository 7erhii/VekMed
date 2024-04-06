import React, { ReactNode } from "react";
import { useTranslations } from "next-intl";

import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle: string | ReactNode;
  description: string;
  styleType: "sectionTitleWhite" | "sectionTitleDark";
}


export default function SectionTitle({ title, subtitle, description, styleType }: SectionTitleProps) {

  const sectionClass = styleType === "sectionTitleWhite" ? styles.sectionTitleWhite : styles.sectionTitleDark;

  // const t = useTranslations("designSection");

  return (
    <div className={sectionClass}>
      <div className={styles.container}> 
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.subtitle}>{subtitle}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
