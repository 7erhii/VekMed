import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./Policy.module.css";
import Image from "next/image";

const Policy = ({ locale }) => {
  const t = useTranslations("Policy");
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterUpper}></div>
      <div className={styles.FooterLower}>
        <Link href="/[locale]/policy" as={`/${locale}/policy`}>
          {t("title")}
        </Link>
      </div>
    </div>
  );
};

export default Policy;
