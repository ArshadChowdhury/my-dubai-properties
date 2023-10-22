import React, { useState } from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import Button from "@/components/prev/Button";
import iconDownload from "../../../assets/images/global/icon-download-outline.svg";
import HeadingText2 from "./HeadingText2";
import BtnOutline from "@/components/prev/BtnOutline";
import Link from "next/link";
import Image from "next/image";

const Downloads = (props) => {
  const heading = props?.singleProperty?.lang?.propertyDetails?.titleDownloads;
  const brochureLink = props?.singleProperty?.property?.brochure;

  return (
    <section id="downloads" className="mt-16 md:mt-5 mb-5 z-10">
      <SkeletonSingleProperty className="flex-col px-5">
        <div className="items-start w-full md:w-1/4">
          <HeadingText innerText={heading} className="text-center " />
        </div>

        <div className="md:flex gap-10 justify-center w-full md:w-1/2 px-10 md:mx-auto mt-10">
          <div className="w-full p-3 xl:basis-1/2">
            {/* <Button
              btnText="Download Brochure"
              btnImage={iconDownload}
              to="#"
            /> */}
            <Link
              href={brochureLink || "#"}
              target="_blank"
              className="!border-[#283646] h-full flex justify-around items-center button-bg text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase border border-transparent hover:border hover:border-[#283646] rounded-[5px] w-full md:w-[15rem] z-[1] hover:border-transparent outLineBtn"
            >
              Download Brochure
              <div className="w-[25px]">
                <Image src={iconDownload} alt="btn image" />
              </div>
            </Link>
          </div>
          <div className="w-full p-3 xl:basis-1/2">
            <Link
              href={brochureLink || "#"}
              target="_blank"
              className="!border-[#283646] h-full flex justify-around items-center button-bg text-white text-xs md:text-sm font-robotoCondensed py-2 uppercase border border-transparent hover:border hover:border-[#283646] rounded-[5px] w-full md:w-[15rem] z-[1] hover:border-transparent outLineBtn"
            >
              Download Brochure
              <div className="w-[25px]">
                <Image src={iconDownload} alt="btn image" />
              </div>
            </Link>
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Downloads;
