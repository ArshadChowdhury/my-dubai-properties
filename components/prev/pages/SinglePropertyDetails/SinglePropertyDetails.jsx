import { useEffect, useState } from "react";

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
import Navbar from "@/components/Navbar";

import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";

const SinglePropertyDetails = (props) => {
  const { propertiesData, singleProperty, filterListData } = props;
  const [{ lang }] = useStateValue();
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

  console.log(propertiesData);

  const singlePropertyDetails = singleProperty?.property;

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

        <SinglePropertyHeader header={singlePropertyDetails.images} />
        <div className="my-2 md:my-8"></div>
        <SinglePropertyDescription
          filterListData={filterListData}
          property={singlePropertyDetails}
        />
        <VillaFeatures villa={singlePropertyDetails} />
        <Highlights highlights={singlePropertyDetails.highlights} />
        <PaymentPlan
          mobileView={props.mobileView}
          paymentPlan={singlePropertyDetails.paymentPlan}
        />
        <PhotoGallery images={singlePropertyDetails.images} />
        {/* <PropertyVideo url={singlePropertyDetails.videos[0].path} /> */}
        <Amenities amenities={singlePropertyDetails.amenities} />
        <Nearby nearby={singlePropertyDetails.location} />
        <Downloads />
        <SimilarProperties listView={propertiesData?.data} />
      </div>
      <Footer footerBg={"footer_background"} />
    </>
  );
};

export default SinglePropertyDetails;
