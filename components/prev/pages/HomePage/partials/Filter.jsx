import React, { useEffect, useState } from "react";
import downArrow from "../../../assets/images/global/downArrow.png";
import IconSearch from "@/components/prev/assets/images/global/filterHome.png";
import BtnFilter from "@/components/prev/BtnFilter";
// import BtnSearch from "../../../components/BtnSearch";
import { useStateValue } from "@/components/prev/states/StateProvider";
import Link from "next/link";
import BtnSearch2 from "@/components/prev/BtnSearch2";

const Filter = ({ filterLists }) => {
  const [animate, setAnimate] = useState(false);
  const [{ filterValues, filterOpen }] = useStateValue();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimate((prevAnimate) => !prevAnimate);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const query = Object.entries(filterValues)
    .map(([key, value]) =>
      Array.isArray(value) && value.length > 0
        ? `${key}=${value[0]}`
        : value !== null
        ? `${key}=${value}`
        : null
    )
    .filter((queryPart) => queryPart !== null)
    .join("&");

  return (
    <div className="mr-[90%]">
      <div
        className={`${
          filterOpen
            ? "absolute w-[90%] top-[380px] bg-[#000F1D] z-[100]"
            : "lg:absolute lg:left-[12.5%] xl:left-1/4 w-screen lg:w-[75vw] xl:w-[50vw] bg-[#000F1D] lg:top-[92.5vh] filter-box_shadow z-20"
        } `}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 px-8 md:pl-12 py-4">
          <BtnFilter
            btnText={"All Property Area"}
            btnImage={downArrow}
            cat={"propertyAreas"}
            content={filterLists?.propertyAreas}
            selectedValue={filterValues?.propertyAreas}
          />
          <BtnFilter
            cat={"developers"}
            btnText={"All Dubai Developer"}
            btnImage={downArrow}
            content={filterLists?.developers}
            selectedValue={filterValues?.developers}
          />

          <BtnFilter
            cat={"propertyTypes"}
            btnText={"All Property Type"}
            btnImage={downArrow}
            content={filterLists?.propertyTypes}
            selectedValue={filterValues?.propertyTypes}
          />
          <BtnFilter
            cat={"completions"}
            btnText={"All Completions"}
            btnImage={downArrow}
            content={filterLists?.completions}
            selectedValue={filterValues?.completions}
          />
          <BtnFilter
            cat={"developmentTypes"}
            btnText={"All Development Type"}
            btnImage={downArrow}
            content={filterLists?.developmentTypes}
            selectedValue={filterValues?.developmentTypes}
          />
          <Link href={`/properties?${query}`}>
            <BtnSearch2 btnText="SEARCH" btnImage={IconSearch} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
