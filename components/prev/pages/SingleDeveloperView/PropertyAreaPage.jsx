"use client";

import { useEffect, useState } from "react";
import DeveloperDetailsRouteLink from "../../DeveloperDetailsRouteLink";
import { usePathname, useSearchParams } from "next/navigation";
import EmmarProperties from "./partials/Properties";
import PropertiesForArea from "./partials/PropertiesForArea";
import TableViewForArea from "./partials/TableViewForArea";
import { useStateValue } from "../../states/StateProvider";
import { useQuery } from "@tanstack/react-query";
import FilterSelectSingleDeveloper from "@/components/FilterSelectSingleDeveloper";
import FilterSelectSinglePropertyArea from "@/components/FilterSelectSinglePropertyArea";
import home from "../../assets/images/global/icon-search.png";
import FilterSearchInput from "../ViewProperty/partials/filterSearch";
// import SingleDevFilterModal from "../../../SingleDevFilterModal";
import SinglePropertyAreaFilterModal from "../../../SinglePropertyAreaFilterModal";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import Image from "next/image";
import { instance } from "../../services/apiFunctions";
import ContactUsModal from "../ArrangeMeeting/partials/ContactUsModal";
import LoadingState from "@/components/LoadingState";
import PropertyListForArea from "./partials/PropertyListForArea";

const PropertyAreaPage = (props) => {
  const [{ lang, propertyToView }] = useStateValue();
  const [showCount, setShowCount] = useState(6);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const developerId = parts[parts.length - 1];
  const [page, setPage] = useState(1);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const propertyTypeId = searchParams.get("propertyTypes");
  const completion = searchParams.get("completions");
  const beds = searchParams.get("beds");
  // const beds = [1, 2, 3, 4, 5];
  const [isMobileView, setIsMobileView] = useState(true);

  const filterParams = {
    propertyAreaId,
    propertyTypeId,
    completion,
    beds,
    page,
  };

  const fetchMoreData = async () => {
    setPage((page) => page + 1);
    setShowCount((prev) => prev + 5);
    return async () => {
      const data = await instance
        .get(`/${lang}/property-area/${developerId}`, {
          timeout: 5000,
          params: filterParams,
        })
        .then((data) => data.data.data.properties);
      return data;
    };
  };

  const getSinglePropertyAreaData = async () => {
    const data = await instance
      .get(`/${lang}/property-area/${developerId}`, {
        timeout: 5000,
        params: filterParams,
      })
      .then((data) => data.data.data);
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
    refetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingSingleDev,
    data: singleDevData,
    isError: isErrorSingleDev,
    refetch: refetchSingleDev,
  } = useQuery({
    queryKey: ["get-single-dev", developerId],
    queryFn: getSinglePropertyAreaData,
    enabled: !!developerId,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
    refetchSingleDev();
  }, [lang, propertyAreaId, propertyTypeId, completion, beds, page]);

  if (isLoadingHomeContent || isLoadingSingleDev) {
    return <LoadingState />;
  }

  if (isErrorHomeContent || isErrorSingleDev) {
    return (
      <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const filterTexts = singleDevData?.lang?.developerDetails;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="md:hidden">
        <Navbar2
          homeData={homeData}
          className={`w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      </div>
      <div className="hidden md:block">
        <Navbar2
          homeData={homeData}
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50`}
          type="inline"
        />
      </div>

      <div className="mt-[15px] md:mt-0 mb-20 md:mb-0">
        <DeveloperDetailsRouteLink
          locationName={singleDevData?.propertyArea?.areaName}
          homeData={homeData}
          buttonHide={true}
        />
        <ContactUsModal homeData={homeData} />
        <PropertiesForArea developerDetails={singleDevData} />
        <div className="sticky z-[50] top-0 left-0 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120] ml-4 mr-4 md:ml-[130px] md:mr-[130px] md:py-2">
          <div className="md:hidden">
            {/* <div className="py-4"> */}
            <FilterSearchInput setIsFilterModalOpen={setIsFilterModalOpen} />
            {/* </div> */}
          </div>
          <div className="hidden md:flex sm:px-12 md:px-[4.5rem] lg:px-28 xl:px-0 2xl:px-[29px] flex-wrap">
            <div className="w-full md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {/* <div className="mt-2 md:mt-0 w-[220px] md:auto relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 md:mx-1 text-white hover:text-[#FFD15F]">
                <FilterSelectSingleDeveloper
                  filterTexts={filterTexts}
                  developerId={developerId}
                  setPage={setPage}
                  searchBy={filterTexts?.dropdownDubaiArea}
                  selectBy={filterListData?.propertyAreas}
                />
              </div> */}
              <div className="mt-2 md:mt-0 w-[220px] md:auto relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 md:mx-1 text-white hover:text-[#FFD15F]">
                <FilterSelectSinglePropertyArea
                  filterTexts={filterTexts}
                  developerId={developerId}
                  setPage={setPage}
                  searchBy={"Developers"}
                  selectBy={filterListData?.developers}
                />
              </div>
              <div className="mt-2 md:mt-0 w-[220px] md:auto relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 md:mx-1 text-white hover:text-[#FFD15F] ">
                <FilterSelectSinglePropertyArea
                  filterTexts={filterTexts}
                  developerId={developerId}
                  setPage={setPage}
                  searchBy={filterTexts?.dropdownPropertyType}
                  selectBy={filterListData?.propertyTypes}
                />
              </div>
              <div className="mt-2 md:mt-0 w-[220px] md:auto relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 md:mx-1 text-white hover:text-[#FFD15F] ">
                <FilterSelectSinglePropertyArea
                  filterTexts={filterTexts}
                  developerId={developerId}
                  setPage={setPage}
                  searchBy={filterTexts?.dropdownBeds}
                  selectBy={filterListData?.noOfBeds}
                />
              </div>
              <div className="mt-2 md:mt-0 w-[220px] md:auto relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 md:mx-1 text-white hover:text-[#FFD15F] ">
                <FilterSelectSinglePropertyArea
                  filterTexts={filterTexts}
                  developerId={developerId}
                  setPage={setPage}
                  searchBy={filterTexts?.dropdownCompletion}
                  selectBy={filterListData?.completions}
                />
              </div>
              <div
                className="w-full bg-white bg-opacity-10 rounded-md flex items-center custom-shadow mt-3 md:mt-0"
                style={{
                  border: "1px solid #bea04e",
                  // "border-right": "1px solid #FFD15F",
                  // "border-top": "1px solid #FFD15F",
                  // "border-bottom": "1px solid #FFD15F",
                }}
              >
                <input
                  type="search"
                  name="search developers"
                  id="search-developers"
                  placeholder="SEARCH"
                  className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
                />
                <button className="px-5">
                  <Image src={home} alt="search" className="w-7 " />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <SinglePropertyAreaFilterModal
            developerId={developerId}
            setPage={setPage}
            homeData={homeData}
            filterListData={filterListData}
            propertyToView={propertyToView}
            singleDevData={singleDevData}
            isFilterModalOpen={isFilterModalOpen}
            setIsFilterModalOpen={setIsFilterModalOpen}
          />
        </div>
        <TableViewForArea
          showCount={showCount}
          setShowCount={setShowCount}
          fetchMoreData={fetchMoreData}
          filterParams={filterParams}
          page={page}
          singleDevData={singleDevData}
        />

        <PropertyListForArea
          filterParams={filterParams}
          page={page}
          setPage={setPage}
          singleDevData={singleDevData}
          fetchMoreData={fetchMoreData}
        />
      </div>
      <Footer homeData={homeData} footerBg={"footer_background"} />
    </section>
  );
};

export default PropertyAreaPage;
