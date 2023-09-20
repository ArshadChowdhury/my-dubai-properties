"use client";

import AboutUs from "@/components/prev/pages/AboutUs/AboutUs";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function AboutPage() {
  const [{ lang }] = useStateValue();
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <AboutUs />
    </section>
  );
}
