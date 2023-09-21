import React from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import BtnHome from "@/components/prev/BtnHome";
import offplanImage from "../../../assets/images/home/investment-offplan.png";
import readyImage from "../../../assets/images/home/investment-ready.png";
import { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";

const PropertyInvestment = (props) => {
  const homeData = props.homeData.lang.propertySelection;
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
    <section className="z-10 border-top-bottom md:py-5 pt-10 md:pt-0 pb-20 relative bg-[#000f1d]">
      <div className="footer_background_home2 absolute top-0 w-full h-full"></div>
      <Skeleton>
        <div className="z-10 -mb-5 w-full md:flex justify-center items-center">
          <div className="md:basis-[65%] md:py-10">
            <h1 className="text-white font-expleteusSans text-2xl md:text-3xl mb-3 px-5">
              {homeData?.title}
            </h1>
            <p className="text-white  px-5 font-montserrat font-extralight">
              {homeData?.subTitle}
            </p>
            <div className="p-5 lg:px-32 py-24 md:h-[314px] bg-fit bg-center bg-no-repeat transition-all duration-500  my-5 rounded-md relative overflow-hidden">
              <div className="absolute rounded-md bg-investment bg-fit bg-center bg-no-repeat scale-110 hover:scale-100 transition-all duration-500  top-0 left-0 w-full h-full overflow-hidden cursor-pointer"></div>
              {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}

              <div className="relative mt-[10px] md:mt-auto h-full md:h-[210px] p-5 bg-black bg-opacity-60 rounded-md w-full">
                <h1 className="uppercase text-[#D4B970] text-sm font-roboto">
                  {homeData?.insideTitle}
                </h1>
                <p className="font-montserrat text-xs text-white my-5 text-justify">
                  {homeData?.insideSubTitle}
                </p>
                <BtnHome
                  onClick={handleClick}
                  btnText={homeData?.insideButton}
                />
              </div>
            </div>
          </div>
          <div className="md:basis-[35%] flex md:flex-col justify-between md:items-center md:justify-center gap-5 md:gap-0 items-center md:h-full md:p-5 pt-16 md:pt-0 px-5">
            <div className="text-center flex flex-col justify-start md:justify-center md:items-center md:my-4">
              <h1 className="uppercase font-montserrat text-lg mb-5 text-white">
                {homeData?.offPlan}
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
                {homeData?.ready}
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
