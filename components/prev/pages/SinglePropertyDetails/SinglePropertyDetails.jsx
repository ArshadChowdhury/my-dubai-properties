"use client";

import { useEffect, useState } from "react";

import Amenities from "./partials/Amenities";
import Downloads from "./partials/Downloads";
import Highlights from "./partials/Highlights";
import Nearby from "./partials/Nearby";
import PaymentPlan from "./partials/PaymentPlan";
import PhotoGallery from "./partials/PhotoGallery";
import PropertyVideo from "./partials/PropertyVideo";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../services/apiFunctions";
import SinglePropertyDescription from "./partials/SinglePropertyDescription";
import SinglePropertyHeader from "./partials/SinglePropertyHeader";
import VillaFeatures from "./partials/VillaFeatures";
import { useStateValue } from "../../states/StateProvider";
import { motion } from "framer-motion";
import SimilarProperties from "./partials/SimilarProperties";
import Navbar from "@/components/Navbar";
import ContactUsModal from "../ArrangeMeeting/partials/ContactUsModal";
import VerticalLine from "../../VerticalLine";
import LoadingState from "@/components/LoadingState";

import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";

const SinglePropertyDetails = () => {
  const [nav, setNav] = useState(true);
  const [{ lang, showModal }] = useStateValue();
  const pathname = usePathname();
  const propertiesUrl = pathname.split("/");
  const propertyId = propertiesUrl[propertiesUrl.length - 1];

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
      .then((data) => data.data.data);
    return data;
  };

  const getAllProperties = async () => {
    const data = await instance
      .get(`/${lang}/properties`, {
        timeout: 5000,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const getSingleProperty = async () => {
    const data = await instance
      .get(`/${lang}/properties/${propertyId}`, {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

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
    isLoading,
    data: singleProperty,
    isError,
    refetch: singlePropertyRefetch,
  } = useQuery({
    queryKey: ["single-property-details", propertyId],
    queryFn: getSingleProperty,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError: isPropertiesError,
    refetch: refetchPropertiesData,
  } = useQuery({
    queryKey: ["property-list"],
    queryFn: getAllProperties,
    refetchOnWindowFocus: false,
  });

  const {
    isLoading: filterDataLoading,
    refetch: filterDataRefetch,
    data: filterListData,
  } = useQuery({
    queryKey: ["filter-list"],
    queryFn: getAllFilter,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && window.innerWidth < 768) {
        setNav(false);
      } else if (window.scrollY > 980) {
        setNav(false);
      } else {
        setNav(true);
      }
    };
    refetch();
    singlePropertyRefetch();
    refetchPropertiesData();
    filterDataRefetch();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lang]);

  if (
    isLoading ||
    isLoadingPropertiesData ||
    isLoadingHomeContent ||
    filterDataLoading
  ) {
    return <LoadingState />;
  }

  if (isError || isPropertiesError || isErrorHomeContent) {
    <p className="h-screen text-xl md:text-4xl flex justify-center items-center text-white">
      Something went wrong...
    </p>;
  }

  const singlePropertyDetails = singleProperty?.property;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* <VerticalLine /> */}
      <ContactUsModal homeData={homeData} />
      <div className="single_background mb-20 z-[10]">
        {/* <div className="md:hidden">
          <Navbar2
            filterListData={filterListData}
            homeData={homeData}
            className={`fixed top-0 left-0 bg-[#000F1D] w-full py-5 z-20`}
            type="inline"
          />
        </div> */}
        {nav ? (
          <Navbar
            homeData={homeData}
            className={`absolute top-0 left-0 w-full py-5 z-50`}
            type="inline"
            filterListData={filterListData}
          />
        ) : (
          <Navbar2
            homeData={homeData}
            filterListData={filterListData}
            className={`fixed top-0 left-0 bg-[#000F1D] w-full py-5 z-50`}
            type="inline"
          />
        )}
        {/* <ContactUsModal homeData={homeData} /> */}
        <SinglePropertyHeader header={singlePropertyDetails?.images} />
        <div className="my-2 md:my-8"></div>
        <SinglePropertyDescription
          propertyId={propertyId}
          homeData={homeData}
          filterListData={filterListData}
          property={singlePropertyDetails}
        />
        <VillaFeatures singleProperty={singleProperty} />
        <Highlights singleProperty={singleProperty} />
        <PaymentPlan
          singleProperty={singleProperty}
          paymentPlan={singlePropertyDetails?.paymentPlan}
        />
        <PhotoGallery singleProperty={singleProperty} />
        <PropertyVideo url={singlePropertyDetails?.videos[0]?.path} />
        <Amenities singleProperty={singleProperty} />
        <Nearby singleProperty={singleProperty} />
        <Downloads singleProperty={singleProperty} />
        <SimilarProperties
          singleProperty={singleProperty}
          listView={propertiesData?.data}
        />
      </div>

      <Footer homeData={homeData} footerBg={"footer_background"} />
    </section>
  );
};

export default SinglePropertyDetails;
