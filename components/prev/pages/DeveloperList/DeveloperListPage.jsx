import React, { useEffect, useState } from "react";
import DevelopersDescription from "./partials/DevelopersDescription";
import DeveloperList from "./partials/DeveloperList";
import DeveloperList2 from "./partials/DeveloperList2";
import { useQuery } from "react-query";
// import { getApiData } from "../../services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";
import Navbar from "../../components/Navbar";
import RouteLink from "../../components/RouteLink";
import { useLocation } from "react-router-dom";
import HeadingBox from "../../components/HeadingBox";

import search from "../../assets/images/global/icon-search.png";
import Skeleton from "../../components/Skeleton/Skeleton";
import FilterSearchInput from "../ViewProperty/partials/filterSearch";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

const DeveloperListPage = (props) => {
  const [{ lang }] = useStateValue();
  const location = useLocation();
  const currentLocation = location.pathname;

  const locationName = currentLocation.split("/");

  // const getDeveloperList = () => {
  //   return getApiData(lang, "developers");
  // };

  // const { isLoading, data, isError, error } = useQuery(
  //   ["developer-list", lang],
  //   getDeveloperList
  // );

  // if (isLoading) {
  //   return "Loading data, please wait";
  // }

  // if (isError) {
  //   return error.message;
  // }

  // const developers = data.data.developers.data;
  // const developersDataLength = data.data.developers.count;

  return (
    <>
      <div className="relative w-full pt-20 md:pt-28 font-montserrat bg-payment mb-40">
        <Navbar2
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
        />
        <RouteLink locationName={locationName} />
        <Skeleton className="px-5">
          <div className="w-full z-50  flex flex-col md:flex-row justify-between items-center sticky pb-2 md:pb-0 px-2 -top-16 md:top-0 mt-5 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <div className="w-full md:w-[25%] py-3">
              <HeadingBox heading="Developers" />
            </div>
            {props.mobileView ? (
              <FilterSearchInput
                setIsFilterModalOpen={props.setIsFilterModalOpen}
              />
            ) : (
              <div className="w-1/4 bg-white bg-opacity-10 rounded-md flex items-center custom-shadow">
                <input
                  type="search"
                  name="search developers"
                  id="search-developers"
                  placeholder="SEARCH"
                  className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
                />
                <button className="px-5">
                  <img src={search} alt="search" className="w-7" />
                </button>
              </div>
            )}
          </div>

          <DevelopersDescription />

          <DeveloperList2
            developers={developers}
            developersDataLength={developersDataLength}
          />
        </Skeleton>
      </div>
      <Footer footerBg={"footer_background"} />
    </>
  );
};

export default DeveloperListPage;
