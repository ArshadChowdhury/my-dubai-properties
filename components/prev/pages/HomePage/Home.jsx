import React, { useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { useNavigate, useLocation } from "react-router-dom";

import { getApiData } from "../../services/apiFunctions";

import SignUpForm from "./partials/SignUpForm";
import PropertyInvestment from "./partials/PropertyInvestment";
import HeroSection from "./partials/HeroSection";
import ArrangeMeeting from "../ArrangeMeeting/ArrangeMeeting";
import Filter from "./partials/Filter";
import LatestProperty from "./partials/LatestProperty";
import Payment from "./partials/Payment";
import qs from "qs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import VerticalLine2 from "../../VerticalLine2";
import { useStateValue } from "@/states/StateProvider";
import { instance } from "../../services/apiFunctions";

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

  const getFilterData = async () => {
    const data = await instance
      .get("/en/data/filter-list", {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const changeQuery = (query) => {
    dispatch({ type: "setQuery", item: query });
  };

  // const {
  //   isLoading: isLoadingFilterList,
  //   data: filterListData,
  //   isError: isErrorFilterList,
  //   error: filterListError,
  // } = useQuery(["data/filter-list", lang], getFilterList);

  // // const getAllHomeContent = () => {
  // //   return getApiData(lang, "get-home", query);
  // // };

  // // const getAllHomeContent = () => {
  // //   const apiUrl = `get-home?${query}`;
  // //   return getApiData(lang, apiUrl);
  // // };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["filter-list", lang],
    queryFn: getFilterData,
  });

  if (isLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center text-bold bg-brand text-white text-4xl">
        Loading...Please wait...
      </div>
    );
  }

  if (isError) {
    return error.message;
  }

  console.log(data);

  // const sliders = homeContentData?.data?.sliders;
  // const filterData = filterListData?.data;

  console.log(`Home is runing...`);

  return (
    <>
      <h1>Hey</h1>
      {/* <VerticalLine2 />
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
      </div> */}
    </>
  );
};

export default Home;
