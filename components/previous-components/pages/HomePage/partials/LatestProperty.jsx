import React from "react";
// import Skeleton from "../../../components/Skeleton/Skeleton";
import SkeletonSingleProperty from "@/components/previous-components/Skeleton/SkeletonSingleProperty";
import LatestPropertyTop from "./LatestPropertyTop";
import LatestPropertyDown from "./LatestPropertyDown";

const LatestProperty = (props) => {
  const offPlanProperties = [];
  const readyProperties = [];
  {
    props.properties.map((property) =>
      property.developmentType.name === "READY"
        ? readyProperties.push(property)
        : offPlanProperties.push(property)
    );
  }

  return (
    <section className="relative overlay-property-color-3 py-4">
      <SkeletonSingleProperty>
        <p
          className="lg:text-[26px] pt-[3rem]  font-[500] font-expleteusSans text-white text-center tracking-[2%]"
          style={{ fontWeight: "200" }}
        >
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
