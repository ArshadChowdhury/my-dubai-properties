import React from "react";

import HeadingBox from "@/components/prev/HeadingBox";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HomeHeading from "@/components/prev/HomeHeading";
import HeadingText2 from "../../SinglePropertyDetails/partials/HeadingText2";

const Terms = (props) => {
  const { homeData } = props;
  const termData = homeData?.lang?.termsAndConditions;
  return (
    <section>
      <Skeleton className="px-5">
        <div className="mt-5 md:mt-10 w-full">
          <div className="w-full md:w-[25%]">
            <HomeHeading heading={termData?.title1} />
          </div>

          <div className="md:mt-5 font-montserrat font-extralight text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3">{termData?.p1}</p>
            <p className="py-3">{termData?.p2}</p>
            <p className="py-3">{termData?.p3}</p>
            <p className="py-3">{termData?.p4}</p>
          </div>
        </div>
        <div className="mt-10 w-full flex flex-col justify-center items-center">
          <div className="w-full md:w-[65%] uppercase">
            <HomeHeading heading={termData?.title2} />
          </div>
          <div className="font-extralight w-full md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
            <p className="py-3">{termData?.p5}</p>
            <p className="py-3">{termData?.p6}</p>
            <p className="py-3">{termData?.p7}</p>
            <p className="py-3">{termData?.p8}</p>
            <p className="py-3">{termData?.p9}</p>
            <p className="py-3">{termData?.p10}</p>
            <p className="py-3">{termData?.p11}</p>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default Terms;
