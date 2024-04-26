import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./Page.module.css";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import FontResizer from "@/components/FontResizer.js";

import Hero from "@/components/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ru"];

import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={styles.pageWrapper}>
        <FontResizer />
        <div className="flex flex-col min-h-screen m-4">
          <Hero />
        </div>
      </body>
    </html>
  );
}
