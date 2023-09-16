import React, { useState, useEffect } from "react";
import Link from "next/link";

import investment from "./prev/assets/images/global/investment.png";
import SkeletonSingleProperty from "./prev/Skeleton/SkeletonSingleProperty";
import helpLine from "./prev/assets/images/global/help-circle-outline.png";
import developerIcon from "./prev/assets/images/global/construct.png";
import home from "./prev/assets/images/global/home.png";
import camera from "./prev/assets/images/global/camera-sharp.png";
import offer from "./prev/assets/images/global/pricetag-outline.png";
import { getApiData } from "./prev/services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import { useStateValue } from "@/states/StateProvider";

import calender from "./prev/assets/images/global/calendar-outline.svg";
import Image from "next/image";

const Dropdown = (props) => {
  const [{ lang, propertyToView }, dispatch] = useStateValue();
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

  const getDeveloperList = () => {
    return getApiData(lang, "developers");
  };
  const switchPropertyToView = (toView) => {
    dispatch({ type: "setPropertyToView", item: toView });
  };

  const { isLoading, isError, error, data } = useQuery(
    ["developer-list"],
    getDeveloperList
  );

  if (isLoading) {
    return "Loading... PLease Wait";
  }

  if (isError) {
    return error.message;
  }
  const developers = data.data.developers.data;

  const handleArrangeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: true });
  };

  return (
    <div className="font-extralight text-[#ffff] font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
      <div
        style={{ marginTop: isMobileView ? "68px" : "0px" }}
        className={` w-full h-full ${
          props.isMobileView ? "" : "dropdown_background"
        }`}
      >
        <SkeletonSingleProperty className="w-full !pb-0">
          <div className="pl-5 flex flex-col gap-5 justify-center md:grid grid-cols-2 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <span>
                  <Image src={helpLine} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    Why Us
                  </h2>
                  <ul className="text-[10.5px]">
                    <li className="uppercase leading-[15.3px]">
                      <Link href="/about">about us</Link>
                    </li>
                    <li className="uppercase leading-[15.3px]">
                      <Link href="/contact-with-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <span>
                  <Image src={developerIcon} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    DEVELOPERS
                  </h2>
                  <ul className="text-[10.5px]">
                    {developers.map((developer) => (
                      <Link
                        href={`/single-developer-view/${developer._id}`}
                        key={developer._id}
                      >
                        <li className="uppercase leading-[15.3px]">
                          {developer.name}
                        </li>
                      </Link>
                    ))}
                    <Link
                      href={"/developer-list"}
                      className="uppercase leading-[15.3px]"
                    >
                      ALL DEVELOPERS
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={home} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    PROJECTS
                  </h2>
                  <ul className="text-[10.5px]">
                    <Link href="/properties/ready">
                      <li className="uppercase leading-[15.3px]">READY</li>
                    </Link>
                    <Link href="/properties/off-plan">
                      <li className="uppercase leading-[15.3px]">OFF PLAN</li>
                    </Link>
                    <Link href="/properties">
                      <li className="uppercase leading-[15.3px]">
                        ALL PROJECTS
                      </li>
                    </Link>
                    <Link href="/properties">
                      <li className="uppercase leading-[15.3px]">
                        FLOOR PLANS
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={offer} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    OFFERS
                  </h2>
                </div>
              </div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={camera} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    3D Tour
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SkeletonSingleProperty>
        <div
          className="flex justify-center items-center"
          style={{ marginTop: "220px" }}
        >
          <button
            className="md:hidden border-t hex-btn-outline  text-white relative p-2  w-3/4 flex justify-center items-center"
            onClick={handleArrangeMeeting}
          >
            <h1 className="uppercase font-asul text-white text-lg flex items-center z-30">
              <Image src={calender} alt="calender" className="mr-3" />
              Arrange a Meeting
            </h1>
          </button>
        </div>
      </div>

      {/**right side */}
      <div className="w-full h-full relative hidden md:block">
        <Image src={investment} alt="" className="h-full w-full " />
        <div className="w-full h-full absolute-center px-10 bg-[#171717] bg-opacity-30 rounded-md flex flex-col justify-center p-5">
          <div className="bg-black bg-opacity-70 ml-10 mr-10 px-10 py-6 rounded-lg">
            <p className="text-[12px] font-medium text-[#D4B970] font-roboto leading-[14px]">
              THE PREMIER LUXURY PROPERTY DEVELOPER IN DUBAI
            </p>
            <p className="text-[11px] font-extralight font-montserrat text-white pb-1">
              DAMAC Properties has been shaping the Middle East’s luxury real
              estate market since 2002, delivering iconic residential,
              commercial and leisure properties for sale in Dubai, across the
              region and beyond.
            </p>
            <button className="bg-[#bea04e] rounded-md px-1 py-[1x] w-[70%] border border-1 border-[#bea04e] hover:bg-transparent">
              <span className="text-white py-1 flex justify-center items-center text-[12px] font-normal font-montserrat ">
                GET IN TOUCH WITH OUR PROPERTY EXPERTS
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
