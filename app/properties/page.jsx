"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { instance } from "@/components/prev/services/apiFunctions";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useSearchParams } from "next/navigation";

export default function AllProperties() {
  const [{ lang, filterValues }] = useStateValue();

  const getAllFilter = async () => {
    const data = await instance
      .get(`/${lang}/data/filter-list`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };
  const { isLoading: isLoadingFilterList, data: filterListData } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
  });

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <ViewProperty filterListData={filterListData} />
    </section>
  );
}
