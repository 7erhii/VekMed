'use client'
import { useTranslations } from "next-intl";
import styles from "./ActionBtn.module.css";

export default function ActionBtn ({ type }) {
    const t = useTranslations('ActionBtn');

    let className = styles.ActionButton;

    if (type === 'hero') {
        className += ` ${styles.ActionButtonHero}`;
    } else if (type === 'second') {
        className += ` ${styles.ActionButtonSecondary}`;
    }

    return (
        <button className={className}>
            {t("text")}
        </button>
    );
}
