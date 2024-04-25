import React from "react";

import { useTranslations } from "next-intl";

import styles from "./Faq.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

import CustomAccordion from "../ui/customAccordion/CustomAccordion";


export default function Faq() {
  const t = useTranslations("Faq");

  return (
    <div className={styles.FaqContainer}>
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["Questions"].includes(word);

            if (specialWord || blueWord) {
              return (
                <React.Fragment key={index}>
                  <span
                    style={blueWord ? { color: "#3C7BF6" } : { color: "#fff" }}
                  >
                    {word}
                  </span>
                  {specialWord && <br />}
                </React.Fragment>
              );
            } else {
              return <span key={index}>{word}</span>;
            }
          })
          .reduce((acc, word, index, array) => {
            if (index < array.length - 1) {
              return [...acc, word, " "];
            } else {
              return [...acc, word];
            }
          }, [])}
        styleType="sectionTitleWhite"
      />

      <div>
        <CustomAccordion />
      </div>
    </div>
  );
}
