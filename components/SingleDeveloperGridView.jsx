import { useEffect, useState } from "react";

import GridItem from "./prev/pages/GridView/partials/GridItem";

// import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "./prev/DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";

const SingleDeveloperGridView = (props) => {
  const { page, singleDevData, filterParams } = props;

  const [filterData, setFilterData] = useState([]);
  const dataLength = 6;
  const firstFilterData = singleDevData?.developerProperty?.data;
  const totalPages = Math.ceil(
    singleDevData?.developerProperty?.count / dataLength
  );
  const hasNextPage = page < totalPages;

  const handleShowMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    if (singleDevData?.developerProperty?.page === page) {
      const uniqueIds = new Set(filterData.map((item) => item._id));
      const filteredPropertiesData =
        singleDevData?.developerProperty?.data.filter((item) => {
          if (!uniqueIds.has(item._id)) {
            uniqueIds.add(item._id);
            return true;
          }
          return false;
        });
      setFilterData([...filterData, ...filteredPropertiesData]);
    } else {
      // Reset filterData to the initial data
      setFilterData([...firstFilterData]);
    }
    if (page === 1) {
      setFilterData(firstFilterData);
    }
  }, [firstFilterData, page]);

  useEffect(() => {
    if (singleDevData?.developerProperty?.page === 1) {
      setFilterData([...firstFilterData]);
    }
  }, [
    filterParams.propertyAreaId,
    filterParams.propertyTypeId,
    filterParams.completion,
    filterParams.beds,
    page,
  ]);

  return (
    <>
      {/* <InfiniteScroll
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasNextPage}
      > */}
      <div className="mb-20">
        <div className="w-full overflow-scroll scrollbar-hide grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-3 md:my-10 md:px-1">
          {firstFilterData?.map((property, idx) => (
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
      {/* </InfiniteScroll>
       */}
      {hasNextPage ? (
        <button className="m-auto pt-5" onClick={handleShowMore}>
          <DownArrow />
        </button>
      ) : null}
    </>
  );
};

export default SingleDeveloperGridView;
