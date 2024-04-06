import React from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

import FontResizer from "@/components/FontResizer.js";

import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AchievementsSection from "@/components/Achievements/AchievementsSection";
import DesignSection from "@/components/Design/DesignSection";
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
          <FontResizer/>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Hero></Hero>
            <AchievementsSection></AchievementsSection>
            <DesignSection></DesignSection>
            
            {/* <Footer /> */}
          </div>
        </body>
      </html>
  );
}
