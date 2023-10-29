"use client";

import { useState } from "react";
import footerLogo from "@/public/images/global/footer-logo.png";
import Link from "next/link";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Image from "next/image";

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
    <footer className="mb-14">
      <div className="flex flex-col items-center px-3 lg:px-5 lg:pb-5 relative">
        <Image
          src={footerLogo}
          alt="my dubai logo"
          className="absolute z-10 -top-[63px] md:-top-[75px] w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
        />
        <div
          className={`flex justify-center bg-repeat-x rounded-md w-full h-full relative before:absolute before:left-0 before:border before:w-[34%] md:before:w-[37%] before:rounded-l-md before:border-[#F1BF3F] before:top-0 after:top-0 before:border-r-0 before:h-full after:absolute after:right-0 after:border after:w-[37%] after:rounded-r-md after:border-[#F1BF3F] after:border-l-0 after:h-full`}
        >
          <div className="footer_background_home2 absolute bottom-0 w-full h-full z-[1]"></div>
          <div className="justify-center w-3/4 pt-16 pb-6">
            <div className="md:flex justify-between py-10">
              {uiElements.map((element, idx) => (
                <div key={idx} className="text-white">
                  <div className="flex text-lg justify-between items-center mb-7 md:mb-4 md:font-bold">
                    <h1 className="font-montserrat  md:text-xl uppercase">
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
                  <ul className="hidden md:flex flex-col font-montserrat leading-7">
                    {element.items.map((item, idx) => (
                      <Link
                        className="z-10 hover:text-[#D6BB75]"
                        key={idx}
                        href={"#"}
                      >
                        <li>{item}</li>
                      </Link>
                    ))}
                  </ul>
                  {uiVisibility[idx] && (
                    <ul className="flex flex-col md:hidden font-montserrat leading-7 mb-7">
                      {element.items.map((item, index) => (
                        <li className="z-50" key={index}>
                          <Link
                            className="hover:text-[#D6BB75]"
                            key={idx}
                            href={"#"}
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-[3.5%] z-[10]">
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/privacy-policy"}
          >
            <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
              privacy policy
            </span>
          </Link>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/terms-and-conditions"}
          >
            <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
              terms & conditions
            </span>
          </Link>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/cookie-policy"}
          >
            <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
              cookie policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
