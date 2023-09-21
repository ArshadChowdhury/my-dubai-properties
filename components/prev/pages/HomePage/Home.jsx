"use client";

import { useQuery } from "@tanstack/react-query";
import { instance } from "@/components/prev/services/apiFunctions";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useEffect } from "react";

import SignUpForm from "./partials/SignUpForm";
import PropertyInvestment from "./partials/PropertyInvestment";
import HeroSection from "./partials/HeroSection";
import Filter from "./partials/Filter";
import LatestProperty from "./partials/LatestProperty";
import Payment from "./partials/Payment";
import Navbar from "@/components/Navbar";
import Footer from "../../Footer";
import VerticalLine2 from "../../VerticalLine2";

const Home = () => {
  const [{ filterOpen, lang }, dispatch] = useStateValue();

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
      })
      .then((data) => data?.data?.data?.properties);
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

  const handleScroll = () => {
    dispatch({ type: "setFilterOpen", item: false });
  };

  const {
    isLoading: isLoadingHomeContent,
    data: homeData,
    isError: isErrorHomeContent,
    refetch,
  } = useQuery({
    queryKey: ["get-home"],
    queryFn: getAllHomeContent,
  });

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError: isErrorPropertiesData,
  } = useQuery({
    queryKey: ["property-list"],
    queryFn: getAllProperties,
  });

  const { isLoading: isLoadingFilterData, data: filterListData } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    refetch();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      dispatch({ type: "setFilterOpen", item: false });
    };
  }, [lang]);

  if (isLoadingHomeContent || isLoadingPropertiesData || isLoadingFilterData) {
    return (
      <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorHomeContent || isErrorPropertiesData) {
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
            className={`${
              filterOpen
                ? "flex justify-center items-center"
                : "hidden md:block"
            }`}
          >
            <Filter homeData={homeData} filterLists={filterListData} />
          </div>
          <LatestProperty homeData={homeData} properties={propertiesData} />
          <PropertyInvestment homeData={homeData} />
          <Payment homeData={homeData} />
          <SignUpForm homeData={homeData} popup={true} />
        </section>
      </div>
      <div className="-mt-6 relative bg-[#000f1d]">
        <Footer homeData={homeData} home={true} />
      </div>
    </section>
  );
};

export default Home;
