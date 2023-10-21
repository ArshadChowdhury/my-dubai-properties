"use client";

import { useEffect } from "react";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useRouter } from "next/navigation";

export default function AllProperties() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "/properties/off-plan?developmentTypes=651984de79fcdc27efbf859b"
    );
  }, []);

  return <ViewProperty heading={"Off Plan Properties"} />;
}
