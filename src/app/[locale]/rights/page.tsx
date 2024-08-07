import React from "react";
import styles from "./style.module.css";
import Header from "../../../components/header";
import { BlockWrapper } from "../../../components/wrappers";
import Footer from "../../../components/footer";
import Head from "next/head";
import { useTranslations } from "next-intl";

export default function Rights({ params: { locale } }: any) {
  const t = useTranslations("rights");

  return (
    <>
      <Head>
        <title>Права на контент та авторські права - VEKMED</title>
        <meta
          name="description"
          content="Інформація про права на контент та авторські права на сайті VEKMED. Дізнайтеся про правила використання матеріалів та захист персональних даних."
        />
        <meta
          name="keywords"
          content="VEKMED, авторські права, права на контент, захист персональних даних"
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <div className={styles.root}>
        <h1 className={styles.heading1}>Права на контент та авторські права</h1>
        <p className={styles.paragraph}>
          VEKMED – захист авторських прав. Весь контент сайту, включаючи тексти,
          графіку, логотипи, іконки, зображення та програмне забезпечення,
          захищений українськими та міжнародними законами про авторські права.
        </p>

        <h2 className={styles.heading2}>Використання матеріалів</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Ліцензія:</strong> Матеріали сайту доступні для особистого
            некомерційного використання.
          </li>
          <li className={styles.listItem}>
            <strong>Заборони:</strong> Будь-яке копіювання, розповсюдження,
            публічне відтворення або інше комерційне використання контенту без
            письмового дозволу VEKMED строго заборонено.
          </li>
        </ul>

        <h2 className={styles.heading2}>Захист персональних даних</h2>
        <p className={styles.paragraph}>
          Наша організація серйозно ставиться до захисту персональних даних.
          Нижче ви знайдете інформацію про заходи безпеки та ваші права як
          користувачів.
        </p>

        <h3 className={styles.heading3}>Збір та використання інформації</h3>
        <p className={styles.paragraph}>
          Зібрані нами дані використовуються для надання медичних послуг,
          планування лікування та управління клінічною практикою.
        </p>

        <h3 className={styles.heading3}>Безпека даних</h3>
        <p className={styles.paragraph}>
          Всі персональні дані зберігаються на захищених серверах, доступ до
          яких строго регулюється для запобігання несанкціонованому доступу,
          втраті або знищенню.
        </p>

        <h3 className={styles.heading3}>Права користувача</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Користувачі мають право запросити доступ до своїх персональних
            даних, їх виправлення або видалення.
          </li>
          <li className={styles.listItem}>
            Ви також можете вимагати обмеження обробки своїх даних або
            висловлювати заперечення проти обробки.
          </li>
        </ul>

        <h2 className={styles.heading2}>Контакти</h2>
        <p className={styles.paragraph}>
          Якщо у вас є запитання стосовно авторських прав або використання
          матеріалів сайту, будь ласка, звяжіться з нами за адресою
          vekmedcare@gmail.com або за телефоном +380988081828.
        </p>
      </div>
      <BlockWrapper>
        <Footer locale={locale} />
      </BlockWrapper>
    </>
  );
}
