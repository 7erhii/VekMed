import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import styles from "./Development.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
// import DesegnSlider from "./DesegnSlider/DesegnSlider";
// import WorkSlider from "./WorkSlider/WorkSlider";
import BorderedTitle from "../ui/BorderedTitle/BorderedTitle";
import GridCards from "../ui/GridCards/GridCards";

import MainButton from "../ui/MainButton/MainButton";

import iconHtml from "@/assets/icons/icon-HTML5.svg";
import iconCss from "@/assets/icons/icon-CSS3.svg";
import iconJs from "@/assets/icons/icon-JavaScript.svg";
import iconReact from "@/assets/icons/icon-React.svg";
import iconSass from "@/assets/icons/icon-Sass.svg";
import iconWordpress from "@/assets/icons/icon-wordpress.svg";
import iconElementor from "@/assets/icons/icon-Elementor.svg";
import iconNextJs from "@/assets/icons/icon-next-js.svg";
import iconAngular from "@/assets/icons/icon-angular.svg";
import iconTypescript from "@/assets/icons/icon-Typescript.svg";

import iconPhp from "@/assets/icons/icon-PHP.svg";
import iconMysql from "@/assets/icons/icon-mysql.svg";
import iconPython from "@/assets/icons/icon-python.svg";
import iconNodeJs from "@/assets/icons/icon-nodejs.svg";



export default function Development() {
  const t = useTranslations("DeveopmentSection");

  const cardsDataFront = {
    grid1: [
      { type: "single", image: iconHtml, text: "HTML" },
      {
        type: "double",
        text: t('doubleCardText'),
      },
    ],
    //
    grid2: [
      { type: "single", image: iconCss, text: "CSS" },
      { type: "single", image: iconSass, text: "SASS" },
      { type: "single", image: iconNextJs, text: "NextJS" },
    ],
    grid3: [
      { type: "single", image: iconJs, text: "JavaScript" },
      { type: "single", image: iconWordpress, text: "WordPress" },
      { type: "single", image: iconAngular, text: "Angular" },
    ],
    grid: [
      { type: "single", image: iconReact, text: "React" },
      { type: "single", image: iconElementor, text: "Elementor" },
      { type: "single", image: iconTypescript, text: "TypeScript" },
    ],
  };

  const cardsDataBack = {
    grid1: [
      { type: "single", image: iconPhp, text: "HTML" }
    ],
    //
    grid2: [
      { type: "single", image: iconMysql, text: "MySQL" },
    ],
    grid3: [
      { type: "single", image: iconPython, text: "Python" },
    ],
    grid: [
      { type: "single", image: iconNodeJs, text: "Node Js" },
    ],
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
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

        <BorderedTitle title={"DeveopmentSection"} />
        <GridCards cardsData={cardsDataFront} />

        <BorderedTitle title={"FrontEndSection"} />
        <GridCards cardsData={cardsDataBack} />


        {/* <WorkSlider /> */}
        {/* <div className={styles.designAction}>
      <MainButton text={t("buttonRight")} color="Blue" size="medium"/>
      <MainButton text={t("buttonLeft")} color="White" size="medium"/>
      </div> */}
      </div>
    </div>
  );
}
