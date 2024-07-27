import React from "react";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "./style.module.css";

// Images
import MainLogo from "@/src/assets/icons/logo-main-white.svg";
import { useTranslations } from "next-intl";

// Icons
import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { FaViber } from "react-icons/fa";

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations();
  const footerNavObj = t.raw("MainPage.Footer.Nav.Items");
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterContent}>
        <Link href={`/${locale}`} className={styles.FooterLogo}>
          <Image src={MainLogo} alt="Vekmed logo" width={1000} height={1000} />
        </Link>
        <div className={styles.FooterDetails}>
          <h3>{t("MainPage.Footer.Details.Title")}</h3>
          <h4>{t("MainPage.Footer.Details.Address")}</h4>
          <h4>{t("MainPage.Footer.Details.Email")}</h4>
          <Link href={`tel:${t("MainPage.Footer.Details.Phone")}`}>
            <h3>{t("MainPage.Footer.Details.Phone")}</h3>
          </Link>{" "}
        </div>
        <div className={styles.FooterNavigation}>
          {footerNavObj.map((item: any, index: any) => (
            <div key={index} className={styles.FooterNavigationItem}>
              <p>{item.Text}</p>
            </div>
          ))}
        </div>

        <div className={styles.FooterContacts}>
          <h2>{t("MainPage.Footer.Contacts.Title")}</h2>
          <div className={styles.FooterContactsLinks}>
            <Link
              href={t("MainPage.Footer.Contacts.Links.Inst")}
              target="_blank"
            >
              <FaInstagram />
            </Link>
            <Link
              href={t("MainPage.Footer.Contacts.Links.Telegram")}
              target="_blank"
            >
              <PiTelegramLogo />
            </Link>
            <Link
              href={t("MainPage.Footer.Contacts.Links.Viber")}
              target="_blank"
            >
              <FaViber />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.FooterColophon}>
        <Link href={`/${locale}/rights`}>
          <span>2019 - 2024. All rights reserved by VEKMED</span>
        </Link>
      </div>
    </div>
  );
}
