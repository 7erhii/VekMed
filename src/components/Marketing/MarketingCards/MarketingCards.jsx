"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { IoArrowForward } from "react-icons/io5";

import styles from "./MarketingCards.module.css";

import markImage1 from "@/assets/images/image-mark1.png";
import markImage2 from "@/assets/images/image-mark2.png";
import markImage3 from "@/assets/images/image-mark3.png";
import markImage4 from "@/assets/images/image-mark4.png";
import markImage5 from "@/assets/images/image-mark5.png";

const marketingData = {
  line1: {
    block1: {
      item1: {
        href: "#",
        title: "card1",
        image: markImage1,
      },
    },
    block2: {
      item1: {
        href: "#",
        title: "card2",
        image: markImage2,
      },
    },
  },
  line2: {
    block1: {
      item1: {
        href: "#",
        title: "card3",
        image: markImage3,
      },
      item2: {
        href: "#",
        title: "card4",
      },
    },
    block2: {
      item1: {
        href: "#",
        title: "card5",
        image: markImage4,
      },
    },
    block3: {
      item1: {
        href: "#",
        title: "card6",
        image: markImage5,
        type: "noPadding",
      },
      item2: {
        href: "#",
        title: "card7",
        type: "blueText",
      },
    },
  },
};

const highlightWords = ["Development", "page", "Mobile"];

export default function MarketingCards({ data = marketingData }) {
  const t = useTranslations("MarketingCards");

  function highlightText(text, itemId) {
    return text
      .split(" ")
      .map((word, index) => {
        const cleanWord = word.replace(/[\n,.]/g, "");
        const key = `${itemId}-${index}`;

        if (highlightWords.includes(cleanWord)) {
          return (
            <span key={key} style={{ color: "#3C7BF6" }}>
              {word}
            </span>
          );
        }
        return <span key={key}>{word}</span>;
      })
      .reduce((prev, curr) => [prev, " ", curr]);
  }

  return (
    <div className={styles.marketingCards}>
      {Object.entries(data).map(([lineKey, line]) => (
        <div key={lineKey} className={styles.marketingCards__line}>
          {Object.entries(line).map(([blockKey, block]) => (
            <div key={blockKey} className={styles.marketingCards__section}>
              {Object.entries(block).map(([itemKey, item]) => (
                <a
                  key={itemKey}
                  href={item.href}
                  className={styles.marketingCards__item}
                >



                  <div className={ item.type !== "blueText" ? styles.textWrapper : styles.textWrapperBlue}>
                    <div
                      
                    >
                      {t(item.title)
                        .split("\n")
                        .map((line, index, arr) => {
                          const processedLine = highlightText(line, itemKey);
                          return (
                            <React.Fragment key={`${itemKey}-line-${index}`}>
                              {processedLine}
                              {index < arr.length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                    </div>
                    <IoArrowForward className={styles.cardsIcon} />
                    
                  </div>





                  
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={t(item.title)}
                      width={500}
                      height={300}
                      className={
                        item.type !== "noPadding"
                          ? styles.marketingCards__image
                          : styles.imageNopaddingRight
                      }
                    />
                  )}
                </a>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
