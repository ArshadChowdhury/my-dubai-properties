"use client";

import Menu from "@/components/prev/pages/Menu/Menu";
import ArrangeMeeting from "@/components/prev/pages/ArrangeMeeting/ArrangeMeeting";
import FilterModalViewProperty from "@/components/prev/pages/ViewProperty/partials/filterModeViewProperty";
import BottomMenu from "@/components/prev/BottomMenu";
import Chat from "@/components/prev/Chat";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { instance } from "./prev/services/apiFunctions";
import { useStateValue } from "./prev/states/StateProvider";
import { usePathname } from "next/navigation";

const OtherNecessaryComponents = () => {
  const [mobileView, setMobileView] = useState(false);
  const [{ lang }] = useStateValue();
  const pathname = usePathname();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  // const getAllDevelopers = async () => {
  //   const data = await instance
  //     .get(`/${lang}/developers`, {
  //       timeout: 5000,
  //     })
  //     .then((data) => data?.data?.data);
  //   return data;
  // };

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const getAllFilter = async () => {
    const data = await instance
      .get(`/${lang}/data/filter-list`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const {
    isLoading: isLoadingFilterData,
    data: filterListData,
    refetch: filterRefetch,
  } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    refetch: homeDataRefetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  // const {
  //   isLoading: isDeveloperDataLoading,
  //   data: developersData,
  //   refetch: developerRefetch,
  // } = useQuery({
  //   queryKey: ["get-developers"],
  //   queryFn: getAllDevelopers,
  // });

  useEffect(() => {
    homeDataRefetch();
    filterRefetch();
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, [lang]);

  if (isLoadingHomeContent || isLoadingFilterData) {
    return;
  }

  if (isErrorHomeContent) {
    return;
  }

  return (
    <>
      <Menu
        homeData={homeData}
        pathname={pathname}
        filterListData={filterListData}
        // developersData={developersData}
        mobileView={mobileView}
      />
      <ArrangeMeeting homeData={homeData} mobileView={mobileView} />
      <FilterModalViewProperty
        isFilterModalOpen={isFilterModalOpen}
        setIsFilterModalOpen={setIsFilterModalOpen}
      />
      <BottomMenu />
      <Chat />
    </>
  );
};

export default OtherNecessaryComponents;
