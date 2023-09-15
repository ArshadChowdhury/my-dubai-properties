import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, useLocation } from "react-router-dom";

import { getApiData } from "../../services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";

import SignUpForm from "./partials/SignUpForm";
import PropertyInvestment from "./partials/PropertyInvestment";
import HeroSection from "./partials/HeroSection";
import Navbar from "../../components/Navbar";
import ArrangeMeeting from "../ArrangeMeeting/ArrangeMeeting";
import Filter from "./partials/Filter";
import LatestProperty from "./partials/LatestProperty";
import Payment from "./partials/Payment";
import qs from "qs";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";
import VerticalLine from "../../components/VerticalLine";
import VerticalLine2 from "../../components/VerticalLine2";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = (props) => {
  const [{ lang }] = useStateValue();
  const [{ filterValues, filterOpen }, dispatch] = useStateValue();
  const [params, setParams] = useState({});
  const [subsPopUp, setSubsPopUp] = useState(true);

  const handleScroll = () => {
    if (filterOpen) {
      dispatch({ type: "setFilterOpen", item: false });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      dispatch({ type: "setFilterValues", item: false });
    };
  }, []);

  const query = "";

  const getFilterList = () => {
    return getApiData(lang, "data/filter-list", params);
  };

  const changeQuery = (query) => {
    dispatch({ type: "setQuery", item: query });
  };

  const {
    isLoading: isLoadingFilterList,
    data: filterListData,
    isError: isErrorFilterList,
    error: filterListError,
  } = useQuery(["data/filter-list", lang], getFilterList);

  // const getAllHomeContent = () => {
  //   return getApiData(lang, "get-home", query);
  // };

  const getAllHomeContent = () => {
    const apiUrl = `get-home?${query}`;
    return getApiData(lang, apiUrl);
  };

  const {
    isLoading: isLoadingHomeContent,
    data: homeContentData,
    isError: isErrorHomeContent,
    error: homeContentError,
  } = useQuery(["get-home", lang, query], getAllHomeContent);

  if (isLoadingHomeContent) {
    return "Loading...Please wait...";
  }

  if (isErrorHomeContent) {
    return error.message;
  }
  const sliders = homeContentData?.data?.sliders;
  const filterData = filterListData?.data;

  console.log(`Home is runing...`);

  return (
    <>
      <VerticalLine2 />
      <div>
        <Navbar
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
        />
        <section className="bg-[#000F1D] relative">
          <HeroSection sliders={sliders} />
          <div
            className={` ${
              filterOpen ? "flex justify-center items-center" : "hidden"
            }  md:block`}
          >
            <Filter filterLists={filterData} />
          </div>
          <LatestProperty properties={props.properties} />
          <PropertyInvestment />
          <Payment />
          <SignUpForm popup={true} />
        </section>
      </div>

      <div className="-mt-6 relative bg-[#000f1d]">
        <Footer home={true} />
      </div>
    </>
  );
};

export default Home;
