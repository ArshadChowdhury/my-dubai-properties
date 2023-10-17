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
import Link from "next/link";

const SinglePropertyDescription = (props) => {
  const [btnHoverEffect, setBtnHoverEffect] = useState(false);
  const [{ lang }] = useStateValue();

  const propertyDetails = props?.property;
  const homeData = props?.homeData?.lang?.propertyDetails;
  const developerRoute = propertyDetails?.developerType?.id;
  const propertyAreaRoute = propertyDetails?.propertyArea?.id;
  const brochureLink = propertyDetails?.brochure;

  const propertyDescription =
    propertyDetails?.propertyDescription?.split("\r\n\r\n");

  return (
    <section className="scroll-smooth mx-3">
      <SkeletonSingleProperty className="relative flex-col md:flex-row h-auto z-0">
        <div className="xl:basis-[75%] xl:pr-8 text-justify lg:text-left">
          <h1
            className={`font-robotoCondensed font-medium text-white text-[30px] mx-2 ${
              lang === "en" ? "" : "text-right"
            }`}
          >
            {propertyDetails?.propertyName}
          </h1>
          <div className="flex gap-4 items-center mx-2">
            <Link
              href={`/property-area/${propertyAreaRoute}`}
              className="flex gap-2 font-montserrat text-white text-[12px] leading-4 items-center my-2 hover:text-[#ffd15f]"
            >
              <Image src={iconLocationBlack} alt="Location" />{" "}
              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                {propertyDetails?.propertyArea?.areaName}
              </span>
            </Link>
            <Link
              href={`/developers/${developerRoute}`}
              className="flex gap-2 font-montserrat text-white text-[12px] leading-4 items-center my-2 hover:text-[#ffd15f]"
            >
              <Image src={iconBuilding} alt="building" />
              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                {propertyDetails?.developerType?.name}
              </span>
            </Link>
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
                {/* <Button
                  to="#"
                  btnText={homeData?.titleDownloads}
                  btnImage={iconDownload}
                  btnClass={btnHoverEffect ? "?bg-none" : ""}
                /> */}
                <Link
                  href={brochureLink || "#"}
                  target="_blank"
                  className="!border-[#283646] h-full flex justify-around items-center button-bg text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase border border-transparent hover:border hover:border-[#283646] rounded-[5px] w-full md:w-[15rem] z-[1] hover:border-transparent outLineBtn"
                >
                  {/* {homeData?.titleDownloads} */} Download Brochure
                  <div className="w-[25px]">
                    <Image src={iconDownload} alt="btn image" />
                  </div>
                </Link>
              </div>
              <div className="xl:pl-4 pt-3">
                <Link
                  href={"#nearby"}
                  className="border border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem] h-full flex justify-around items-center outLineBtn text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase"
                >
                  {homeData?.titleNearbyAttractions}
                  <div className="w-[25px]">
                    <Image src={iconLocation} alt="btn image" />
                  </div>
                </Link>

                {/* <BtnOutline
                  btnText={homeData?.titleNearbyAttractions}
                  btnImage={iconLocation}
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                /> */}
              </div>
            </div>
            <div className="md:flex justify-evenly">
              <div className="xl:pl-16 pt-5">
                <Link
                  href={`/map?propertyId=${props?.propertyId}`}
                  className="border border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem] h-full flex justify-around items-center outLineBtn text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase"
                >
                  {homeData?.titleDownloads}
                  <div className="w-[25px]">
                    <Image src={iconDownload} alt="btn image" />
                  </div>
                </Link>
                {/* <BtnOutline
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                  btnText={homeData?.titleDownloads}
                  btnImage={iconDownload}
                /> */}
              </div>
              <div className="xl:pr-16 pt-5">
                <Link
                  href={"#photogallery"}
                  className="border border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem] h-full flex justify-around items-center outLineBtn text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase"
                >
                  {homeData?.titleGallery}
                  <div className="w-[25px]">
                    <Image src={iconFilm} alt="btn image" />
                  </div>
                </Link>
                {/* <BtnOutline
                  btnText={homeData?.titleGallery}
                  btnImage={iconFilm}
                  onMouseEnterEvent={setBtnHoverEffect}
                  onMouseLeaveEvent={setBtnHoverEffect}
                /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="xl:basis-[24.7%] z-10 mt-10 md:mt-0 px-3 md:px-0 md:mr-3">
          <RegisterForm
            propertyId={props?.propertyId}
            homeData={props?.homeData}
            propertyName={propertyDetails?.propertyName}
          />
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default SinglePropertyDescription;
