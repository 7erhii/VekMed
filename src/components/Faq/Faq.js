import React from "react";
import { useTranslations } from "next-intl";
import styles from "./Faq.module.css";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import mainLogo from "@/assets/images/cheerful.webp";
import { PiStethoscopeFill } from "react-icons/pi";

const FaqCardsData = [
  {
    title: "card1.title",
    descr: "card1.descr",
  },
  {
    title: "card2.title",
    descr: "card2.descr",
  },
  {
    title: "card3.title",
    descr: "card3.descr",
  },
  {
    title: "card4.title",
    descr: "card4.descr",
  },
];

const Faq = ({ data = FaqCardsData }) => {
  const t = useTranslations("faq");
  return (
    <div className={styles.ReasonWrapper}>
      <div className={styles.ReasonContainer}>
        <div className={styles.FaqImage}>
          <Image src={mainLogo} />
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* {data.map((card, index) => (
          <div key={index} className={styles.ReasonCard}>
            <div className={styles.ReasonIcon}>
              <card.icon />
            </div>
            <div className={styles.ReasonText}>
              <h4>{t(card.title)}</h4>
              <h6>{t(card.descr)}</h6>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Faq;
