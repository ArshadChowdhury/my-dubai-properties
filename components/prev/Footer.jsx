"use client";

import { useState } from "react";
import footerLogo from "@/public/images/global/footer-logo.png";
import Link from "next/link";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Image from "next/image";

function camalize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

const Footer = ({ footerBg, home, homeData }) => {
  const homeDatas = homeData?.lang?.footer;
  const [uiVisibility, setUIVisibility] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const toggleUIVisibility = (index) => {
    setUIVisibility((prevState) => {
      const updatedVisibility = {};

      for (const key in prevState) {
        if (key == index) {
          updatedVisibility[key] = !prevState[key];
        } else {
          updatedVisibility[key] = false;
        }
      }
      return updatedVisibility;
    });
  };

  // const toggleUIVisibility = (element) => {
  //   const camelCaseId = camalize(element.id);

  //   setUIVisibility((prevState) => {
  //     const updatedVisibility = {};

  //     for (const key in prevState) {
  //       if (key === camelCaseId) {
  //         updatedVisibility[key] = !prevState[key];
  //       } else {
  //         updatedVisibility[key] = false;
  //       }
  //     }
  //     return updatedVisibility;
  //   });
  // };

  const uiElements = [
    {
      id: homeDatas?.whyUs,
      title: homeDatas?.whyUs,
      items: [homeDatas?.aboutUs, homeDatas?.contactUs],
    },
    {
      id: homeDatas?.developers,
      title: homeDatas?.developers,
      items: [
        homeDatas?.emaar,
        homeDatas?.damac,
        homeDatas?.nakheel,
        homeDatas?.meraas,
      ],
    },
    {
      id: homeDatas?.propertiesForSale,
      title: homeDatas?.propertiesForSale,
      items: [
        homeDatas?.villa,
        homeDatas?.appartment,
        homeDatas?.hotel,
        homeDatas?.readyVilla,
      ],
    },
    {
      id: homeDatas?.featuredProjects,
      title: homeDatas?.featuredProjects,
      items: [
        homeDatas?.featuredProject1,
        homeDatas?.featuredProject2,
        homeDatas?.featuredProject3,
        homeDatas?.featuredProject4,
        homeDatas?.featuredProject5,
      ],
    },
  ];

  return (
    <footer className="pb-20">
      <div className="flex flex-col items-center px-3 lg:p-5 relative z-20">
        <Image
          src={footerLogo}
          alt="my dubai logo"
          className="absolute -top-[63px] md:-top-[75px] z-10 w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />
        <div
          className={`flex justify-center  bg-repeat-x rounded-md w-full h-full relative before:absolute before:left-0 before:border before:w-[34%] md:before:w-[37%] before:rounded-l-md before:border-[#F1BF3F] before:top-0 after:top-0 before:border-r-0 before:h-full after:absolute after:right-0 after:border after:w-[37%] after:rounded-r-md after:border-[#F1BF3F] after:border-l-0 after:h-full`}
        >
          <div className="footer_background_home2 absolute bottom-0 w-full h-full"></div>
          <div className="justify-center w-3/4 pt-16 pb-6">
            <div className="md:flex justify-between py-10">
              {uiElements.map((element, idx) => (
                <div key={idx} className="text-white">
                  <div className="flex text-lg justify-between items-center  mb-7 md:mb-4 md:font-bold">
                    <h1 className="font-montserrat  md:text-xl uppercase ">
                      {element.title}
                    </h1>
                    <span
                      className="md:hidden z-10"
                      onClick={() => toggleUIVisibility(idx)}
                    >
                      {uiVisibility[idx] ? (
                        <AiOutlineMinusCircle />
                      ) : (
                        <AiOutlinePlusCircle />
                      )}
                    </span>
                  </div>
                  <ul className="hidden lg:block font-montserrat leading-7">
                    {element.items.map((item, idx) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {uiVisibility[idx] && (
                    <ul className="md:hidden font-montserrat leading-7 mb-7">
                      {element.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
