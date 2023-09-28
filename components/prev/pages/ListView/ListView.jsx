import { useEffect, useState } from "react";
import ListItem from "./partials/ListItem";
import downArrow from "../../assets/images/property details page/Group 360(2).png";
import DownArrow from "../../DownArrow";

import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";

const ListView = (props) => {
  const { propertiesData, filterParams, fetchMoreData, page } = props;
  const [filterData, setFilterData] = useState([]);

  const [{ lang }] = useStateValue();
  const dataLength = 6;
  const firstFilterData = propertiesData?.data;

  const totalPages = Math.ceil(propertiesData?.count / dataLength);
  const hasNextPage = page < totalPages;

  useEffect(() => {
    if (propertiesData?.page === 1) {
      setFilterData([...firstFilterData]);
    }
    if (propertiesData.page === page) {
      const uniqueIds = new Set(filterData.map((item) => item._id));
      const filteredPropertiesData = propertiesData?.data.filter((item) => {
        if (!uniqueIds.has(item._id)) {
          uniqueIds.add(item._id);
          return true;
        }
        return false;
      });
      setFilterData([...filterData, ...filteredPropertiesData]);
    }
  }, [
    propertiesData,
    page,
    lang,
    filterParams.propertyAreaId,
    filterParams.developmentTypeId,
    filterParams.developerId,
  ]);

  return (
    <>
      <InfiniteScroll
        dataLength={dataLength}
        next={fetchMoreData}
        hasMore={hasNextPage}
      >
        <div className="mb-20">
          <div className="w-full flex flex-wrap my-3 md:my-10 px-1">
            {filterData?.map((property, idx) => (
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
      {hasNextPage && (
        <button className="m-auto pt-5" onClick={props.handleShowAll}>
          <DownArrow />
        </button>
      )}
    </>
  );
};

export default ListView;
