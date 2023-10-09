"use client";

import { useEffect } from "react";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useRouter } from "next/navigation";

export default function AllProperties() {
  const router = useRouter();

  useEffect(() => {
    router.push("ready?developmentTypes=6519855e79fcdc27efbf85cd");
  }, []);

  return <ViewProperty heading={"Ready Properties"} />;
}
