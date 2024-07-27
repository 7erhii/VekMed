import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope } from "next/font/google";
import "./globals.css";
import FontResizer from "../../components/FontResizer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function LocaleLayout({ children, params: { locale } } : any) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
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