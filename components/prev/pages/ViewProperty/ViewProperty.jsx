"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FilterSearch2 from "../../FilterSearch2";
import React from "react";
import { useStateValue } from "../../states/StateProvider";
import Skeleton from "../../Skeleton/Skeleton";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { usePathname } from "next/navigation";
import RouteLink from "../../RouteLink";
import FilterSearchInput from "./partials/filterSearch";
import { useQuery } from "@tanstack/react-query";
import HeadingBox from "../../HeadingBox";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import { instance } from "../../services/apiFunctions";
import FilterModal from "./partials/filterModal";
import VerticalLine from "../../VerticalLine";
import ContactUsModal from "../ArrangeMeeting/partials/ContactUsModal";
import LoadingState from "@/components/LoadingState";

export default function ViewProperty(props) {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const [{ lang, viewType }, dispatch] = useStateValue();
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const propertyTypeId = searchParams.get("propertyTypes");
  const developerId = searchParams.get("developers");
  const completion = searchParams.get("completions");

  const filterParams = {
    propertyAreaId,
    developmentTypeId,
    propertyTypeId,
    developerId,
    completion,
    page,
  };

  const fetchMoreData = async () => {
    setPage((page) => page + 1);
    return async () => {
      const data = await instance
        .get(`/${lang}/properties`, {
          timeout: 5000,
          params: filterParams,
        })
        .then((data) => data.data.data.properties);
      return data;
    };
  };

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const getAllProperties = async () => {
    const data = await instance
      .get(`/${lang}/properties`, {
        timeout: 5000,
        params: filterParams,
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
    isLoading: isLoadingFilterData,
    data: filterListData,
    refetch: filterListRefetch,
  } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError,
    refetch,
  } = useQuery({
    queryKey: [`property-list ${pathname}`],
    queryFn: getAllProperties,
    enabled: !!filterParams.developmentTypeId,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    refetch: homeDataRefetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
    homeDataRefetch();
    filterListRefetch();
    return () => {
      dispatch({ type: "setFilterValues", item: false });
    };
  }, [
    propertyAreaId,
    developmentTypeId,
    propertyTypeId,
    developerId,
    completion,
    lang,
    page,
  ]);

  useEffect(() => {
    setPage(1);
  }, [lang, viewType]);

  if (isLoadingPropertiesData || isLoadingFilterData || isLoadingHomeContent) {
    return <LoadingState />;
  }

  if (isError) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const headingMap = {
    "/properties": homeData?.lang?.navber?.allProjects,
    "/properties/ready": homeData?.lang?.navber?.ready,
    "/properties/off-plan": homeData?.lang?.navber?.offPlan,
  };

  const heading = headingMap[pathname] || "";

  const handleShowAll = () => {
    setPage((page) => page + 1);
  };

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <VerticalLine />
      <div className="z-50 md:hidden">
        <Navbar2
          homeData={homeData}
          className={`w-full py-5 bg-[#000F1D] z-50`}
          type="inline"
        />
      </div>
      <div className="z-50 hidden md:block">
        <Navbar2
          homeData={homeData}
          filterListData={filterListData}
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
          type="inline"
        />
      </div>

      <section className="min-h-screen w-full mt-0 md:mt-4 bg-payment z-20">
        <RouteLink
          setPage={setPage}
          homeData={homeData}
          locationName={heading}
        />
        <FilterModal
          page={page}
          homeData={homeData}
          setPage={setPage}
          setIsFilterModalOpen={setIsFilterModalOpen}
          filterListData={filterListData}
          isFilterModalOpen={isFilterModalOpen}
        />
        <ContactUsModal homeData={homeData} />
        <Skeleton className="w-full mt-4 px-5 sticky mb-8">
          <div className="w-full -top-[60px] md:top-0 flex flex-col md:flex-row justify-between px-2 pt-3 pb-1 sticky z-50 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <HeadingBox heading={heading} />

            <div className="flex items-center">
              <div className="md:hidden">
                <FilterSearchInput
                  homeData={homeData}
                  setIsFilterModalOpen={setIsFilterModalOpen}
                />
              </div>
              <div className="hidden md:block">
                <FilterSearch2
                  homeData={homeData}
                  setPage={setPage}
                  filterListData={filterListData}
                  filterParams={filterParams}
                />
              </div>
            </div>
          </div>

          {viewType === "grid" ? (
            <GridView
              page={page}
              filterParams={filterParams}
              propertiesData={propertiesData}
              handleShowAll={handleShowAll}
              fetchMoreData={fetchMoreData}
            />
          ) : (
            <ListView
              page={page}
              filterParams={filterParams}
              propertiesData={propertiesData}
              handleShowAll={handleShowAll}
              fetchMoreData={fetchMoreData}
            />
          )}
        </Skeleton>
      </section>
      <div className="z-10">
        <Footer homeData={homeData} footerBg={"footer_background"} />
      </div>
    </section>
  );
}
