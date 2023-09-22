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

const OtherNecessaryComponents = () => {
  const [mobileView, setMobileView] = useState(false);
  const [{ lang }] = useStateValue();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const getAllDevelopers = async () => {
    const data = await instance
      .get(`/${lang}/developers`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    refetch: homeDataRefetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
  });

  const {
    isLoading: isDeveloperDataLoading,
    data: developersData,
    refetch: developerRefetch,
  } = useQuery({
    queryKey: ["get-developers"],
    queryFn: getAllDevelopers,
  });

  useEffect(() => {
    developerRefetch();
    homeDataRefetch();
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, [lang]);

  if (isLoadingHomeContent || isDeveloperDataLoading) {
    return (
      <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorHomeContent) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  return (
    <>
      <Menu
        homeData={homeData}
        developersData={developersData}
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
