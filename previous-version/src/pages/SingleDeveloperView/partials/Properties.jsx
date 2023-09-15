import React from "react";
import RouteLink from "../../../components/RouteLink";
import Skeleton from "../../../components/Skeleton/Skeleton";
import HeadingBox from "../../../components/HeadingBox";
import FilterSelect from "../../../components/FilterSelect";

const EmmarProperties = (props) => {
  const developerDetails = props.developerDetails;

  return (
    <section className="z-10">
      <Skeleton className="mt-5 md:mt-10 px-5">
        <div className="w-full md:w-[25%] mt-10 md:mt-0">
          <HeadingBox
            heading={developerDetails.name}
            className="!px-0"
            textPosition="text-center"
          />
        </div>

        <div className="pt-5 flex pb-4">
          <div
            className="hidden md:block  rgba-white-10  border border-[#bea04e]  bg-white bg-opacity-20"
            style={{ width: "500px", height: "125px" }}>
            <img
              src={developerDetails.logo}
              alt={developerDetails.name}
              className=""
            />
          </div>
          <div className="text-[15px] font-montserrat text-white md:pl-5">
            <p
              className="pt-3 lg:py-3"
              style={{ "font-weight": "200", "margin-top": "-15px" }}>
              {developerDetails.description}
            </p>
            <div className="mt-6 md:hidden pt-3 lg:p-8 rgba-white-10 w-2/4 m-auto border border-[#bea04e] flex justify-center items-center bg-white bg-opacity-20 ">
              <img
                className="mb-2"
                src={developerDetails.logo}
                alt={developerDetails.name}
              />
            </div>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default EmmarProperties;
