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
          <h2>{t("title")}</h2>
        </a>
        <nav className={styles.navMenu}>
          <ul className={styles.list}>
            <li className={styles.listItem}><h4>{t("menu.item1")}</h4></li>
            <li className={styles.listItem}><h4>{t("menu.item2")}</h4></li>
            <li className={styles.listItem}><h4>{t("menu.item3")}</h4></li>
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
