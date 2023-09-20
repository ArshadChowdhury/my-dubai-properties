"use client";

import { useEffect } from "react";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useRouter } from "next/navigation";

export default function AllProperties() {
  const router = useRouter();

  useEffect(() => {
    router.push("off-plan?developmentTypes=63feff816023b40ac4385fba");
  }, []);

  return <ViewProperty heading={"Off Plan Properties"} />;
}
