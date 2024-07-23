import { useTranslations } from "next-intl";
import React from "react";
import ServiceCard from "../ServiceCard/page";
import { StaticImageData } from "next/image";

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
    <div>
      {serviceCardMainData.map((card, index) => (
        <ServiceCard
          key={index}
          title={card.Title}
          description={card.Description}
          extra={card.Extra}
          price={card.Price}
          link={card.Link}
          image={card.Image}
        />
      ))}
    </div>
  );
};

export default Services;
