import { useTranslations } from "next-intl";
import styles from "./Header.module.css";
import Image from "next/image";

import mainLogo from "@/assets/icons/main-logo.svg";

const Header = () => {
  const t = useTranslations("Header");
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className="header__logo">
          <Image src={mainLogo} alt="Main Logo" />
          {t("title")}
        </a>
      </div>
    </header>
  );
};

export default Header;
