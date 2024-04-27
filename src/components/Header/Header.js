import { useTranslations } from "next-intl";
import styles from "./Header.module.css";
import Image from "next/image";

import mainLogo from "@/assets/icons/main-logo.svg";

import LanguageSwitcher from "./ui/LanguageSwitcher";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.logo} href="/">
          <Image src={mainLogo} alt="Main Logo" />
          {t("title")}
        </a>
        <nav className={styles.navMenu}>
          <ul className={styles.list}>
            <li className={styles.listItem}>{t("menu.item1")}</li>
            <li>{t("menu.item2")}</li>
            <li>{t("menu.item3")}</li>
          </ul>
          <div className="language-menu flex items-center">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
