import React, { useState } from "react";
import { motion } from "framer-motion";

import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";

import BtnItem from "@/components/previous-components/BtnItem";
import BtnItemOutline from "@/components/previous-components/BtnItemOutline";
import { Link, useNavigate } from "react-router-dom";

const GridItem = (props) => {
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const onMouseEnterHandler = () => {
    props.setIsHovered(true);
    props.setIsHoveredCard(true);
    setIsHoveredCard(true);
  };
  const onMouseLeaveHandler = () => {
    props.setIsHovered(false);
    props.setIsHoveredCard(false);
    setIsHoveredCard(false);
  };
  const navigate = useNavigate();
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  return (
    <div
      // to={`/properties/${props.id}`}

      className={`link  min-w-[75%] md:min-w-[50%] lg:min-w-[33%] md:basis-1/2 lg:basis-1/3 px-1 py-3 overflow-clip ${
        isHoveredCard ? "hovered" : ""
      }`}
    >
      <div
        className={`border border-[#D9D9D9] rounded-lg overflow-clip `}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img
          onClick={() => navigate(`/properties/${props.id}`)}
          width="100%"
          height="100%"
          className="cursor-pointer"
          src={props.coverImage[0].path}
          alt="cover"
        />
        <div className="p-5">
          <h1
            onClick={() => navigate(`/properties/${props.id}`)}
            className="font-roboto text-[16px] text-white cursor-pointer w-fit"
          >
            {props.propertyName}
          </h1>
          <div className="flex flex-wrap w-full">
            <div className="mr-4 text-[11.5px] w-32">
              <p className="font-montserrat text-white  leading-4 flex my-2 pr-3">
                <img src={iconLocation} alt="building" className="mr-1" />
                {props.areaName}
              </p>
            </div>
            <div className="mr-4 text-[11.5px]">
              <p className="font-montserrat text-white  leading-4 flex my-2 pr-3">
                <img src={iconBuilding} alt="building" className="mr-1" />
                {props.developerName}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full text-[11.5px]">
            <div className="mr-4 w-32">
              <p className="font-montserrat text-white  leading-4 flex my-2 pr-3">
                <img src={iconVillas} alt="building" className="mr-1" />
                {props.propertyType}
              </p>
            </div>
            <div className="mr-4">
              <p className="font-montserrat text-white  leading-4 flex my-2 pr-3">
                <img src={iconBed} alt="building" className="mr-1" />
                {props.unitSize}
              </p>
            </div>
          </div>
        </div>
        <div
          className={
            props.type === "home"
              ? "hidden"
              : "flex px-5 py-2 border-t-0 md:border-t justify-between bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]"
          }
        >
          <BtnItem
            btnText="Details"
            className="mr-2 basis-1/2"
            to={`/properties/${props.id}`}
            navigate={`/properties/${props.id}`}
          />
          <BtnItemOutline
            to={`/contact-with-us`}
            navigate={`/contact-with-us`}
            btnText="Enquiry"
            className="ml-2 basis-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default GridItem;
