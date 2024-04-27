import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./Page.module.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import FontResizer from "@/components/FontResizer.js";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ru"];

import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "@/components/Hero/Hero";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import Headline from "@/components/ui/Headline/Headline";
import Cards from "@/components/Cards/Cards";

import { useLocale } from "next-intl";

const titles = {
  firstTitle: "firstTitle",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body style={{ padding: "0.5em" }}>
        <FontResizer />
        <div className="flex flex-col min-h-screen">
          {/* <Hero />
          <RunningLine speed={7000} />
          <Headline text={titles.firstTitle} /> */}
          <Cards />
        </div>
      </body>
    </html>
  );
}
