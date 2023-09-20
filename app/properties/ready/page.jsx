"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { instance } from "@/components/prev/services/apiFunctions";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useRouter } from "next/navigation";

export default function AllProperties() {
  const [{ lang }] = useStateValue();
  const router = useRouter();

  useEffect(() => {
    router.push("ready?developmentTypes=63feffa56023b40ac4385fec");
  }, []);

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <ViewProperty heading={"Ready Properties"} />
    </section>
  );
}
