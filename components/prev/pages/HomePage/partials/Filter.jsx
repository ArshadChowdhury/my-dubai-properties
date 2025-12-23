import React, { useEffect, useState } from "react";
import downArrow from "../../../assets/images/global/downArrow.png";
import IconSearch from "@/components/prev/assets/images/global/filterHome.png";
import BtnFilter from "@/components/prev/BtnFilter";
// import BtnSearch from "../../../components/BtnSearch";
import { useStateValue } from "@/components/prev/states/StateProvider";
import Link from "next/link";
import BtnSearch2 from "@/components/prev/BtnSearch2";

export const filterLists = {
  propertyAreas: [
    { id: 1, name: "Dubai Marina", value: "dubai-marina" },
    { id: 2, name: "Downtown Dubai", value: "downtown-dubai" },
    { id: 3, name: "Palm Jumeirah", value: "palm-jumeirah" },
    { id: 4, name: "Business Bay", value: "business-bay" },
    { id: 5, name: "Jumeirah Village Circle", value: "jvc" },
  ],
  developers: [
    { id: 1, name: "Emaar Properties", value: "emaar" },
    { id: 2, name: "DAMAC Properties", value: "damac" },
    { id: 3, name: "Nakheel", value: "nakheel" },
    { id: 4, name: "Sobha Realty", value: "sobha" },
    { id: 5, name: "Dubai Properties", value: "dubai-properties" },
  ],
  propertyTypes: [
    { id: 1, name: "Apartment", value: "apartment" },
    { id: 2, name: "Villa", value: "villa" },
    { id: 3, name: "Townhouse", value: "townhouse" },
    { id: 4, name: "Penthouse", value: "penthouse" },
  ],
  completions: [
    { id: 1, name: "Off-Plan", value: "off-plan" },
    { id: 2, name: "Ready to Move", value: "ready" },
    { id: 3, name: "Under Construction", value: "under-construction" },
  ],
  developmentTypes: [
    { id: 1, name: "Residential", value: "residential" },
    { id: 2, name: "Commercial", value: "commercial" },
    { id: 3, name: "Mixed Use", value: "mixed-use" },
  ]
};

export const filterTexts = {
  textBoxPropertyArea: "Select Area",
  textBoxDubaiDeveloper: "Select Developer",
  textBoxPropertyType: "Property Type",
  textBoxCompletion: "Completion Status",
  textBoxDevelopmentType: "Development Type",
  buttonSearch: "Search Properties"
};

// Default empty values for state initialization
export const initialFilterValues = {
  propertyAreas: "",
  developers: "",
  propertyTypes: "",
  completions: "",
  developmentTypes: ""
};

const Filter = ({ homeData, modalRef }) => {
  // const [animate, setAnimate] = useState(false);
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
            ? "middle-screen-component"
            : "lg:absolute lg:left-[12.5%] xl:left-1/4 w-screen lg:w-[75vw] xl:w-[50vw] bg-[#000F1D] lg:top-[92.5vh] filter-box_shadow z-20"
        } `}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 px-8 md:pl-12 py-4">
          <BtnFilter
            cat={"propertyAreas"}
            btnText={filterTexts?.textBoxPropertyArea}
            btnImage={downArrow}
            content={filterLists?.propertyAreas}
            selectedValue={filterValues?.propertyAreas}
          />
          <BtnFilter
            cat={"developers"}
            btnText={filterTexts?.textBoxDubaiDeveloper}
            btnImage={downArrow}
            content={filterLists?.developers}
            selectedValue={filterValues?.developers}
          />

          <BtnFilter
            cat={"propertyTypes"}
            btnText={filterTexts?.textBoxPropertyType}
            btnImage={downArrow}
            content={filterLists?.propertyTypes}
            selectedValue={filterValues?.propertyTypes}
          />
          <BtnFilter
            cat={"completions"}
            btnText={filterTexts?.textBoxCompletion}
            btnImage={downArrow}
            content={filterLists?.completions}
            selectedValue={filterValues?.completions}
          />
          <BtnFilter
            cat={"developmentTypes"}
            btnText={filterTexts?.textBoxDevelopmentType}
            btnImage={downArrow}
            content={filterLists?.developmentTypes}
            selectedValue={filterValues?.developmentTypes}
          />
          <Link href={`/properties?${query}`}>
            <BtnSearch2
              btnText={filterTexts?.buttonSearch}
              btnImage={IconSearch}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
