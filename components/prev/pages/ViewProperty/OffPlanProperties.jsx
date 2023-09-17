import React, { useEffect, useState } from "react";
import FilterSearch2 from "../../components/FilterSearch2";
import Skeleton from "../../components/Skeleton/Skeleton";
import { useStateValue } from "../../states/StateProvider";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { useLocation, useNavigate } from "react-router-dom";
import RouteLink from "../../components/RouteLink";
import FilterSearchInput from "./partials/filterSearch";
import FilterModal from "./partials/filterModal";
import HeadingBox from "../../components/HeadingBox";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

const OffPlanProperties = (props) => {
  const [{ viewType }] = useStateValue();
  const properties = props.properties;
  const offPlanProperties = properties.filter(
    (property) => property.developmentType.name === "OFF PLAN"
  );

  const navigate = useNavigate();
  const location = useLocation();
  const currentLocation = location.pathname;

  const [isMobileView, setIsMobileView] = useState(true);

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

  {
    offPlanProperties.map((property) =>
      property.developmentType.name === "READY"
        ? properties.push(property)
        : offPlanProperties.push(property)
    );
  }

  const locationName = currentLocation.split("/");
  const productsToShow =
    props.propertyToView === "ready"
      ? properties
      : props.propertyToView == "off-plan"
      ? offPlanProperties
      : properties;

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      {isMobileView ? (
        <Navbar2 className={` w-full py-5 bg-[#000F1D] z-50 `} type="inline" />
      ) : (
        <Navbar2
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      )}

      <section className="min-h-screen w-full mt-0 md:mt-4 bg-payment">
        <RouteLink locationName={locationName} />
        <Skeleton className="w-full mt-4 px-5 sticky mb-8">
          <div
            className="w-full flex flex-col md:flex-row justify-between px-2 pt-3 pb-1 sticky z-50 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]"
            style={{ top: isMobileView ? "-60px" : "80px" }}
          >
            <HeadingBox
              heading={"Off Plan"}
              className="flex justify-center items-center"
              textPosition="text-center w-full"
            />
            <div className="flex items-center">
              {isMobileView ? (
                <FilterSearchInput
                  setIsFilterModalOpen={props?.setIsFilterModalOpen}
                />
              ) : (
                <FilterSearch2 />
              )}
            </div>
          </div>

          {viewType === "grid" ? (
            <GridView handleShowAll={handleShowAll} />
          ) : (
            <ListView handleShowAll={handleShowAll} />
          )}
        </Skeleton>
      </section>
      <Footer footerBg={"footer_background"} />
    </>
  );
};

export default OffPlanProperties;
