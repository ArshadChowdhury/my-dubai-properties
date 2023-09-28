import React from "react";
// import Skeleton from "../../../components/Skeleton/Skeleton";
import LatestPropertyTop from "./LatestPropertyTop";
import LatestPropertyDown from "./LatestPropertyDown";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";

const LatestProperty = (props) => {
  const { properties, homeData } = props;
  const offPlanProperties = [];
  const readyProperties = [];
  {
    properties?.data?.map((property) =>
      property.developmentType.name === "READY"
        ? readyProperties.push(property)
        : offPlanProperties.push(property)
    );
  }

  return (
    <section className="relative overlay-property-color-3 py-6 my-8">
      <SkeletonSingleProperty>
        <p className="lg:text-[26px] px-4 py-[3rem] font-medium font-expleteusSans text-white text-center tracking-[2%]">
          {homeData?.lang?.slider?.textCopy}
        </p>
      </SkeletonSingleProperty>
      <LatestPropertyTop homeData={homeData} properties={offPlanProperties} />
      <LatestPropertyDown homeData={homeData} properties={readyProperties} />
    </section>
  );
};

export default LatestProperty;
