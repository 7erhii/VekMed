"use client";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./Colophon.module.css";

export default function Colophon() {
  const t = useTranslations("Colophon");

  return (
    <div className={styles.ColophonContainer}>
      <div className={styles.ColophonCopyright}>
        <p>{t("copyright")}</p>
      </div>
      <div className={styles.ColophonSocial}>
        <a href="#" className={styles.ColophonSocialItem}>
          <FaFacebookF />
        </a>
        <a href="#" className={styles.ColophonSocialItem}>
          <FaLinkedinIn />
        </a>
      </div>
      <div className={styles.ColophonPolicy}>
        <a href="#">
          <span>{t("policy")}</span>
        </a>
        <a href="#">
          <span>{t("policy")}</span>
        </a>
      </div>
    </div>
  );
}
