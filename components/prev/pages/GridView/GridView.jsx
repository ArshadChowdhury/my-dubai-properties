import { useEffect, useState } from "react";
import GridItem from "./partials/GridItem";
import DownArrow from "../../DownArrow";
import InfiniteScroll from "react-infinite-scroll-component";

const GridView = (props) => {
  const { propertiesData, fetchMoreData, page } = props;
  const [filterData, setFilterData] = useState([]);
  const dataLength = 6;

  const totalPages = Math.ceil(propertiesData?.count / dataLength);
  const hasNextPage = page < totalPages;

  useEffect(() => {
    if (propertiesData) {
      if (page === 1) {
        setFilterData(propertiesData.data);
      } else {
        const newArray = [...filterData, ...propertiesData.data];
        const uniqueArray = newArray.filter((item, index, self) => {
          return index === self.findIndex((i) => i._id === item._id);
        });

        setFilterData(uniqueArray);
      }
    }

    return () => {};
  }, [propertiesData, filterData, page]);

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
        <button className="m-auto pt-5" onClick={fetchMoreData}>
          <DownArrow />
        </button>
      ) : null}
    </>
  );
};

export default GridView;
