"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useEffect } from "react";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function AllProperties() {
  const [{ lang }] = useStateValue();

  const getAllFilter = async () => {
    const data = await instance
      .get(`/${lang}/data/filter-list`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };
  const {
    isLoading,
    data: filterListData,
    refetch,
  } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
  });

  useEffect(() => {
    refetch();
  }, [lang]);

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <ViewProperty
        isLoading={isLoading}
        heading={"All Properties"}
        filterListData={filterListData}
      />
    </section>
  );
}
