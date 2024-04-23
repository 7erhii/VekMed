"use client";

import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"


import { MdOutlineQuestionMark } from "react-icons/md";
import iconQuestion from "@/assets/icons/icon-question.svg";

import styles from "./ContactForm.module.css";

const contactFormData = {
  inputName: {
    title: "inputName.label",
    placeholder: "inputName.placeholder",
  },
  inputEmployes: {
    title: "inputEmployees.label",
    placeholder: "inputEmployees.placeholder",
    tooltip: "inputEmployees.tooltip",
  },
  inputEmail: {
    title: "inputEmail.label",
    placeholder: "inputEmail.placeholder",
  },
  inputPhone: {
    title: "inputPhone.label",
    placeholder: "inputPhone.placeholder",
  },

  inputDropdown: {
    title: "inputDropdown.label",
    placeholder: "inputDropdown.placeholder",
    option1: "inputDropdown.options.option1",
    option2: "inputDropdown.options.option2",
    option3: "inputDropdown.options.option3",
    option4: "inputDropdown.options.option4",
  },
  inputTextarea: {
    title: "inputTextarea.label",
    placeholder: "inputTextarea.placeholder",
  },
};

export default function ContactForm({ data = contactFormData }) {
  const t = useTranslations("ContactForm");

  return (
    <div className={styles.ContactForm}>
      <div className={styles.ContactFormTitle}>
        <h2>
          {t("title")
            .split(" ")
            .map((word, index, words) => {
              let specialWord = ["With", "Future"].includes(word);
              let blueWord = ["Your", "Future", "Partners!"].includes(word);

              return (
                <React.Fragment key={index}>
                  <span
                    style={
                      blueWord
                        ? { color: "#3C7BF6" }
                        : specialWord
                        ? { color: "#151515" }
                        : {}
                    }
                  >
                    {word}
                  </span>
                  {specialWord && <br />}
                </React.Fragment>
              );
            })
            .reduce((acc, word, index, array) => {
              if (index < array.length - 1) {
                return [...acc, word, " "];
              } else {
                return [...acc, word];
              }
            }, [])}
        </h2>
        <p>{t("description")}</p>
      </div>
      <form className={styles.ContactFormInputs}>
        <div
          className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
        >
          <Label htmlFor="email" className={styles.ContactFormLabel}>
            {t(data.inputName.title)}
          </Label>
          <Input
            type="text"
            id="text"
            placeholder={t(data.inputName.placeholder)}
          />
        </div>

        <div
          className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
        >
          <Label htmlFor="email" className={styles.ContactFormLabel}>
            {t(data.inputEmployes.title)
              .split(/(\(optional\)|\(опционально\))/gi)
              .map((part, index) =>
                /\(optional\)|\(опционально\)/i.test(part) ? (
                  <span key={index} className="font-thin">
                    {part}
                  </span>
                ) : (
                  part
                )
              )}
          </Label>

          <TooltipProvider>
            <div>
              <Input
                type="text"
                id="numberOfEmployees"
                placeholder={t(data.inputEmployes.placeholder)}
                icon={
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button>
                        {/* <MdOutlineQuestionMark /> */}
                        <Image src={iconQuestion} alt="question" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{t(data.inputEmployes.tooltip)}</p>
                    </TooltipContent>
                  </Tooltip>
                }
              />
            </div>
          </TooltipProvider>
        </div>

        <div
          className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
        >
          <Label htmlFor="email" className={styles.ContactFormLabel}>
            {t(data.inputEmail.title)}
          </Label>
          <Input
            type="emai"
            id="placeholderEmail"
            placeholder={t(data.inputEmail.placeholder)}
          />
        </div>

        <div
          className={`${styles.ContactFormInput} ${styles.ContactFormInputHaf}`}
        >
          <Label htmlFor="email" className={styles.ContactFormLabel}>
            {t(data.inputPhone.title)}
          </Label>
          <Input
            type="phone"
            id="placeholderPhone"
            placeholder={t(data.inputPhone.placeholder)}
          />
        </div>

        <div className={`${styles.ContactFormInput} `}>
          <Label htmlFor="email" className={styles.ContactFormLabel}>
            {t(data.inputDropdown.title)}
          </Label>
          <Select>
            {/* <SelectTrigger className="w-[180px]"> */}
            <SelectTrigger>
              <SelectValue placeholder={t(data.inputDropdown.placeholder)} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={t(data.inputDropdown.option1)}>
                {t(data.inputDropdown.option1)}
              </SelectItem>
              <SelectItem value={t(data.inputDropdown.option2)}>
                {t(data.inputDropdown.option2)}
              </SelectItem>
              <SelectItem value={t(data.inputDropdown.option3)}>
                {t(data.inputDropdown.option3)}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className={`${styles.ContactFormInput} `}>
          <Label htmlFor="message" className={styles.ContactFormLabel}>
            {t(data.inputTextarea.title)}
          </Label>
          <Textarea placeholder={t(data.inputTextarea.placeholder)} className="resize-none h-40" id="message" />
        </div>
        <div className={`${styles.ContactFormActions} `}>

        <Button variant="outline">Button</Button>
        </div>

      </form>

      {/* <Label htmlFor="email">Email</Label>
      <TooltipProvider>
        <div>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            icon={
              <Tooltip>
                <TooltipTrigger asChild>
                  <button>
                    <MdOutlineQuestionMark />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Введите ваш email адрес</p>
                </TooltipContent>
              </Tooltip>
            }
          />
        </div>
      </TooltipProvider> */}
    </div>
  );
}
