"use client";

import TermsAndConditions from "@/components/prev/pages/TermsAndConditions/TermsAndConditions";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function TermsAndConditionsPage() {
  const [{ lang }] = useStateValue();
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <TermsAndConditions />
    </section>
  );
}
