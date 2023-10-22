"use client";

import DevelopersDescription from "./partials/DevelopersDescription";
import DeveloperList2 from "./partials/DeveloperList2";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";
import RouteLink from "../../RouteLink";
import { usePathname } from "next/navigation";
import HeadingBox from "../../HeadingBox";
import LoadingState from "@/components/LoadingState";

import search from "@/public/images/global/icon-search.png";
import Skeleton from "../../Skeleton/Skeleton";
import FilterSearchInput from "../ViewProperty/partials/filterSearch";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import FilterModal from "../ViewProperty/partials/filterModal";

const DeveloperListPage = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState();
  const [{ lang }] = useStateValue();
  const [page, setPage] = useState(1);
  const pathname = usePathname();

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const fetchMoreData = () => {
    setPage((page) => page + 1);
    return async () => {
      const data = await instance
        .get(`/${lang}/developers`, {
          timeout: 5000,
          params: { page },
        })
        .then((data) => data.data.data.properties);
      return data;
    };
  };

  const getAllDevelopers = async () => {
    const data = await instance
      .get(`/${lang}/developers`, {
        timeout: 5000,
        params: { page },
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
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    refetch: refetchHomeData,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  const { data: filterListData } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingDevelopersData,
    data: developersData,
    isError: isErrorDevelopersData,
    refetch,
  } = useQuery({
    queryKey: ["get-developers"],
    queryFn: getAllDevelopers,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    refetch();
    refetchHomeData();
  }, [lang]);

  if (isLoadingDevelopersData || isLoadingHomeContent) {
    return <LoadingState />;
  }

  if (isErrorDevelopersData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const heading = homeData?.lang?.menu?.all;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar2
        className={`fixed top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
        type="inline"
        filterListData={developersData}
        homeData={homeData}
      />
      <div className="relative w-full pt-20 md:pt-24 font-montserrat bg-payment mb-40">
        <RouteLink
          buttonHide={"true"}
          homeData={homeData}
          locationName={heading}
        />
        <Skeleton className="px-5 mt-10 md:mt-0">
          <div className="w-full z-10 flex flex-col md:flex-row justify-between items-center pb-2 md:pb-0 -top-16 md:top-0 mt-5 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <div className="w-full md:w-auto py-3">
              <HeadingBox className={"text-left"} heading={heading} />
            </div>
            {/*  <FilterModal
              setPage={setPage}
              setIsFilterModalOpen={setIsFilterModalOpen}
              filterListData={filterListData}
              isFilterModalOpen={isFilterModalOpen}
            />
             <div className="md:hidden">
              <FilterSearchInput setIsFilterModalOpen={setIsFilterModalOpen} />
            </div>
            <div className="hidden md:block">
              <div className="w-full bg-white bg-opacity-10 rounded-md flex items-center custom-shadow">
                <input
                  type="search"
                  name="search developers"
                  id="search-developers"
                  placeholder="SEARCH"
                  className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
                />
                <button className="px-5">
                  <Image src={search} alt="search" className="w-3" />
                </button>
              </div>
            </div> */}
          </div>
          <DevelopersDescription />
          <DeveloperList2
            fetchMoreData={fetchMoreData}
            page={page}
            developers={developersData}
          />
        </Skeleton>
      </div>
      <Footer homeData={homeData} footerBg={"footer_background"} />
    </section>
  );
};

export default DeveloperListPage;
