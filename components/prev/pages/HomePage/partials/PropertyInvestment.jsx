import React from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHome from "@/components/prev/BtnHome";
import offplanImage from "../../../assets/images/home/investment-offplan.png";
import readyImage from "../../../assets/images/home/investment-ready.png";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

const PropertyInvestment = () => {
  const handleClick = () => {};
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
  return (
    <section
      style={{ zIndex: "10" }}
      className=" border-top-bottom md:py-5 pt-10 md:pt-0 pb-20 relative bg-[#000f1d]"
    >
      <div className="footer_background_home2 absolute top-0 w-full h-full"></div>
      <Skeleton>
        <div
          className="w-full md:flex justify-center items-center"
          style={{ zIndex: "10", marginBottom: "-20px" }}
        >
          <div className="md:basis-[65%] md:py-10">
            <h1 className="text-white font-expleteusSans text-2xl md:text-3xl mb-3 px-5">
              Which property investment is right for you?
            </h1>
            <p className="text-white  px-5 font-montserrat font-extralight">
              Discover the best off-plan & ready projects in Dubai and secure
              your dream home today
            </p>
            <div
              className="p-5 lg:px-32 py-24  bg-fit bg-center bg-no-repeat transition-all duration-500  my-5 rounded-md relative overflow-hidden"
              style={{
                height: isMobileView ? "314px" : "",
              }}
            >
              <div className="absolute rounded-md bg-investment bg-fit bg-center bg-no-repeat scale-110 hover:scale-100 transition-all duration-500  top-0 left-0 w-full h-full overflow-hidden cursor-pointer"></div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

              <div
                className="relative p-5 bg-black bg-opacity-60 rounded-md w-full h-full"
                style={{
                  height: isMobileView ? "210px" : "",
                  marginTop: isMobileView ? "10px" : "",
                }}
              >
                <h1 className="uppercase text-[#D4B970] text-sm font-roboto">
                  THE PREMIER LUXURY PROPERTY DEVELOPER IN DUBAI
                </h1>
                <p className="font-montserrat text-xs text-white my-5 text-justify">
                  DAMAC Properties has been shaping the Middle East’s luxury
                  real estate market since 2002, delivering iconic residential,
                  commercial and leisure properties for sale in Dubai, across
                  the region and beyond.
                </p>
                <BtnHome
                  onClick={handleClick}
                  btnText="GET IN TOUCH WITH OUR PROPERTY EXPERTS"
                />
              </div>
            </div>
          </div>
          <div className="md:basis-[35%] flex md:flex-col justify-between md:items-center md:justify-center gap-5 md:gap-0 items-center md:h-full md:p-5 pt-16 md:pt-0 px-5">
            <div className="text-center flex flex-col justify-start md:justify-center md:items-center md:mb-4">
              <h1 className="uppercase font-montserrat text-lg mb-5 text-white">
                off-plan
              </h1>
              <div className="border border-white hover:border-[#DBA318] border-dashed p-7">
                <Image
                  src={offplanImage}
                  alt="off plan image"
                  className="w-32 aspect-square"
                />
              </div>
            </div>
            <div className="text-center flex flex-col justify-end md:justify-center md:items-center">
              <h1 className="uppercase font-montserrat text-lg mb-5 text-white">
                ready
              </h1>
              <div className="border border-white hover:border-[#DBA318] border-dashed p-7">
                <Image
                  src={readyImage}
                  alt="off plan image"
                  className="w-32 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default PropertyInvestment;
