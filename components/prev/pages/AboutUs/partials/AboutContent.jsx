import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingBox from "../../../components/HeadingBox";
import HomeHeading from "../../../components/HomeHeading";
import Footer from "../../../components/Footer";

const AboutUsContent = () => {
  return (
    <>
      <section>
        <Skeleton className="px-6 md:px-12">
          <div className="mt-5 md:mt-10 w-full">
            <div className="w-full md:w-[20%]">
              <HomeHeading
                heading="Our Story"
                className="!bg-transparent !px-0"
                hidden="hidden"
              />
            </div>
            <div
              style={{ fontWeight: "200" }}
              className="md:mt-5 font-montserrat text-white text-[13.5px] tracking-[2%] leading-[24px]">
              <p className="py-3">
                Property Seekers Properties Dubai is the one-stop portal for
                your investment opportunity. We are the professional brokers
                exclusively working on the investment Projects with the skilled
                community information for Endusers and perfect market statistics
                on ROI for the investors.
              </p>
              <p className="py-3">
                We are officially partnered with top developers around Dubai,
                Some of the biggest and trustworthy off-plan developers are
                EMAAR and MERAAS. As investors, 100% rely on the deliverable of
                their unit from the trusted developers and after 2012 the sales
                of the OFF PLAN Project increased to 70% in Dubai for the
                investments. This suggests you choose the perfect Agent or
                Broker to find the right investment option for you in multiple
                products on the market each time.
              </p>
              <p className="py-3">
                We do the client work for 100% free. As our fees are from the
                developers as we provide you fair advice on your needs and
                preferences.
              </p>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="w-full md:w-[20%]">
              <HomeHeading
                heading="Why us?"
                className="!bg-transparent !px-0"
                hidden="hidden"
              />
            </div>

            <ul
              style={{ fontWeight: "200", marginLeft: "10px" }}
              className="list-disc text-[12px] tracking-[2%] text-white pl-[15px] pt-5 leading-[24px] font-montserrat">
              <li className="">
                <span>
                  Official partner of all developers in Dubai. ROI of community
                  and each project.
                </span>
              </li>
              <li className="">
                <span>Access to full projects in Dubai.</span>
              </li>
              <li className="">
                <span>
                  Early access and Pre-product launch from all developers.
                </span>
              </li>
              <li className="">
                <span>
                  Market statistics and professional service. SOLD projects
                  reports and deliverable reports.
                </span>
              </li>
              <li className="">
                <span>NO COMISSION – NO AGENT FEES – NO PREMIUM.</span>
              </li>
            </ul>
          </div>
        </Skeleton>
      </section>
    </>
  );
};
export default AboutUsContent;
