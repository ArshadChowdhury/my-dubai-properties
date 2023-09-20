"use client";

import { useEffect } from "react";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useRouter } from "next/navigation";

export default function AllProperties() {
  const router = useRouter();

  useEffect(() => {
    router.push("ready?developmentTypes=63feffa56023b40ac4385fec");
  }, []);

  return <ViewProperty heading={"Ready Properties"} />;
}
