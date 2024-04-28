import React from "react";
import { useTranslations } from "next-intl";
import styles from "./HeroText.module.css";
import Image from "next/image";

import mainLogo from "@/assets/icons/main-logo.svg";

// import LanguageSwitcher from "./ui/LanguageSwitcher";

import SectionTitle from "../ui/SectionTitle/SectionTitle";
import ActionBtn from "../ui/Buttons/ActionBtn";

const HeroText = () => {
  const t = useTranslations("Hero");
  return (
    <div className={styles.heroText}>
      <div className={styles.heroTitle}>
        <SectionTitle
          // title={t("title")}
          subtitle={t("title")
            .split(" ")
            .map((word, index, words) => {
              let specialWord = ["Diagnostic"].includes(word);
              let blueWord = ["."].includes(word);

              if (specialWord || blueWord) {
                return (
                  <React.Fragment key={index}>
                    <span
                      style={
                        blueWord 
                        ? { color: "#FF7272", fontFamily: "Open Sans" } 
                        : { color: "#252525", fontFamily: "Open Sans" }
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
          styleType="sectionTitleWhite"
        />
      </div>
      <div className={styles.heroDescr}>{t("descr")}</div>

      <div className={styles.heroImage}></div>
      <di className={styles.heroAction}>
      <ActionBtn type="hero" />
      </di>
    </div>
  );
};

export default HeroText;
