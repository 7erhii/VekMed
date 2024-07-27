"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import tabetImage from "@/src/assets/images/tablet-image.png";
import xrayImage from "@/src/assets/images/xray-image.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./style.module.css";

gsap.registerPlugin(ScrollTrigger);

interface GridCardsProps {
  data: any[];
}

const getBackgroundImage = (type: string) => {
  switch (type) {
    case "tabetImage":
      return tabetImage;
    case "xrayImage":
      return xrayImage;
    default:
      return null;
  }
};

function GridCards({ data }: GridCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (section) {
      const cards = section.querySelectorAll(`.${styles.Card}`);
      const countElements = section.querySelectorAll("[data-count]");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countElements.forEach((el) => {
              const target = parseInt(el.getAttribute("data-count")!, 10);
              gsap.fromTo(
                el,
                { textContent: 0 },
                {
                  textContent: target,
                  duration: 1.5,
                  ease: "power1.out",
                  snap: { textContent: 1 },
                  onUpdate: function () {
                    const element = el as HTMLElement;
                    element.textContent =
                      Math.ceil(parseInt(element.textContent!)).toString() +
                      "+";
                  },
                }
              );
            });
            observer.unobserve(section);
          }
        });
      });

      observer.observe(section);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className={styles.Cards} ref={sectionRef}>
      {data.map((card, index) => {
        let cardContent;

        if (card.Type === "white") {
          cardContent = (
            <div className={`${styles.Card} relative`} key={index}>
              <span className={`${styles.CardNumber} absolute top-0 left-0`}>
                ({card.displayIndex})
              </span>
              <h5>{card.Title}</h5>
              <p>{card.Description}</p>
              <span className={styles.CardDot}></span>
            </div>
          );
        } else if (card.Type === "clear") {
          cardContent = (
            <div className={`${styles.CardClear} relative`} key={index}>
              <span className="absolute top-0 left-0"></span>
              <h5></h5>
              <p></p>
            </div>
          );
        } else if (card.Type === "count") {
          cardContent = (
            <div className={`${styles.Card} relative`} key={index}>
              <span className="absolute top-0 left-0">
                ({card.displayIndex})
              </span>
              <span
                className="absolute top-0 right-0"
                style={{ width: "1em", height: "1em", background: "#000" }}
              ></span>
              <h6 data-count={parseInt(card.Title.replace(/\D/g, ""), 10)}>
                {card.Title}
              </h6>
              <p>{card.Description}</p>
            </div>
          );
        } else {
          const bgImage = getBackgroundImage(card.Type);
          cardContent = (
            <div
              className={`${styles.Card} ${styles.bgCover} relative`}
              style={bgImage ? { backgroundImage: `url(${bgImage.src})` } : {}}
              key={index}
            >
              <span className="absolute top-0 left-0"></span>
              <span
                className="absolute top-0 right-0"
                style={{ width: "1em", height: "1em", background: "#000" }}
              ></span>
              <h5></h5>
              <p></p>
            </div>
          );
        }

        return cardContent;
      })}
    </div>
  );
}

export default GridCards;
