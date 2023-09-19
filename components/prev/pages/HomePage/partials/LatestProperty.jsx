import React from "react";
// import Skeleton from "../../../components/Skeleton/Skeleton";
import LatestPropertyTop from "./LatestPropertyTop";
import LatestPropertyDown from "./LatestPropertyDown";
import SkeletonSingleProperty from "@/components/prev/Skeleton/SkeletonSingleProperty";

const LatestProperty = (props) => {
  const { properties } = props;
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
    <section className="relative overlay-property-color-3 py-4">
      <SkeletonSingleProperty>
        <p className="lg:text-[26px] pt-[3rem] font-medium font-expleteusSans text-white text-center tracking-[2%]">
          Find your next investment opportunity with the latest Off-plan & Ready
          projects in Dubai
        </p>
      </SkeletonSingleProperty>
      <LatestPropertyTop properties={offPlanProperties} />
      <LatestPropertyDown properties={readyProperties} />
    </section>
  );
};

export default LatestProperty;
