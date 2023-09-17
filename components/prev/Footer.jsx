"use client";

import { useState } from "react";
import footerLogo from "@/public/images/global/footer-logo.png";
import Link from "next/link";

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import Image from "next/image";

const Footer = ({ footerBg, home }) => {
  const [uiVisibility, setUIVisibility] = useState({
    whyUs: false,
    offPlanProperties: false,
    featuredProjects: false,
    propertyTypes: false,
    // Add more elements as needed
  });

  const toggleUIVisibility = (element) => {
    setUIVisibility((prevState) => {
      const updatedVisibility = {};

      for (const key in prevState) {
        if (key === element) {
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
      id: "whyUs",
      title: "Why us",
      items: ["About Us", "Contact Us", "Meet The Team"],
    },
    {
      id: "offPlanProperties",
      title: "Off plan properties",
      items: [
        "Emaar Properties",
        "Dubai Properties",
        "Damac Properties",
        "Sobha Group",
        "Nakheel",
        "Meraas",
      ],
    },
    {
      id: "featuredProjects",
      title: "Featured Projects",
      items: [
        "Burj Crown in Downtown Dubai",
        "The Valley EDEN by Emaar",
        "Featured Projects-1",
        "Featured Projects-2",
        "Featured Projects-3",
        "Featured Projects-4",
      ],
    },
    {
      id: "propertyTypes",
      title: "Property Types",
      items: [
        "Dubai Apartments for Sale",
        "Dubai Villas for Sale",
        "Property Types-1",
        "Property Types-2",
        "Property Types-3",
        "Property Types-4",
      ],
    },
    // Add more elements as needed
  ];

  return (
    <footer className="my-20">
      <div
        className="px-3 lg:p-5 flex flex-col items-center relative"
        style={{ zIndex: "20" }}
      >
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
              {uiElements.map((element, idx) => {
                return (
                  <div key={idx} className="text-white">
                    <div className="flex text-lg justify-between items-center  mb-7 md:mb-4 md:font-bold">
                      <h1 className="font-montserrat  md:text-xl uppercase ">
                        {element.title}
                      </h1>
                      <span
                        className="md:hidden z-10"
                        onClick={() => toggleUIVisibility(element.id)}
                      >
                        {uiVisibility[element.id] ? (
                          <AiOutlineMinusCircle />
                        ) : (
                          <AiOutlinePlusCircle />
                        )}
                      </span>
                    </div>
                    <ul className="hidden lg:block font-montserrat leading-7">
                      {element.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {uiVisibility[element.id] && (
                      <ul className=" md:hidden font-montserrat leading-7 mb-7">
                        {element.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-[2.5%]">
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/privacy-policy"}
          >
            privacy policy
          </Link>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/terms-and-conditions"}
          >
            terms & conditions
          </Link>
          <span className="font-montserrat uppercase text-[#D6BB75] text-[10px] mx-2">
            |
          </span>
          <Link
            className="font-montserrat uppercase text-[#D6BB75] text-[10px]"
            href={"/cookie-policy"}
          >
            cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
