import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

const LanguageSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (value: string) => {
    if (value !== locale) {
      router.replace(`/${value}`);
    }
    setIsOpen(false);
  };

  return (
    <div
      className={styles.languageSwitcher}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div
        className={styles.switcherHeader}
        onMouseEnter={() => setIsOpen(true)}
      >
        <span className={styles.localeText}>{locale}</span>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          {locale !== "ua" && (
            <div
              className={styles.dropdownItem}
              onClick={() => changeLanguage("ua")}
            >
              UA
            </div>
          )}
          {locale !== "en" && (
            <div
              className={styles.dropdownItem}
              onClick={() => changeLanguage("en")}
            >
              EN
            </div>
          )}
          {locale !== "ru" && (
            <div
              className={styles.dropdownItem}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
