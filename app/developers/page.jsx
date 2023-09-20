"use client";

import DeveloperListPage from "@/components/prev/pages/DeveloperList/DeveloperListPage";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function AllDevelopersPage() {
  const [{ lang }] = useStateValue();
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <DeveloperListPage />
    </section>
  );
}
