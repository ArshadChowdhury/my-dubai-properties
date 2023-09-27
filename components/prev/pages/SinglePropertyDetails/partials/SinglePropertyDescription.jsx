import React, { useEffect } from "react";
import Button from "@/components/prev/Button";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import iconBuilding from "../../../assets/images/property details page/icon-building.png";
import iconLocationBlack from "../../../assets/images/property details page/icon-locate.png";
import iconDownload from "../../../assets/images/global/icon-download-outline.svg";
import iconLocation from "../../../assets/images/property details page/18-location-pin-outline.gif";
import iconFilm from "../../../assets/images/global/icon-film-outline.svg";
import RegisterForm from "./RegisterForm";
import ButtonOutline from "@/components/prev/ButtonOutline";
import { useState } from "react";
import BtnOutline from "@/components/prev/BtnOutline";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";

const SinglePropertyDescription = (props) => {
  const [btnHoverEffect, setBtnHoverEffect] = useState(false);
  const [{ lang }] = useStateValue();

  const propertyDetails = props?.property;
  const homeData = props?.homeData?.lang?.propertyDetails;

  const propertyDescription =
    propertyDetails?.propertyDescription?.split("\r\n\r\n");

  return (
    <section className="mx-3">
      <SkeletonSingleProperty className="relative flex-col md:flex-row h-auto z-0 ">
        <div className="xl:basis-[75%] xl:pr-8 text-justify lg:text-left">
          <h1
            className={`font-robotoCondensed font-medium text-white text-[30px] mx-2 ${
              lang === "en" ? "" : "text-right"
            }`}
          >
            {propertyDetails?.propertyName}
          </h1>
          <div className="flex gap-4 items-center mx-2">
            <p className="flex gap-2 font-montserrat text-white text-[12px] leading-4 items-center my-2">
              <Image src={iconLocationBlack} alt="Location" className="mr-1" />
              {propertyDetails?.developerType?.name}
            </p>
            <p className="flex gap-2 font-montserrat text-white text-[12px] leading-4 items-center my-2">
              <Image src={iconBuilding} alt="building" className="mr-1" />
              {propertyDetails?.propertyArea?.areaName}
            </p>
          </div>
          {propertyDescription?.map((paragraph, index) => (
            <p
              className={`font-montserrat text-white leading-7 py-2 text-[15px] mx-2 ${
                lang === "en" ? "" : "text-right"
              }`}
              key={`paragraph-${index}`}
              style={{
                fontWeight: "200",
                fontSize: "14px",
                marginLeft: "10px",
              }}
            >
              {paragraph}
            </p>
          ))}

          <div className="relative -bottom-[18%] py-8 px-10 md:px-0">
            <div className="md:flex justify-evenly">
              <div className="xl:pr-4 pt-3">
                <Button
                  to="#"
                  btnText={homeData?.titleDownloads}
                  btnImage={iconDownload}
                  btnClass={btnHoverEffect ? "?bg-none" : ""}
                />
              </div>
              <div className=" xl:pl-4 pt-3 ">
                <BtnOutline
                  btnText={homeData?.titleNearbyAttractions}
                  btnImage={iconLocation}
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                />
              </div>
            </div>
            <div className="md:flex justify-evenly">
              <div className="xl:pl-16 pt-5">
                <BtnOutline
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                  btnText={homeData?.titleDownloads}
                  btnImage={iconDownload}
                />
              </div>
              <div className="xl:pr-16 pt-5">
                <BtnOutline
                  btnText={homeData?.titleGallery}
                  btnImage={iconFilm}
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:basis-[24.7%] z-10 mt-10 md:mt-0 px-3 md:px-0 md:mr-3">
          <RegisterForm
            homeData={props?.homeData}
            propertyName={propertyDetails?.propertyName}
          />
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default SinglePropertyDescription;
