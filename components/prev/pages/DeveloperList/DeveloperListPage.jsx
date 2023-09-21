"use client";

import DevelopersDescription from "./partials/DevelopersDescription";
import DeveloperList2 from "./partials/DeveloperList2";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";
import RouteLink from "../../RouteLink";
import { usePathname } from "next/navigation";
import HeadingBox from "../../HeadingBox";

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

  const { data: filterListData } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
  });

  const {
    isLoading: isLoadingDevelopersData,
    data: developersData,
    isError: isErrorDevelopersData,
    refetch,
  } = useQuery({
    queryKey: ["get-developers"],
    queryFn: getAllDevelopers,
  });

  useEffect(() => {
    refetch();
  }, [lang, page]);

  if (isLoadingDevelopersData) {
    return (
      <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorDevelopersData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="relative w-full pt-20 md:pt-28 font-montserrat bg-payment mb-40">
        <Navbar2
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
          filterListData={developersData}
        />
        <RouteLink locationName={pathname} />
        <Skeleton className="px-5">
          <div className="w-full z-50  flex flex-col md:flex-row justify-between items-center sticky pb-2 md:pb-0 px-2 -top-16 md:top-0 mt-5 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <div className="w-full md:w-[25%] py-3">
              <HeadingBox heading="All Developers" />
            </div>
            <FilterModal
              setPage={setPage}
              setIsFilterModalOpen={setIsFilterModalOpen}
              filterListData={filterListData}
              isFilterModalOpen={isFilterModalOpen}
            />
            <div className="md:hidden">
              <FilterSearchInput setIsFilterModalOpen={setIsFilterModalOpen} />
            </div>
            <div className="hidden md:block">
              <div className="w-1/4 bg-white bg-opacity-10 rounded-md flex items-center custom-shadow">
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
            </div>
          </div>
          <DevelopersDescription />
          <DeveloperList2
            fetchMoreData={fetchMoreData}
            page={page}
            developers={developersData}
          />
        </Skeleton>
      </div>
      <Footer footerBg={"footer_background"} />
    </section>
  );
};

export default DeveloperListPage;
