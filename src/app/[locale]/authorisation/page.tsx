import Header from "@/src/components/header";
import RegistrationForm from "@/src/components/RegistrationForm";
import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

// Styles
import styles from "./style.module.css";

// Images
import registrationCover from "@/src/assets/images/registration-cover.png";

// Components
import Footer from "@/src/components/footer";
import { BlockWrapper } from "@/src/components/wrappers";

export default function Authorisation({ params: { locale } }: any) {
  const t = useTranslations();
  return (
    <div>
      <Header />
      <div className={styles.RegistrationWrapper}>
        <div className={styles.RegistrationSection}>
          <div className={styles.RegistrationForm}>
            <RegistrationForm />
          </div>
          <div className={styles.RegistrationDetails}>
            <Image src={registrationCover} alt="Registration cover image" />
          </div>
        </div>
      </div>

      <div className={styles.RegistrationWrapper}>
        <Footer locale={locale} />
      </div>
    </div>
  );
}
