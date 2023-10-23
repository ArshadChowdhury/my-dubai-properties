"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useEffect, useState, useRef } from "react";

import SignUpForm from "./partials/SignUpForm";
import PropertyInvestment from "./partials/PropertyInvestment";
import HeroSection from "./partials/HeroSection";
import Filter from "./partials/Filter";
import LatestProperty from "./partials/LatestProperty";
import Payment from "./partials/Payment";
import Navbar from "@/components/Navbar";
import Footer from "../../Footer";
import VerticalLine2 from "../../VerticalLine2";
import LoadingState from "@/components/LoadingState";

const Home = () => {
  const [{ filterOpen, lang }, dispatch] = useStateValue();
  const [allPlaces, setAllPlaces] = useState([]);

  const modalRef = useRef();

  const getAllHomeContent = async () => {
    const data = await instance
      .get(`/${lang}/get-home`, {
        timeout: 5000,
      })
      .then((data) => data?.data?.data);
    return data;
  };

  const getAllProperties = async () => {
    return await instance
      .get(`${lang}/properties`)
      .then((data) => {
        setAllPlaces(data.data.data.properties.data);
        return data.data.data.properties.data;
      })
      .then(getOtherProperties);
  };

  const getOtherProperties = async () => {
    let records = [];
    let page = 1;
    let totalPages = 0;
    do {
      let { data: response } = await instance.get(`${lang}/properties`, {
        params: { page: ++page },
      });
      totalPages = Math.ceil(response.data.properties.count / 6);
      records = records.concat(response.data.properties.data);
      setAllPlaces(records);
    } while (page < totalPages);
    return records;
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
    refetch: refetchHomeContent,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingPropertiesData,
    isError: isErrorPropertiesData,
    refetch: refetchPropertiesData,
  } = useQuery({
    queryKey: ["property-list-all"],
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingFilterData,
    data: filterListData,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    let handle = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        dispatch({ type: "setFilterOpen", item: false });
        // dispatch({ type: "setFilterValues", item: false });
      }
    };
    window.addEventListener("scroll", handle);
    window.addEventListener("mousedown", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("mousedown", handle);
    };
  }, []);

  useEffect(() => {
    refetch();
    refetchHomeContent();
    refetchPropertiesData();
  }, [lang]);

  if (isLoadingHomeContent || isLoadingPropertiesData || isLoadingFilterData) {
    return <LoadingState />;
  }

  if (isErrorHomeContent || isErrorPropertiesData || isError) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const sliders = homeData?.sliders;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <VerticalLine2 />
      <div>
        <Navbar
          homeData={homeData}
          filterListData={filterListData}
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
        />
        <section className="bg-[#000F1D] relative">
          <HeroSection homeData={homeData} sliders={sliders} />
          <div
            ref={modalRef}
            className={`${
              filterOpen
                ? "flex justify-center items-center"
                : "hidden md:block"
            }`}
          >
            <Filter homeData={homeData} filterLists={filterListData} />
          </div>
          <LatestProperty homeData={homeData} allPlaces={allPlaces} />
          <PropertyInvestment homeData={homeData} />
          <Payment homeData={homeData} />
          <SignUpForm homeData={homeData} popup={true} />
        </section>
      </div>
      <div className="relative bg-[#000f1d] z-10">
        <Footer homeData={homeData} home={true} />
      </div>
    </section>
  );
};

export default Home;
