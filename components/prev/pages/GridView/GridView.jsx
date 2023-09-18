import React, { useEffect, useState } from "react";

import FilterSearch from "../../FilterSearch";
import Skeleton from "../../Skeleton/Skeleton";
import ListItem from "../ListView/partials/ListItem";
import GridItem from "./partials/GridItem";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "../../DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";
import { useSearchParams } from "next/navigation";
import { instance } from "../../services/apiFunctions";

function extractIdFromValue(value) {
  return value ? value.split(",")[0] : null;
}

const GridView = (props) => {
  const { propertiesData } = props;
  const [filterData, setFilterData] = useState([]);
  const [totalDataCount, setTotalDataCount] = useState(null);
  const [showArrow, setShowArrow] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [{ filterValues, lang }, dispatch] = useStateValue();

  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const propertyTypeId = searchParams.get("propertyTypes");
  const developerId = searchParams.get("developers");
  const completion = searchParams.get("completions");
  // const query = {
  //   propertyAreaId,
  //   developmentTypeId,
  //   propertyTypeId,
  //   developerId,
  //   completion,
  // };

  const dataLength = 6;

  // useEffect(() => {
  //   setFilterData(properties);
  // }, [filterValues]);

  // const fetchMore = () => {
  //   let pageNumber = 2;
  //   return function () {
  //     const params = {
  //       page: pageNumber,
  //       size: dataLength || size,
  //       developerId: filterValues.developers || extractIdFromValue(developers),
  //       developmentTypeId:
  //         filterValues.developmentTypes || extractIdFromValue(developmentTypes),
  //       propertyAreaId:
  //         filterValues.propertyAreas || extractIdFromValue(propertyAreas),
  //       completion: filterValues.completions || extractIdFromValue(completions),
  //       propertyTypeId:
  //         filterValues.propertyTypes || extractIdFromValue(propertyTypes),
  //     };
  //     axios
  //       .get(`http://52.77.121.171:3008/api/v1/en/properties`, {
  //         params,
  //       })
  //       .then((response) => {
  //         setFilterData(filterData.concat(response.data.data.properties.data));
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //     pageNumber += 1;
  //   };
  // };

  // const fetchMoreData = fetchMore();

  // useEffect(() => {
  //   const params = {
  //     page: 1,
  //     size: dataLength || size,
  //     developerId: filterValues.developers || extractIdFromValue(developers),
  //     developmentTypeId:
  //       filterValues.developmentTypes || extractIdFromValue(developmentTypes),
  //     propertyAreaId:
  //       filterValues.propertyAreas || extractIdFromValue(propertyAreas),
  //     completion: filterValues.completions || extractIdFromValue(completions),
  //     propertyTypeId:
  //       filterValues.propertyTypes || extractIdFromValue(propertyTypes),
  //   };
  //   axios
  //     .get("http://52.77.121.171:3008/api/v1/en/properties", { params })
  //     .then((response) => {
  //       console.log(response);
  //       setFilterData(response.data.data.properties.data);
  //       setTotalDataCount(response.data.data.properties.count);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [
  //   filterValues.developers,
  //   filterValues.developmentTypes,
  //   filterValues.propertyAreas,
  //   filterValues.completions,
  //   filterValues.propertyTypes,
  // ]);

  // const totalPages = Math.ceil(totalDataCount / dataLength);
  // const hasNextPage = pageNumber < totalPages;
  // console.log(hasNextPage);
  // console.log(pageNumber);

  // useEffect(() => {
  //   if (totalDataCount == filterData.length) {
  //     setShowArrow(false);
  //     setHasMore(false);
  //   }
  // }, [filterData]);

  return (
    <>
      <InfiniteScroll
        dataLength={dataLength}
        // next={fetchMoreData}
        hasMore={hasMore}
      >
        <div className="mb-20">
          <div className="w-full overflow-scroll scrollbar-hide grid grid-cols-1 md:grid-cols-3 my-3 md:my-10 md:px-1">
            {propertiesData?.data?.map((property, idx) => (
              <GridItem
                id={idx + 1}
                key={property.propertyName}
                coverImage={property.images.filter((image) => {
                  if (image.type === "cover") {
                    return image.path;
                  }
                })}
                propertyName={property.propertyName}
                areaName={property.propertyArea.areaName}
                developerName={property.developerType.name}
                propertyType={property.propertyType.name}
                unitSize={property.unitType.size}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {showArrow ? (
        <button className="m-auto pt-5" onClick={props.handleShowAll}>
          <DownArrow />
        </button>
      ) : null}
    </>
  );
};

export default GridView;
