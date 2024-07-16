import { useTranslations } from "next-intl";
import hedoBg from "@/src/assets/images/hero-image.png";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations();
  
  return (
    <div>
      <Image src={hedoBg} alt="hedoBg"/>
      <h1>{t("Hero.Info")}</h1>
    </div>
  );
}
