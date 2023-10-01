import { useEffect, useState } from "react";

import GridItem from "./prev/pages/GridView/partials/GridItem";

// import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "./prev/DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";

const SingleDeveloperGridViewForArea = (props) => {
  const { page, singleDevData } = props;

  const [filterData, setFilterData] = useState([]);
  const dataLength = 6;
  const firstFilterData = singleDevData?.propertiesByArea?.data;
  const totalPages = Math.ceil(
    singleDevData?.propertiesByArea?.count / dataLength
  );
  const hasNextPage = page < totalPages;

  useEffect(() => {
    if (singleDevData) {
      if (page === 1) {
        setFilterData(singleDevData?.propertiesByArea?.data);
      } else {
        const newArray = [
          ...filterData,
          ...singleDevData?.propertiesByArea?.data,
        ];
        const uniqueArray = newArray.filter((item, index, self) => {
          return index === self.findIndex((i) => i._id === item._id);
        });

        setFilterData(uniqueArray);
      }
    }
  }, [singleDevData?.propertiesByArea?.data, page]);

  return (
    <>
      <InfiniteScroll
        dataLength={singleDevData?.propertiesByArea?.page * dataLength}
        next={props.fetchMoreData}
        hasMore={hasNextPage}
        refreshFunction={props.fetchMoreData}
      >
        <div className="mb-20">
          <div className="w-full overflow-scroll scrollbar-hide grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-3 md:my-10 md:px-1">
            {filterData?.map((property, idx) => (
              <GridItem
                id={idx + 1}
                key={property.propertyName}
                coverImage={property.images.filter((image) => {
                  if (image.type === "cover") {
                    return image.path;
                  }
                })}
                property={property}
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
      {hasNextPage ? (
        <button onClick={props.fetchMoreData} className="m-auto pt-5">
          <DownArrow />
        </button>
      ) : null}
    </>
  );
};

export default SingleDeveloperGridViewForArea;
