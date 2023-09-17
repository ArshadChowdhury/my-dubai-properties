"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";

import ViewProperty from "@/components/prev/pages/ViewProperty/ViewProperty";
import { useStateValue } from "@/components/prev/states/StateProvider";

export default function AllProperties() {
  const [{ lang }] = useStateValue();

  const getAllProperties = async () => {
    const data = await instance
      .get(`/${lang}/properties`, {
        timeout: 5000,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const getAllFilter = async () => {
    const data = await instance
      .get(`/${lang}/data/filter-list`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError,
    error,
  } = useQuery({
    queryKey: ["property-list", lang],
    queryFn: getAllProperties,
  });

  const { isLoading: isLoadingFilterList, data: filterListData } = useQuery({
    queryKey: ["filter-list", lang],
    queryFn: getAllFilter,
  });

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    error: homeContentError,
  } = useQuery({
    queryKey: ["get-home", lang],
    queryFn: getAllHomeContent,
  });

  if (isLoadingHomeContent) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isError) {
    return error.message;
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <ViewProperty
        properties={propertiesData}
        filterListData={filterListData}
        homeData={homeData}
      />
    </section>
  );
}
