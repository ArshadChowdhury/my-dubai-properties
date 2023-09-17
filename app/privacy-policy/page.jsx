import React from "react";
import PrivacyContent from "@/components/prev/pages/PrivacyPolicy/partials/PrivacyContent";

export default function PrivacyPolicy() {
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <PrivacyContent />
    </section>
  );
}
