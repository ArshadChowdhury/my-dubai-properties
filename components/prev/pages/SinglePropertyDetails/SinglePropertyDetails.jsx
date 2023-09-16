import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getApiData } from "../../services/apiFunctions";
import Amenities from "./partials/Amenities";
import Downloads from "./partials/Downloads";
import Highlights from "./partials/Highlights";
import Nearby from "./partials/Nearby";
import PaymentPlan from "./partials/PaymentPlan";
import PhotoGallery from "./partials/PhotoGallery";
import PropertyVideo from "./partials/PropertyVideo";
import SinglePropertyDescription from "./partials/SinglePropertyDescription";
import SinglePropertyHeader from "./partials/SinglePropertyHeader";
import VillaFeatures from "./partials/VillaFeatures";
import { useStateValue } from "../../states/StateProvider";
import { motion } from "framer-motion";
import SimilarProperties from "./partials/SimilarProperties";
import Navbar from "../../components/Navbar";

import { useParams } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

const SinglePropertyDetails = (props) => {
  const [{ lang }] = useStateValue();
  const { propertyId } = useParams();
  const [nav, setNav] = useState(true);
  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang, propertyId]);

  const getSinglePropertyDetails = () => {
    return getApiData(lang, `properties/${propertyId}`);
  };

  const { isLoading, data, isError, error } = useQuery(
    ["single-property-details", lang, propertyId],
    getSinglePropertyDetails
  );

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }
  const singleProperty = data.data.property;

  return (
    <>
      <div className="single_background mb-20">
        {isMobileView ? (
          <Navbar2
            className={`fixed top-0 left-0 bg-[#000F1D] w-full py-5 z-20`}
            type="inline"
          />
        ) : nav ? (
          <Navbar
            className={`absolute top-0 left-0  w-full py-5 z-20`}
            type="inline"
          />
        ) : (
          <Navbar2
            className={`fixed top-0 left-0 bg-[#000F1D] w-full py-5 z-20`}
            type="inline"
          />
        )}

        <SinglePropertyHeader header={singleProperty.images} />
        <div className="my-2 md:my-8"></div>
        <SinglePropertyDescription property={singleProperty} />
        <VillaFeatures villa={singleProperty} />
        <Highlights highlights={singleProperty.highlights} />
        <PaymentPlan
          mobileView={props.mobileView}
          paymentPlan={singleProperty.paymentPlan}
        />
        <PhotoGallery images={singleProperty.images} />
        <PropertyVideo url={singleProperty.videos[0].path} />
        <Amenities amenities={singleProperty.amenities} />
        <Nearby nearby={singleProperty.location} />
        <Downloads />
        <SimilarProperties listVIew={props.allProperties} />
      </div>
      <Footer footerBg={"footer_background"} />
    </>
  );
};

export default SinglePropertyDetails;
