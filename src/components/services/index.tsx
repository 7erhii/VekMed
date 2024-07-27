// Core
import { useTranslations } from "next-intl";
import React from "react";
import ServiceCard from "../serviceCard";
import { StaticImageData } from "next/image";

// Styles
import styles from "./style.module.css";
import MainButton from "../ui/MainButton";

interface ServiceCardData {
  Title: string;
  Description: string;
  Extra: string;
  Price: string;
  Link: string;
  Image?: StaticImageData | string;
}

interface ServicesProps {
  serviceCardMainData: ServiceCardData[];
}

const Services = ({ serviceCardMainData }: ServicesProps) => {
  const t = useTranslations();

  return (
    <div className={styles.ServicesCards}>
      {serviceCardMainData.map((card, index) => (
        <ServiceCard
          key={index}
          index={index}
          title={card.Title}
          description={card.Description}
          extra={card.Extra}
          price={card.Price}
          link={card.Link}
          image={card.Image}
        />
      ))}
      <MainButton
        text={t("Buttons.MoreServices.Text")}
        link={"//"}
        color="whiteBorderless"
        type="lg"
      />
    </div>
  );
};

export default Services;
