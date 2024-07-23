import React from "react";
import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  extra: string;
  price: string;
  link: string;
  image?: StaticImageData | string;
}

const ServiceCard = ({
  title,
  description,
  extra,
  price,
  link,
  image,
}: ServiceCardProps) => {
  return (
    <div>
      {image && <Image src={image} alt={title} width={500} height={300} />}
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{extra}</p>
      <p>{price}</p>
      <a href={link}>Learn more</a>
    </div>
  );
};

export default ServiceCard;
