import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FilterSearch2 from "../../FilterSearch2";
import { useStateValue } from "../../states/StateProvider";
import Skeleton from "../../Skeleton/Skeleton";
import GridView from "../GridView/GridView";
import ListView from "../ListView/ListView";
import { usePathname } from "next/navigation";
import RouteLink from "../../RouteLink";
import FilterSearchInput from "./partials/filterSearch";
import { useQuery } from "@tanstack/react-query";
import FilterModal from "./partials/filterModal";
import HeadingBox from "../../HeadingBox";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import { instance } from "../../services/apiFunctions";

const ViewProperty = (props) => {
  const { filterListData } = props;
  const [{ viewType }] = useStateValue();
  const pathname = usePathname();
  const [{ filterValues, lang }, dispatch] = useStateValue();
  const [isMobileView, setIsMobileView] = useState(true);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const propertyTypeId = searchParams.get("propertyTypes");
  const developerId = searchParams.get("developers");
  const completion = searchParams.get("completions");

  const filterParams = {
    propertyAreaId: filterValues.propertyAreas || propertyAreaId,
    developmentTypeId: filterValues.developmentTypes || developmentTypeId,
    propertyTypeId: filterValues.propertyTypes || propertyTypeId,
    developerId: filterValues.developers || developerId,
    completion: filterValues.completions || completion,
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
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // dispatch({ type: "setFilterValues", item: queryParams });

    return () => {
      window.removeEventListener("resize", handleResize);
      dispatch({ type: "setFilterValues", item: false });
    };
  }, []);

  useEffect(() => {
    refetch();
  }, [
    filterValues.developers,
    filterValues.developmentTypes,
    filterValues.propertyAreas,
    filterValues.completions,
    filterValues.propertyTypes,
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

  // const queryParams = Object.fromEntries(
  //   queryString.split("&").map((param) => param.split("="))
  // );

  // {
  //   properties?.data?.map((property) =>
  //     property.developmentType.name === "READY"
  //       ? readyProperties.push(property)
  //       : offPlanProperties.push(property)
  //   );
  // }

  //   const locationName = currentLocation.split("/");
  // const productsToShow =
  //   props.propertyToView === "ready"
  //     ? readyProperties
  //     : props.propertyToView == "off-plan"
  //     ? offPlanProperties
  //     : properties;

  const handleShowAll = () => {
    setShowAll(true);
  };

  if (isLoadingPropertiesData) return "loading";

  return (
    <>
      {isMobileView ? (
        <Navbar2 className={` w-full py-5 bg-[#000F1D] z-50 `} type="inline" />
      ) : (
        <Navbar2
          filterListData={filterListData}
          className={`sticky top-0 left-0 w-full py-5 bg-[#000F1D] z-50 `}
          type="inline"
        />
      )}

      <section className="min-h-screen w-full mt-0 md:mt-4 bg-payment">
        <RouteLink locationName={pathname} />
        <Skeleton className="w-full mt-4 px-5 sticky mb-8">
          <div
            className="w-full flex flex-col md:flex-row justify-between px-2 pt-3 pb-1 sticky z-50 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]"
            style={{ top: isMobileView ? "-60px" : "80px" }}
          >
            <HeadingBox
              heading={
                props.propertyToView === "ready"
                  ? "Ready Properties"
                  : props.propertyToView == "off-plan"
                  ? "Off Plan Properties"
                  : "All Properties"
              }
              className="flex justify-center items-center"
              textPosition="text-center w-full"
            />
            <div className="flex items-center">
              {isMobileView ? (
                <FilterSearchInput
                  setIsFilterModalOpen={props.setIsFilterModalOpen}
                />
              ) : (
                <FilterSearch2
                  filterParams={filterParams}
                  filterListData={filterListData}
                />
              )}
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
