import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FilterSearch2 from "../../FilterSearch2";
import React from "react";
import { useStateValue } from "../../states/StateProvider";
import Skeleton from "../../Skeleton/Skeleton";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { usePathname } from "next/navigation";
import RouteLink from "../../RouteLink";
import FilterSearchInput from "./partials/filterSearch";
import { useQuery } from "@tanstack/react-query";
import HeadingBox from "../../HeadingBox";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import { instance } from "../../services/apiFunctions";

const ViewProperty = (props) => {
  const { filterListData, heading } = props;
  const [{ viewType }] = useStateValue();
  const pathname = usePathname();
  const [{ lang }, dispatch] = useStateValue();
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const propertyTypeId = searchParams.get("propertyTypes");
  const developerId = searchParams.get("developers");
  const completion = searchParams.get("completions");

  const filterParams = {
    propertyAreaId,
    developmentTypeId,
    propertyTypeId,
    developerId,
    completion,
  };

  const getAllProperties = async () => {
    const data = await instance
      .get(`/${lang}/properties`, {
        timeout: 5000,
        params: filterParams,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const {
    isLoading: isLoadingPropertiesData,
    data: propertiesData,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["property-list"],
    queryFn: getAllProperties,
  });

  useEffect(() => {
    refetch();
    return () => {
      dispatch({ type: "setFilterValues", item: false });
    };
  }, [
    propertyAreaId,
    developmentTypeId,
    propertyTypeId,
    developerId,
    completion,
  ]);

  if (isLoadingPropertiesData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isError) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="md:hidden">
        <Navbar2 className={` w-full py-5 bg-[#000F1D] z-50 `} type="inline" />
      </div>
      <div className="hidden md:block">
        <Navbar2
          filterListData={filterListData}
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      </div>

      <section className="min-h-screen w-full mt-0 md:mt-4 bg-payment">
        <RouteLink locationName={pathname} />
        <Skeleton className="w-full mt-4 px-5 sticky mb-8">
          <div className="w-full -top-[60px] md:top-0 flex flex-col md:flex-row justify-between px-2 pt-3 pb-1 sticky z-50 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <HeadingBox
              heading={heading}
              className="flex justify-center items-center"
              textPosition="text-center w-full"
            />
            <div className="flex items-center">
              <div className="md:hidden">
                <FilterSearchInput
                  setIsFilterModalOpen={props.setIsFilterModalOpen}
                />
              </div>
              <div className="hidden md:block">
                <FilterSearch2
                  filterParams={filterParams}
                  filterListData={filterListData}
                />
              </div>
            </div>
          </div>

          {viewType === "grid" ? (
            // queryParams={queryParams}
            <GridView
              propertiesData={propertiesData}
              handleShowAll={handleShowAll}
            />
          ) : (
            //  queryParams={queryParams}
            <ListView
              propertiesData={propertiesData}
              handleShowAll={handleShowAll}
            />
          )}
        </Skeleton>
      </section>
      <Footer footerBg={"footer_background"} />
    </>
  );
};

export default ViewProperty;
