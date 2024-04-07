import React from "react";

import { useTranslations } from "next-intl";

import styles from "./Development.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
// import DesegnSlider from "./DesegnSlider/DesegnSlider";
// import WorkSlider from "./WorkSlider/WorkSlider";

import MainButton from "../ui/MainButton/MainButton";

export default function Development() {
  const t = useTranslations("DeveopmentSection");

  return (
    <div>
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["Your", "Wishes"].includes(word);

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
        styleType="sectionTitleDark"
      />
      
      {/* <WorkSlider /> */}
      {/* <div className={styles.designAction}>
      <MainButton text={t("buttonRight")} color="Blue" size="medium"/>
      <MainButton text={t("buttonLeft")} color="White" size="medium"/>
      </div> */}
    </div>
  );
}
