"use client"
import React from "react";
import { FormattedMessage } from "next-intl";
import { useTranslations } from "next-intl";
import Link from "next/link";

import Policy from "@/components/Policy/Policy";

const PolicyPage = () => {
  const t = useTranslations("Footer");
  return (
    <div>
      <Policy />
    </div>
  );
};

export default PolicyPage;
