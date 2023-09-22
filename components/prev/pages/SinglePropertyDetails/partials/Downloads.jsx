import React, { useState } from "react";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";
import HeadingText from "./HeadingText";
import Button from "@/components/prev/Button";
import iconDownload from "../../../assets/images/global/icon-download-outline.svg";
import HeadingText2 from "./HeadingText2";
import BtnOutline from "@/components/prev/BtnOutline";

const Downloads = (props) => {
  const heading = props?.singleProperty?.lang?.propertyDetails?.titleDownloads;
  const [btnHoverEffect, setBtnHoverEffect] = useState(false);
  return (
    <section className="mt-16 md:mt-5  mb-5 z-10">
      <SkeletonSingleProperty className="flex-col px-5">
        <div className="items-start w-full md:w-1/4 ml-2 pr-2">
          <HeadingText innerText={heading} className="text-center " />
        </div>

        <div className="md:flex justify-center w-full md:w-1/2 px-10 md:mx-auto mt-10 z-10">
          <div className="w-full  py-3 xl:basis-1/2 mr-10">
            <Button
              btnText="Download Brochure"
              btnImage={iconDownload}
              btnClass={btnHoverEffect ? "?bg-none" : ""}
              to="#"
            />
          </div>
          <div className="w-full py-3 xl:basis-1/2 ">
            <BtnOutline
              btnText="Download Brochure"
              btnImage={iconDownload}
              onMouseEnterEvent={setBtnHoverEffect}
            />
          </div>
        </div>
      </SkeletonSingleProperty>
    </section>
  );
};

export default Downloads;
