"use client";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { useTranslations } from "next-intl";
import axios from "axios";
import styles from "./style.module.css";
import PasswordStrengthBar from "react-password-strength-bar";
import InputMask from "react-input-mask";
import { IoIosArrowRoundForward } from "react-icons/io";
import router from "next/router";

interface FormData {
  phone: string;
  newPassword: string;
  confirmPassword: string;
}

interface FormErrors {
  phone?: string;
  newPassword?: string;
  confirmPassword?: string;
}

type TooltipFields = "phone" | "newPassword" | "confirmPassword";

export default function ForgotForm() {
  const t = useTranslations("ForgotPassword");

  const [formData, setFormData] = useState<FormData>({
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [tooltipVisible, setTooltipVisible] = useState<Record<TooltipFields, boolean>>({
    phone: false,
    newPassword: false,
    confirmPassword: false,
  });
  const [isCodeSended, setIsCodeSended] = useState(false);

  const validate = () => {
    let errors: FormErrors = {};
    if (!formData.phone.trim()) {
      errors.phone = t("phoneRequired");
    }
    if (isCodeSended) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,16}$/;
      if (!formData.newPassword || !passwordRegex.test(formData.newPassword)) {
        errors.newPassword = t("passwordRequired");
      }
      if (formData.newPassword !== formData.confirmPassword) {
        errors.confirmPassword = t("confirmPasswordRequired");
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (validate()) {
      if (!isCodeSended) {
        setIsCodeSended(true);
      } else {
        // Логика отправки нового пароля на сервер
        console.log("Form submitted", formData);
        // router.push("/dashboard");
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

        {isCodeSended && (
          <>
            <div className={styles.formGroup}>
              <label className={styles.label}>{t("newPasswordLabel")}</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={t("newPasswordPlaceholder")}
                />
                <GoQuestion
                  className={styles.icon}
                  onMouseEnter={() => toggleTooltip("newPassword")}
                  onMouseLeave={() => toggleTooltip("newPassword")}
                />
                {tooltipVisible.newPassword && (
                  <div className={styles.tooltip}>
                    <p>{t("newPasswordTooltip")}</p>
                  </div>
                )}
              </div>
              <PasswordStrengthBar
                password={formData.newPassword}
                shortScoreWord={t("passwordTooShort")}
                scoreWords={[
                  t("passwordTooShort"),
                  t("passwordWeak"),
                  t("passwordGood"),
                  t("passwordStrong"),
                  t("passwordVeryStrong"),
                ]}
              />
              {errors.newPassword && (
                <p className={`${styles.error} ${styles.errorAbsoluteForgot}`}>
                  {errors.newPassword}
                </p>
              )}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>{t("confirmPasswordLabel")}</label>
              <div className={styles.inputWithIcon}>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={t("confirmPasswordPlaceholder")}
                />
                <GoQuestion
                  className={styles.icon}
                  onMouseEnter={() => toggleTooltip("confirmPassword")}
                  onMouseLeave={() => toggleTooltip("confirmPassword")}
                />
                {tooltipVisible.confirmPassword && (
                  <div className={styles.tooltip}>
                    <p>{t("confirmPasswordTooltip")}</p>
                  </div>
                )}
              </div>
              {errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword}</p>
              )}
            </div>
          </>
        )}

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            {isCodeSended ? t("changePasswordButton") : t("submitButton")}
            <IoIosArrowRoundForward className={styles.buttonIcon} />
          </button>
        </div>
      </form>
    </div>
  );
}
