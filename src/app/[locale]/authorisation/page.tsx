"use client";

import Header from "@/src/components/header";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Styles
import styles from "./style.module.css";

// Images
import registrationCover from "@/src/assets/images/registration-cover.png";

// Components
import Footer from "@/src/components/footer";
import { BlockWrapper } from "@/src/components/wrappers";
import RegistrationForm from "@/src/components/RegistrationForm";
import LoginForm from "@/src/components/LoginForm";
import ForgotForm from "@/src/components/ForgotForm";

export default function Authorisation({ params: { locale } }: any) {
  const t = useTranslations();
  const [activeForm, setActiveForm] = useState("register");

  const formVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const switchForm = (form: string) => {
    setActiveForm(form);
  };

  return (
    <div>
      <Header />
      <div className={styles.RegistrationWrapper}>
        <div className={styles.RegistrationSection}>
          <motion.div
            key="register"
            initial="hidden"
            animate={activeForm === "register" ? "visible" : "exit"}
            variants={formVariants}
            className={styles.RegistrationForm}
            style={{ display: activeForm === "register" ? "block" : "none" }}
          >
            <p>Регистрация аккаунта</p>
            <RegistrationForm />
            <div className={styles.formextraButton}>
              <button onClick={() => switchForm("login")}>
                {t("Authorisation.haveAnAccount")}
              </button>
            </div>
          </motion.div>

          <motion.div
            key="login"
            initial="hidden"
            animate={activeForm === "login" ? "visible" : "exit"}
            variants={formVariants}
            className={styles.AuthorisationForm}
            style={{ display: activeForm === "login" ? "block" : "none" }}
          >
            <p>{t("Login.authorisationAccount")}</p>
            <LoginForm switchForm={switchForm} />
            <div className={styles.formextraButton}>
              <button onClick={() => switchForm("forgot")}>
                {t("Login.forgotPassword")}
              </button>
              <button onClick={() => switchForm("register")}>
                {t("Login.needAccount")}
              </button>
            </div>
          </motion.div>

          <motion.div
            key="forgot"
            initial="hidden"
            animate={activeForm === "forgot" ? "visible" : "exit"}
            variants={formVariants}
            className={styles.ForgotForm}
            style={{ display: activeForm === "forgot" ? "block" : "none" }}
          >
            <p>{t("Login.authorisationAccount")}</p>
            <ForgotForm />
            <div className={styles.formextraButton}>
              <button onClick={() => switchForm("login")}>
                {t("Authorisation.haveAnAccount")}
              </button>
              <button onClick={() => switchForm("register")}>
                {t("Login.needAccount")}
              </button>
            </div>
          </motion.div>

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
