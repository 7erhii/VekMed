"use client";
import Slider from "react-slick";
import Image from "next/image";
import styles from "./CardsExtra.module.css";

import iconLung from "@/assets/icons/icon-lung.svg";

const cardsExtraData = [
  {
    title: "Genomics",
    descr: "asdfa asdfasdf asdfasdfasdf asdfasdfasdfadsfads saf",
    image: iconLung,
  },
  { title: "sds2", image: iconLung },
  { title: "sds3", image: iconLung },
  { title: "sds4", image: iconLung },
  { title: "sds5", image: iconLung },
  { title: "sds6", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
  { title: "sds7", image: iconLung },
];

export default function CardsExtra({ data = cardsExtraData }) {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear",
    variableWidth: false,
    arrows: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 3000
  };
  

  return (
    <div style={{ padding: "0.5em" }}>
      <div className={styles.CardExtraContainer}>
        <Slider {...settings} >
          {data.map((card, index) => (
            <div key={index} className={styles.cardExtra}>
              <div className={styles.cardExtraImage}>
                <Image src={card.image} alt={card.title} width={500} height={300} className={styles.cardExtraIcon}/>
              </div>
              <div className={styles.cardExtraText}>
                <p className={styles.cardExtraTitle}>{card.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
