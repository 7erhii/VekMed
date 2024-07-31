import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope } from "next/font/google";
import "./globals.css";
import FontResizer from "../../components/FontResizer";
import Head from "next/head";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: any) {
  const messages = await getMessages(locale);

  // const t = useTranslations();

  return (
    <html lang={locale}>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content={
            "проведеня чекапів консультування с привентивної медицини, консультування канабіс"
          }
        />
        <meta property="og:title" content={"Медичний центр векмед чекапи"} />
        <meta
          property="og:description"
          content={
            "Чекап проведеня чекапів консультування с привентивної медицини, консультування канабіс"
          }
        />
        <meta
          property="og:image"
          content="../../assets/images/tablet-image.png"
        />
        <meta property="og:url" content="https://www.vekmed.com/" />
        <meta
          name="twitter:card"
          content="../../assets/images/tablet-image.png"
        />
        <link rel="alternate" href="https://www.vekmed.com/ua" hrefLang="uk" />
        <link rel="alternate" href="https://www.vekmed.com/ru" hrefLang="ru" />
        <link rel="alternate" href="https://www.vekmed.com/en" hrefLang="en" />
        <link
          rel="alternate"
          href="https://www.vekmed.com/ua"
          hrefLang="x-default"
        />
      </Head>
      <body className={manrope.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div style={{ maxWidth: "1936px", width: "100%", margin: "0 auto" }}>
            <FontResizer />
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// import { NextIntlClientProvider, useTranslations } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { Manrope } from "next/font/google";
// import "./globals.css";
// import FontResizer from "../../components/FontResizer";
// import Head from "next/head";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default async function LocaleLayout({
//   children,
//   params: { locale },
// }: any) {
//   const messages = await getMessages(locale);

//   const t = useTranslations()

//   return (
//     <html lang={locale}>
//       <Head>
//         <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
//         <meta name="description" content={t("MainPage.HeaderMetadescription")} />
//         <meta property="og:title" content={t("MainPage.title")} />
//         <meta property="og:description" content={t("MainPage.descriptionOg")} />
//         <meta property="og:image" content="/path/to/your/og-image.jpg" />
//         <meta property="og:url" content="https://yourwebsite.com" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="alternate" href="https://www.vekmed.com/ua" hreflang="uk" />
//         <link rel="alternate" href="https://www.vekmed.com/ru" hreflang="ru" />
//         <link rel="alternate" href="https://www.vekmed.com/en" hreflang="en" />
//         <link rel="alternate" href="https://www.vekmed.com" hreflang="x-default" />
//       </Head>
//       <body className={manrope.className}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <div style={{ maxWidth: "1936px", width: "100%", margin: "0 auto" }}>
//             <FontResizer />
//             {children}
//           </div>
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
