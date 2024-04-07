import React from "react";
import { useTranslations } from "next-intl";
import styles from "./BorderedTitle.module.css";

export default function BorderedTitle({ title }) {
  const DeveopmentSection = title;

  const t = useTranslations("BorderTitles");

  return (
    <div className={styles.borderedTitle}>
      <p className={styles.borderedTitleText}>
        {t(DeveopmentSection)
          .split(" ")
          .map((word, index, words) => {
            const isBlueWord = ["Back-end", "Front-end"].includes(word);
            const wordStyle = { color: isBlueWord ? "#2E7BEE" : "#fff" };

            return (
              <React.Fragment key={index}>
                <span style={wordStyle}>{word}</span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            );
          })}
      </p>
    </div>
  );
}
