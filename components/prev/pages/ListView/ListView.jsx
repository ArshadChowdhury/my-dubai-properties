import React, { useEffect, useState } from "react";
import ListItem from "./partials/ListItem";
import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "../../DownArrow";
import axios from "axios";

import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";

function extractIdFromValue(value) {
  return value ? value.split(",")[0] : null;
}

const ListView = (props) => {
  const { propertiesData } = props;
  const [filterData, setFilterData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [totalDataCount, setTotalDataCount] = useState(null);
  const [dataLimit, setDataLimit] = useState(null);
  const [showArrow, setShowArrow] = useState(true);

  const [{ filterValues }] = useStateValue();
  const dataLength = 6;

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
  //       .get(`http://52.77.121.171:3008/api/v1/en/properties?${pageNumber}`, {
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

  // useEffect(() => {
  //   if (filterData.length == totalDataCount) {
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
        <div className=" mb-20">
          <div className="w-full flex flex-wrap my-3 md:my-10 px-1">
            {propertiesData?.data?.map((property, idx) => (
              <ListItem
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
                description={property.amenities.description}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {showArrow && (
        <button className="m-auto pt-5" onClick={props.handleShowAll}>
          <DownArrow />
        </button>
      )}
    </>
  );
};

export default ListView;
