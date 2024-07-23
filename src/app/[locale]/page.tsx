// Core
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";

// Components
import Header from "../components/header/page";
import Hero from "../components/hero/page";
import { BlockWrapper } from "../components/wrappers/page";
import CustomTitle from "../components/ui/customTitle/page";
import GridCards from "../components/gridCards/page";
import CallNow from "../components/callNow/page";
import Services from "../components/Services/page";

// Images
import tabetImage from "@/src/assets/images/tablet-image.png";
import xrayImage from "@/src/assets/images/xray-image.png";
import hedoBg from "@/src/assets/images/hero-image.png";

import Service1 from "@/src/assets/images/service1-image.png";
import Service2 from "@/src/assets/images/service1-image.png";
import Service3 from "@/src/assets/images/service1-image.png";
import Service4 from "@/src/assets/images/service1-image.png";

const locales = ["en", "ua", "alt"];

const serviceImages = [Service1, Service2, Service3, Service4];

export function generateStaticParams() {
  return locales.map((locale) => ({ params: { locale } }));
}

export default function HomePage({ params: { locale } }: any) {
  const t = useTranslations();

  const reasonDataCardsObj = t.raw("MainPage.Reason.Cards");
  const serviceCardsData = t.raw("MainPage.Services.Cards");

  interface ServiceCard {
    Title: string;
    Description: string;
    Extra: string;
    Price: string;
    Link: string;
    Image?: StaticImageData | string;
  }

  const serviceCardsObj: ServiceCard[] = serviceCardsData.map(
    (card: ServiceCard, index: number): ServiceCard => ({
      ...card,
      Image: serviceImages[index],
    })
  );

  let count = 0;
  const reasonDataCards = reasonDataCardsObj.map((data: any) => {
    if (data.Type === "white" || data.Type === "count") {
      count += 1;
      return { ...data, displayIndex: count };
    }
    return { ...data, displayIndex: null };
  });

  unstable_setRequestLocale(locale);

  return (
    <div>
      {/* <Header />
      <Hero />
      <BlockWrapper>
        <CustomTitle text={t("MainPage.Reason.Title")} />
        <GridCards data={reasonDataCards} />
      </BlockWrapper>
      <BlockWrapper>
        <CallNow />
      </BlockWrapper> */}
      <BlockWrapper>
        <CustomTitle text={t("MainPage.Services.Title")} />
        <Services serviceCardMainData={serviceCardsObj} />
      </BlockWrapper>
    </div>
  );
}
