import { useEffect, useState } from "react";
import ListItem from "./partials/ListItem";
import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "../../DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";

const ListView = (props) => {
  const { propertiesData, filterParams, fetchMoreData, page } = props;
  const [filterData, setFilterData] = useState([]);

  const [{ viewType }] = useStateValue();
  const dataLength = 6;
  const firstFilterData = propertiesData?.data;

  const totalPages = Math.ceil(propertiesData?.count / dataLength);
  const hasNextPage = page < totalPages;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewType]);

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
  }, [propertiesData.data, page]);

  return (
    <>
      <InfiniteScroll
        dataLength={propertiesData?.page * dataLength}
        next={fetchMoreData}
        hasMore={hasNextPage}
      >
        <div className="mb-20">
          <div className="w-full flex flex-wrap my-3 md:my-10 px-1">
            {filterData?.map((property, idx) => (
              <ListItem
                id={idx + 1}
                key={property._id}
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
                description={property.amenities.description}
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
      {hasNextPage && (
        <button className="m-auto pt-5" onClick={props.handleShowAll}>
          <DownArrow />
        </button>
      )}
    </>
  );
};

export default ListView;
