import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import styles from "./Industries.module.css";

import SectionTitle from "../ui/SectionTitle/SectionTitle";
import IndustriesCards from "./IndustriesCards/IndustriesCards";
import ContactForm from "../ui/ContactForm/ContactForm";

export default function Industries() {
  const t = useTranslations("IndustriesSections");

  return (
    <div className={styles.pageWrapper}>
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")
            .split(" ")
            .map((word, index, words) => {
              let specialWord = ["Visual"].includes(word);
              let blueWord = ["we", "work", "with"].includes(word);

              if (specialWord || blueWord) {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord ? { color: "#3C7BF6" } : { color: "#fff" }
                      }
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
          description={t("description")}
          styleType="sectionTitleDark"
        />

      <IndustriesCards />

      <ContactForm/>
      
    </div>
  );
}
