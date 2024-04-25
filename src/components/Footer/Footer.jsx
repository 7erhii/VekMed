"use client";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import styles from "./Footer.module.css";

import mainLogo from "@/assets/icons/MainLogoWhite.svg";

const footerData = {
  footerContactsDescr: "company.descr",
  footerContacts: {
    country: "company.contacts.country",
    street: "company.contacts.street",
    phone: "company.contacts.phone",
    email: "company.contacts.email",
  },
};

export default function Footer({ data = footerData }) {
  const t = useTranslations("Footer");

  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterInfo}>
        <div className={styles.FooterCompany}>
          <a href="/" className="header__logo">
            <Image src={mainLogo} alt="Main Logo" />
          </a>
          <p>{t(data.footerContactsDescr)}</p>
        </div>
        <div className={styles.FooterContacts}>
          <h3>{t(data.footerContacts.country)}</h3>
          <h4>{t(data.footerContacts.street)}</h4>
          <a href={`tel:${data.footerContacts.phone}`}>
            {t(data.footerContacts.phone)}
          </a>
          <a href={`mailto:${data.footerContacts.email}`}>
            {t(data.footerContacts.email)}
          </a>
        </div>
      </div>
      <div className={styles.FooterMenu}></div>
    </div>
  );
}
