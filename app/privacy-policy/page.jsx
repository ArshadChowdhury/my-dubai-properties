"use client";

import React from "react";
import PrivacyContent from "@/components/prev/pages/PrivacyPolicy/partials/PrivacyContent";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function PrivacyPolicy() {
  const [{ lang }] = useStateValue();

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <PrivacyContent />
    </section>
  );
}
