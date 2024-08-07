"use client";
import React from "react";
import styles from "./style.module.css";
import MainLogo from "@/src/assets/icons/logo-main.svg";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../ui/languageSwitcher";
import { useParams } from "next/navigation";
import SocialLink from "../socialLink";

// Icons
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import IconUser from "@/src/assets/icons/icon-user.svg";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations();

  const params = useParams();
  const locale = Array.isArray(params.locale)
    ? params.locale[0]
    : params.locale;

  return (
    <div className={styles.SectionWrapper}>
      <header className={styles.HeaderContent}>
        <div className={styles.HeaderBlockLogo}>
          <Link href={`/${locale}`} className={styles.HeaderLogo}>
            <Image
              src={MainLogo}
              alt="Vekmed logo"
              width={1000}
              height={1000}
            />
          </Link>
          <div>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className={styles.HeaderBlockActions}>
          <div className={styles.HeaderSocial}>
            <SocialLink
              href="https://t.me/vekmed_bot"
              ico={FaTelegram}
              alt="Telegram"
              text="Bot"
            />
            <SocialLink
              href="https://www.instagram.com/vekmed"
              ico={FaInstagram}
              alt="Instagram"
            />
            <SocialLink
              href="mailto:contact@vekmed.com"
              ico={GoMail}
              alt="Email"
            />
          </div>
          <Link href={`${locale}/authorisation`} className={styles.RegisterBtn}>
            <Image src={IconUser} alt="user icon" />
            <p>{t("Buttons.Register.Text")}</p>
          </Link>
        </div>
      </header>
    </div>
  );
}
