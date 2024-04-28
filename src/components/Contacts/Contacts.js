import { useTranslations } from "next-intl";

import { GoMail } from "react-icons/go";
import { PiTelegramLogoThin } from "react-icons/pi";

import ContactForm from "../ui/ContactForm/ContactForm";

import styles from "./Contacts.module.css";

export default function Contacts() {
  const t = useTranslations("Contacts");
  return (
    <div className={styles.ContactsWrapper}>
      <div className={styles.ContactsContainer}>
        <div className={styles.ContactsInfo}>
          <h2>{t("title")}</h2>
          <p>asdfaafs asdfasdfasd asdfasdfasdf asdfasdf asdfasdf</p>
          <div className={styles.CantactsCardContainer}>
            <a href="#" className={styles.CantactsCard}>
              <GoMail className={styles.CantactsCardIcon} />{" "}
              <h6 className={styles.CantactsCardText}>1e-mail</h6>
            </a>
            <a href="#" className={styles.CantactsCard}>
              <PiTelegramLogoThin className={styles.CantactsCardIcon} />{" "}
              <h6 className={styles.CantactsCardText}>1e-mail</h6>
            </a>
            <a href="#" className={styles.CantactsCard}>
              <GoMail className={styles.CantactsCardIcon} />{" "}
              <h6 className={styles.CantactsCardText}>1e-mail</h6>
            </a>
            <a href="#" className={styles.CantactsCard}>
              <PiTelegramLogoThin />{" "}
              <h6 className={styles.CantactsCardText}>1e-mail</h6>
            </a>
          </div>
        </div>
        <div className={styles.ContactsForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
