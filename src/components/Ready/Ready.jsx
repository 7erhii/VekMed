import React from "react";

import { useTranslations } from "next-intl";

import styles from "./Ready.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

// import MarketingCards from "./MarketingCards/MarketingCards";
import ReadyCards from "./ReadyCards/ReadyCards";

export default function Ready() {

  const t = useTranslations("ReadySection");

  return (
    <div>
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["Inspiration"].includes(word);

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
        description={t("description")}
        styleType="sectionTitleWhite"
      />



      <ReadyCards/>

      {/* <div className={styles.designAction}>
      <MainButton text={t("buttonRight")} color="Blue" size="medium"/>
      <MainButton text={t("buttonLeft")} color="White" size="medium"/>
      </div> */}
    </div>
  );
}
