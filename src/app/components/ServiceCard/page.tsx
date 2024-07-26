import React from "react";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

import styles from "./style.module.css";
import MainButton from "../ui/MainButton/page";

interface ServiceCardProps {
  index: number;
  title: string;
  description: string;
  extra: string;
  price: string;
  link: string;
  image?: StaticImageData | string;
}

const ServiceCard = ({
  index,
  title,
  description,
  extra,
  price,
  link,
  image,
}: ServiceCardProps) => {
  const t = useTranslations("Buttons");
  return (
    <div className={styles.ServiceCard}>
      <div className={styles.ServiceCardImageBlock}>
        {image && <Image src={image} alt={title} width={500} height={300} />}
        <div className={styles.ServiceCardImageDescr}>
          <h2>{title}</h2>
          <p>
            {extra} {index + 1}
          </p>
        </div>
      </div>
      <div className={styles.ServiceCardTextBlock}>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <div className={styles.ServiceCardTextButton}>
          <MainButton
            text={t("More.Text")}
            link={link}
            color="white"
            type="md"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
