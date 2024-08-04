import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

// Components
import Header from "../../components/header";
import Hero from "../../components/hero";
import { BlockWrapper } from "../../components/wrappers";
import CustomTitle from "../../components/ui/customTitle";
import GridCards from "../../components/gridCards";
import CallNow from "../../components/callNow";
import Services from "../../components/services";
import AccordionCardHolder from "../../components/accordionCardHolder";
import Footer from "../../components/footer";

// Images
import Service1 from "@/src/assets/images/service1-image.png";
import Service2 from "@/src/assets/images/service1-image.png";
import Service3 from "@/src/assets/images/service1-image.png";
import Service4 from "@/src/assets/images/service1-image.png";

const locales = ["en", "ua", "ru"];

const serviceImages = [Service1, Service2, Service3, Service4];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function HomePage({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  const reasonDataCardsObj = t.raw("MainPage.Reason.Cards");
  const serviceCardsData = t.raw("MainPage.Services.Cards");
  const AccordionCardsData = t.raw("MainPage.FAQ.Items");

  const serviceCardsObj = serviceCardsData.map((card: any, index: any) => ({
    ...card,
    Image: serviceImages[index],
  }));

  const reasonDataCards = reasonDataCardsObj.map((data: any, index: any) => ({
    ...data,
    displayIndex:
      data.Type === "white" || data.Type === "count" ? index + 1 : null,
  }));

  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <BlockWrapper>
        <CustomTitle text={t("MainPage.Reason.Title")} />
        <GridCards data={reasonDataCards} />
      </BlockWrapper>
      <BlockWrapper>
        <CallNow />
      </BlockWrapper>
      <BlockWrapper>
        <CustomTitle text={t("MainPage.Services.Title")} />
        <Services serviceCardMainData={serviceCardsObj} />
      </BlockWrapper>
      <BlockWrapper>
        <CustomTitle text={t("MainPage.Reviews.Title")} />
      </BlockWrapper>
      <BlockWrapper>
        <CustomTitle text={t("MainPage.FAQ.Title")} />
        <AccordionCardHolder data={AccordionCardsData} />
      </BlockWrapper>
      <BlockWrapper>
        <CallNow />
      </BlockWrapper>
      <BlockWrapper>
        <Footer locale={locale} />
      </BlockWrapper>
    </div>
  );
}
