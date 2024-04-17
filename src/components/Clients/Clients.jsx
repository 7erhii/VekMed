import React from "react";
import Image from "next/image";


import { useTranslations } from "next-intl";

import styles from "./Clients.module.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import RunningLine from "../ui/RunningLine/RunningLine";

import lineImage1 from "@/assets/images/line1.svg";
import lineImage2 from "@/assets/images/line2.svg";
import lineImage3 from "@/assets/images/line3.svg";
import lineImage4 from "@/assets/images/line4.svg";
import lineImage5 from "@/assets/images/line5.svg";
import lineImage6 from "@/assets/images/line6.svg";
import lineImage7 from "@/assets/images/line7.svg";
import lineImage8 from "@/assets/images/line8.svg";
import lineImage9 from "@/assets/images/line9.svg";


const images = [lineImage1, lineImage2, lineImage3, lineImage4, lineImage5, lineImage6, lineImage7, lineImage8, lineImage9]

export default function Clients() {
  
  const t = useTranslations("ClientsSection");

  return (
    <div>
      <SectionTitle
        title={t("title")}
        subtitle={t("subtitle")
          .split(" ")
          .map((word, index, words) => {
            let specialWord = ["Visual"].includes(word);
            let blueWord = ["best", "clients"].includes(word);

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

      <RunningLine speed={7000} images={images}/>

    </div>
  );
}
