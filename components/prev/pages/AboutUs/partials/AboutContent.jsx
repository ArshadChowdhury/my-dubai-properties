import React from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import HeadingBox from "@/components/prev/HeadingBox";
import HomeHeading from "@/components/prev/HomeHeading";
import Footer from "@/components/prev/Footer";

const AboutUsContent = (props) => {
  const { homeData } = props;
  const aboutData = homeData?.lang?.aboutUs;

  return (
    <>
      <section>
        <Skeleton className="px-6 md:px-12">
          <div className="mt-5 md:mt-10 w-full">
            <div className="w-full md:w-[20%]">
              <HomeHeading
                heading={aboutData?.title1}
                className="!bg-transparent !px-0"
                hidden="hidden"
              />
            </div>
            <div className="md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px] font-extralight">
              <p className="py-3">{aboutData?.p1}</p>
              <p className="py-3">{aboutData?.p2}</p>
              <p className="py-3">{aboutData?.p3}</p>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="w-full md:w-[20%]">
              <HomeHeading
                heading={aboutData?.title2}
                className="!bg-transparent !px-0"
                hidden="hidden"
              />
            </div>

            <ul className="font-extralight mx-[10px] list-disc text-[12px] tracking-[2%] text-white px-[15px] pt-5 leading-[24px] font-montserrat">
              <li>
                <span>{aboutData?.b1}</span>
              </li>
              <li>
                <span>{aboutData?.b2}</span>
              </li>
              <li>
                <span>{aboutData?.b3}</span>
              </li>
              <li>
                <span>{aboutData?.b4}</span>
              </li>
              <li>
                <span>{aboutData?.b5}</span>
              </li>
              <li>
                <span>{aboutData?.b6}</span>
              </li>
            </ul>
          </div>
        </Skeleton>
      </section>
    </>
  );
};
export default AboutUsContent;
