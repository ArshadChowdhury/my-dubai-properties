"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { instance } from "@/components/prev/services/apiFunctions";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useSearchParams } from "next/navigation";

export default function AllProperties() {
  const [{ lang, filterValues }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "setFilterValues",
      item: { ...filterValues, developmentTypes: "63feffa56023b40ac4385fec" },
    });
    return () => {
      dispatch({ type: "setFilterValues", item: false });
    };
  }, []);

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
      <ViewProperty
        heading={"Ready Properties"}
        filterListData={filterListData}
      />
    </section>
  );
}
