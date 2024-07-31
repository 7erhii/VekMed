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

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta
          name="description"
          content="Проведення чек-апів, консультування з превентивної медицини, консультування канабіс"
        />
        <meta property="og:title" content="Медичний центр Векмед чекапи" />
        <meta
          property="og:description"
          content="Чекап, проведення чек-апів, консультування з превентивної медицини, консультування канабіс"
        />
        <meta
          property="og:image"
          content="https://www.vekmed.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcallNow-image.445476a2.png&w=1920&q=75"
        />
        <meta property="og:url" content="https://www.vekmed.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.vekmed.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcallNow-image.445476a2.png&w=1920&q=75"
        />
        <link rel="alternate" href="https://www.vekmed.com/ua" hrefLang="uk" />
        <link rel="alternate" href="https://www.vekmed.com/ru" hrefLang="ru" />
        <link rel="alternate" href="https://www.vekmed.com/en" hrefLang="en" />
        <link
          rel="alternate"
          href="https://www.vekmed.com/"
          hrefLang="x-default"
        />
      </head>

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

// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import { Manrope } from "next/font/google";
// import "./globals.css";
// import FontResizer from "../../components/FontResizer";

// const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
// });

// export default async function LocaleLayout({
//   children,
//   params: { locale },
// }: any) {
//   const messages = await getMessages(locale);

//   return (
//     <html lang={locale}>
//       <head>
//         <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
//       </head>
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
