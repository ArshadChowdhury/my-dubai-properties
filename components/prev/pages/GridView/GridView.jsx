import { useEffect, useState } from "react";

import GridItem from "./partials/GridItem";

import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "../../DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";

const GridView = (props) => {
  const { propertiesData, filterParams, fetchMoreData, page } = props;
  const [{ lang }] = useStateValue();
  const [filterData, setFilterData] = useState([]);
  const dataLength = 6;
  const firstFilterData = propertiesData?.data;
  const totalPages = Math.ceil(propertiesData?.count / dataLength);
  const hasNextPage = page < totalPages;

  useEffect(() => {
    if (page > 1) {
      const uniqueIds = new Set(filterData.map((item) => item._id));
      const filteredPropertiesData = propertiesData?.data.filter((item) => {
        if (!uniqueIds.has(item._id)) {
          uniqueIds.add(item._id);
          return true;
        }
        return false;
      });
      setFilterData([...filterData, ...filteredPropertiesData]);
    } else {
      setFilterData([...firstFilterData]);
    }
  }, [propertiesData, page, lang]);

  return (
    <>
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasNextPage}
        refreshFunction={fetchMoreData}
      >
        <div className="mb-20">
          <div className="w-full overflow-scroll scrollbar-hide grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-3 md:my-10 md:px-1">
            {filterData?.map((property) => (
              <>
                <GridItem
                  id={property._id}
                  key={property._id}
                  coverImage={property.images.filter(
                    (image) => image.type === "cover"
                  )}
                  propertyName={property.propertyName}
                  areaName={property.propertyArea.areaName}
                  developerName={property.developerType.name}
                  propertyType={property.propertyType.name}
                  unitSize={property.unitType.size}
                />
              </>
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {hasNextPage ? (
        <button className="m-auto pt-5" onClick={props.handleShowAll}>
          <DownArrow />
        </button>
      ) : null}
    </>
  );
};

export default GridView;
