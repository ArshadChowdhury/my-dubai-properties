"use client";

import React from "react";
import CookieContent from "@/components/prev/pages/CookiePolicy/partials/CookieContent";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function PrivacyPolicy() {
  const [{ lang }] = useStateValue();

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <CookieContent />
    </section>
  );
}
