import { useTranslations } from "next-intl";
import styles from "./Hero.module.css";
import Image from "next/image";

// import mainLogo from "@/assets/images/main-logo.svg";
import Header from "@/components/Header/Header";



const Hero = () => {
  const t = useTranslations("Header")
  return (
    <div className={styles.Hero}>
      <Header/>
    </div>
  );
};

export default Hero;
