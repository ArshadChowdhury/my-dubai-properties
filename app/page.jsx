"use client";

import { useQuery } from "@tanstack/react-query";

import { instance } from "@/components/prev/services/apiFunctions";
import { useStateValue } from "@/components/prev/states/StateProvider";

import Home from "@/components/prev/pages/HomePage/Home";

export default function HomePage() {
  const [{ lang }] = useStateValue();

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

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

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
  });

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError,
  } = useQuery({
    queryKey: ["property-list"],
    queryFn: getAllProperties,
  });

  const { data: filterListData } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
  });

  if (isLoadingHomeContent || isLoadingPropertiesData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorHomeContent || isError) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Home
        properties={propertiesData}
        filterListData={filterListData}
        homeData={homeData}
      />
    </section>
  );
}
