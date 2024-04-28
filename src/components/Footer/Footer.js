import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

// import { IoLogoInstagram } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";

// import { FaTelegram } from "react-icons/fa6";

import { FaTelegram } from "react-icons/fa";


const Footer = ({ locale }) => {
  const t = useTranslations("Footer");
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterUpper}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <BsInstagram />
        </a>
        <a href="tg://resolve?domain=live_med">
          <FaTelegram />
        </a>
      </div>
      <div className={styles.FooterLower}>
        <Link href="/[locale]/policy" as={`/${locale}/policy`}>
          {t("policy")}
        </Link>
        <Link href="/[locale]/policy" as={`/${locale}/policy`}>
          {t("policy")}
        </Link>
      </div>
    </div>
  );
};

export default Footer;
