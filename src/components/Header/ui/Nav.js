import { getMessages } from "next-intl/server";

import { LuLayoutGrid } from "react-icons/lu";
import styles from "./Nav.module.css";


const Nav = async () => {
  const { Header } = await getMessages();

  const t = (key) => {
    if (typeof Header === 'object' && Header !== null) {
      return Header[key]; 
    }
    return '';
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>


      <li className={styles.navItem}>
          <div className={styles.navTitle}>{t("title1")}</div>
          <div className={styles.navDropdovnGroup}>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle1-1")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle1-2")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle1-3")}</p>
            </div>
          </div>
        </li>

        <li className={styles.navItem}>
          <div className={styles.navTitle}>{t("title2")}</div>
          <div className={styles.navDropdovnGroup}>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle2-1")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle2-2")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle2-3")}</p>
            </div>
          </div>
        </li>

        <li className={styles.navItem}>
          <div className={styles.navTitle}>{t("title3")}</div>
          <div className={styles.navDropdovnGroup}>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle3-1")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle3-2")}</p>
            </div>
            <div className={styles.navDropdovnItem}>
              <LuLayoutGrid />
              <p> {t("subtitle3-3")}</p>
            </div>
          </div>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
