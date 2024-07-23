import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import ButtonArrow from "@/src/assets/icons/arrow-up-right.svg";
import Image from "next/image";

interface MainButtonProps {
  text: string;
  link: string;
  color: string;
  type: string;
}
function MainButton(props: MainButtonProps) {
  const { text, link, color, type } = props;
  const buttonStyle = color === "orange" ? styles.OrangeBnt : "";
  const buttonType =
    type === "lg" ? styles.buttonSizeLarge : styles.buttonSizeMedium;

  return (
    <Link href={link} className={`${buttonStyle} ${buttonType}`}>
      {text}
      <Image src={ButtonArrow} alt="arrowUp"></Image>
    </Link>
  );
}

export default MainButton;
