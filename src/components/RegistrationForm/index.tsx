"use client";
import React, { useState, useEffect } from "react";
import { GoQuestion } from "react-icons/go";
import { useTranslations } from "next-intl";
import PasswordStrengthBar from "react-password-strength-bar";
import InputMask from "react-input-mask";
import axios from "axios";

// Styles
import styles from "./style.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import router from "next/router";

// Hooks
// import { useCreateUser } from "@/src/hooks/create-user";
// import { TbXxx } from "react-icons/tb";

interface FormData {
  fullName: string;
  dob: string;
  phone: string;
  password: string;
}

interface FormErrors {
  fullName?: string;
  dob?: string;
  phone?: string;
  password?: string;
}

type TooltipFields = "fullName" | "dob" | "phone" | "password";

export default function RegistrationForm() {
  const t = useTranslations("Authorisation");

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dob: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [tooltipVisible, setTooltipVisible] = useState<
    Record<TooltipFields, boolean>
  >({
    fullName: false,
    dob: false,
    phone: false,
    password: false,
  });

  useEffect(() => {
    const validateKey = async () => {
      try {
        const response = await axios.post("/validate-key");
        if (response.status !== 200) {
          await axios.post("/generate-key");
        }
      } catch (error) {
        console.error("Error validating auth key", error);
      }
    };
    validateKey();
  }, []);

  const validate = () => {
    let errors: FormErrors = {};
    const nameRegex = /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ\s]+$/;
    if (
      !formData.fullName.trim() ||
      formData.fullName.trim().length < 4 ||
      !nameRegex.test(formData.fullName.trim())
    ) {
      errors.fullName = t("fullNameRequired");
    }
    if (!formData.dob) {
      errors.dob = t("dobRequired");
    }
    if (!formData.phone || formData.phone.length < 11) {
      errors.phone = t("phoneRequired");
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      errors.password = t("passwordRequired");
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      try {
        // Отправляем данные формы на сервер для регистрации
        const response = await axios.post("/api/register", formData);

        if (response.data.status === "verified_and_logged_in") {
          // Переадресация на главную страницу или панель пользователя
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Registration error:", error);
        // Обработка ошибок, например, показ сообщения пользователю
      }
    }
  };
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log("Form submitted", formData);
  //   }
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phone: value,
    });
  };

  const toggleTooltip = (field: TooltipFields) => {
    setTooltipVisible((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>{t("fullNameLabel")}</label>
          <div className={styles.inputWithIcon}>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              placeholder={t("fullNamePlaceholder")}
            />
            <GoQuestion
              className={styles.icon}
              onMouseEnter={() => toggleTooltip("fullName")}
              onMouseLeave={() => toggleTooltip("fullName")}
            />
            {tooltipVisible.fullName && (
              <div className={styles.tooltip}>
                <p>{t("fullNameTooltip")}</p>
              </div>
            )}
          </div>
          {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>

        <div className={styles.row}>
          <div className={`${styles.item} ${styles.itemShort}`}>
            <label className={styles.label}>{t("dobLabel")}</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className={styles.dateInput}
            />
            {errors.dob && <p className={styles.error}>{errors.dob}</p>}
          </div>
          <div className={styles.item}>
            <label className={styles.label}>{t("phoneLabel")}</label>
            <div className={styles.inputWithIcon}>
              <InputMask
                mask="+380 99 999 9999"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder={"+380 XX XXX XXXX"}
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
              placeholder={"********"}
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
          <PasswordStrengthBar
            password={formData.password}
            shortScoreWord={t("passwordTooShort")}
            scoreWords={[
              t("passwordTooShort"),
              t("passwordWeak"),
              t("passwordGood"),
              t("passwordStrong"),
              t("passwordVeryStrong"),
            ]}
          />{" "}
          {errors.password && (
            <p className={`${styles.error} ${styles.errorAbsolute}`}>
              {errors.password}
            </p>
          )}
          <p className={styles.passwordRequirements}>
            {t("passwordRequirements")}
          </p>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            {t("submitButton")}
            <IoIosArrowRoundForward className={styles.buttonIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}
