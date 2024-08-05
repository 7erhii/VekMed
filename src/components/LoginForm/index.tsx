"use client";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { useTranslations } from "next-intl";
import axios from "axios";
import styles from "./style.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import router from "next/router";
import InputMask from "react-input-mask";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  phone: string;
  password: string;
}

interface FormErrors {
  phone?: string;
  password?: string;
}

type TooltipFields = "phone" | "password";

export default function LoginForm({ switchForm }: { switchForm: (form: string) => void }) : JSX.Element {
  const t = useTranslations("Login");

  const [formData, setFormData] = useState<FormData>({
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [tooltipVisible, setTooltipVisible] = useState<Record<TooltipFields, boolean>>({
    phone: false,
    password: false,
  });

  const validate = () => {
    let errors: FormErrors = {};
    if (!formData.phone.trim()) {
      errors.phone = t("phoneRequired");
    }
    if (!formData.password) {
      errors.password = t("passwordRequired");
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("/api/login", formData);
        if (response.data.status === "logged_in") {
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const toggleTooltip = (field: TooltipFields) => {
    setTooltipVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{t("phoneLabel")}</label>
          <div className={styles.inputWithIcon}>
            <InputMask
              mask="+380 99 999 9999"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder={t("phonePlaceholder")}
              maskChar={null}
              name="phone"
            />
            <GoQuestion
              className={styles.icon}
              onMouseEnter={() => toggleTooltip("phone")}
              onMouseLeave={() => toggleTooltip("phone")}
            />
            {tooltipVisible.phone && (
              <div className={styles.tooltip}>
                <p>{t("phoneTooltip")}</p>
              </div>
            )}
          </div>
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>{t("passwordLabel")}</label>
          <div className={styles.inputWithIcon}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
              placeholder="********"
            />
            <GoQuestion
              className={styles.icon}
              onMouseEnter={() => toggleTooltip("password")}
              onMouseLeave={() => toggleTooltip("password")}
            />
            {tooltipVisible.password && (
              <div className={styles.tooltip}>
                <p>{t("passwordTooltip")}</p>
              </div>
            )}
          </div>
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            {t("submitButton")}
            <IoIosArrowRoundForward className={styles.buttonIcon} />
          </button>
        </div>
        <div className={styles.formextraButton}>
          {/* <button onClick={() => switchForm("forgot")}>
            {t("Login.forgotPassword")}
          </button> */}
        </div>
      </form>
    </div>
  );
}
