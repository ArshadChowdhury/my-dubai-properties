import React, { useEffect, useState } from "react";
import downArrow from "../../../assets/images/global/downArrow.png";
import IconSearch from "../../../assets/images/global/filterHome.png";
import BtnFilter from "../../../components/BtnFilter";
import BtnSearch from "../../../components/BtnSearch";
import { useStateValue } from "../../../states/StateProvider";
import { Link } from "react-router-dom";
import BtnSearch2 from "../../../components/BtnSearch2";

const Filter = ({ filterLists }) => {
  const [animate, setAnimate] = useState(false);
  const [{ filterValues, filterOpen }] = useStateValue();
  const [isMobileView, setIsMobileView] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimate((prevAnimate) => !prevAnimate);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const queryStringArray = Object.entries(filterValues)
    .map(([key, value]) => {
      if (Array.isArray(value) && value.length > 0) {
        return `${key}=${value[0]}`;
      } else if (value !== null) {
        return `${key}=${value}`;
      }
      return null;
    })
    .filter((queryPart) => queryPart !== null);

  const query = queryStringArray.join("&");

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ marginRight: "90%" }}>
      <div
        className={`${
          filterOpen
            ? "absolute w-[90%] top-[380px] bg-[#000F1D] z-20"
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
          <Link to={`/properties?${query}`}>
            <BtnSearch2 btnText="SEARCH" btnImage={IconSearch} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filter;
