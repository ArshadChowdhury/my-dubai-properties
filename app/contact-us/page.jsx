"use client";

import ContactUs from "@/components/prev/pages/ContactUs/ContactUs";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function ContactUsPage() {
  const [{ lang }] = useStateValue();
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <ContactUs />
    </section>
  );
}
