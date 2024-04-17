import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import FontResizer from "@/components/FontResizer.js";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AchievementsSection from "@/components/Achievements/AchievementsSection";
import DesignSection from "@/components/Design/DesignSection";
import WorkSection from "@/components/Work/WorkSection";
import Development from "@/components/Development/Development";
import MarketingSection from "@/components/Marketing/MarketingSection";
import Ready from "@/components/Ready/Ready";
import Clients from "@/components/Clients/Clients";
// import Footer from "@/components/Footer";

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
      <body className={"main"}>
        <FontResizer />
        <div className="flex flex-col min-h-screen">
          {/* <Header />
          <Hero></Hero> */}
          <AchievementsSection></AchievementsSection>
          <DesignSection></DesignSection>
          <WorkSection></WorkSection>
          <Development></Development>
          <MarketingSection></MarketingSection>

          <Ready />
          <Clients/>
          

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
