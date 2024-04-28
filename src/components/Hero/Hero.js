import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";
import Image from "next/image";

// import mainLogo from "@/assets/images/main-logo.svg";
import Header from "@/components/Header/Header";
import HeroText from "../HeroText/HeroText";

const Hero = () => {
  const t = useTranslations("Header");
  return (
    <div style={{ padding: "0.5em" }}>
      <div className={styles.Hero}>
        <Header />
        <HeroText />
      </div>
    </div>
  );
};


export default Hero;
