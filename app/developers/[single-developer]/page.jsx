"use client";

import SingleDeveloperView from "@/components/prev/pages/SingleDeveloperView/SingleDeveloperView";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function SingleDeveloperPage() {
  const [{ lang }] = useStateValue();
  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <SingleDeveloperView />
    </section>
  );
}
