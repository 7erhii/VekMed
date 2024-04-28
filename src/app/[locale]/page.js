import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./Page.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FontResizer from "@/components/FontResizer.js";

const inter = Inter({ subsets: ["latin"] });

const locales = ["en", "ru"];

import { unstable_setRequestLocale } from "next-intl/server";

import Hero from "@/components/Hero/Hero";
import RunningLine from "@/components/ui/RunningLine/RunningLine";
import Headline from "@/components/ui/Headline/Headline";
import Cards from "@/components/Cards/Cards";
import CardsExtra from "@/components/Cards/CardsExtra";
import CustomSlider from "@/components/ui/CustomSlider/CustomSlider";
import Container from "@/components/Container/Container";
import Contacts from "@/components/Contacts/Contacts";

import { useLocale } from "next-intl";

const titles = {
  expertise: "firstTitle",
  News: "secondTitle",
  getInTouch: "getInTouch",
  whyWe: "whyWe",
  extra: "extra",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <FontResizer />
        <div className="flex flex-col min-h-screen">
          <Hero />
          <RunningLine speed={7000} />

          <Container text={titles.News}>
            <CustomSlider />
          </Container>

          <Container text={titles.expertise}>
            <Cards />
          </Container>

          <Container text={titles.extra}>
            <CardsExtra />
          </Container>

          <Container text={titles.getInTouch}>
            <Contacts />
          </Container>
          {/* <Container text={titles.whyWe}>
            <Contacts />
          </Container> */}
        </div>
      </body>
    </html>
  );
}
