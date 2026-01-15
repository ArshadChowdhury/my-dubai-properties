// import { useEffect, useState } from "react";
// import GridItem from "./partials/GridItem";
// import { ArrowDown } from "lucide-react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { useStateValue } from "../../states/StateProvider";

// const GridView = (props) => {
//   const { propertiesData, fetchMoreData, page } = props;
//   const [filterData, setFilterData] = useState([]);
//   const [{ viewType }] = useStateValue();
//   const dataLength = 3;
//   const totalPages = propertiesData?.meta?.totalPages;
//   const hasNextPage = page < totalPages;


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [viewType]);

//   useEffect(() => {
//     if (propertiesData.data) {
//       if (page === 1) {
//         setFilterData(propertiesData.data);

//       } else {
//         const newArray = [...filterData, ...propertiesData.data];
//         const uniqueArray = newArray.filter((item, index, self) => {
//           return index === self.findIndex((i) => i.id === item.id);
//         });

//         setFilterData(uniqueArray);
//       }
//     }
//   }, [propertiesData.data, page]);



//   return (
//     <>
//       <InfiniteScroll
//         dataLength={propertiesData.meta.totalItems}
//         next={fetchMoreData}
//         hasMore={hasNextPage}
//       >
//         <div className="mb-20">
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-3 md:my-10 md:px-1">
//             {filterData?.map((property, index) => (
//               <GridItem
//                 id={index + 1}
//                 key={index}
//                 coverImage={property.images.filter(
//                   (image) => image.type === "cover"
//                 )}
//                 property={property}
//                 propertyName={property.propertyName}
//                 areaName={property.propertyArea.areaName}
//                 developerName={property.developerType.name}
//                 propertyType={property.propertyType.name}
//                 unitSize={property.unitType.size}
//               />
//             ))}
//           </div>
//         </div>
//       </InfiniteScroll>
//       {hasNextPage ? (
//         <button className="m-auto pt-5" onClick={fetchMoreData}>
//           <ArrowDown className="w-10 h-10 text-white" />
//         </button>
//       ) : null}
//     </>
//   );
// };

// export default GridView;


import { useEffect, useState } from "react";
import GridItem from "./partials/GridItem";
import { ArrowDown } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStateValue } from "../../states/StateProvider";

const GridView = ({ propertiesData, fetchMoreData, page }) => {
  const [filterData, setFilterData] = useState([]);
  const [{ viewType }] = useStateValue();
  
  const totalPages = propertiesData?.meta?.totalPages || 0;
  const hasNextPage = page < totalPages;

  useEffect(() => {
    window.scrollTo(0, 0);
    setFilterData([]); // Reset on view change
  }, [viewType]);

  useEffect(() => {
    const newData = propertiesData?.data;
    if (!newData?.length) return;

    setFilterData(prev => {
      if (page === 1) return newData;
      
      // Don't clear previous data, only add new
      const existingIds = new Set(prev.map(item => item.id));
      const uniqueNew = newData.filter(item => !existingIds.has(item.id));
      
      return uniqueNew.length ? [...prev, ...uniqueNew] : prev;
    });
  }, [propertiesData?.data, page]);

  return (
    <>
      <InfiniteScroll
        dataLength={filterData.length}
        next={fetchMoreData}
        hasMore={hasNextPage}
      >
        <div className="mb-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-3 md:my-10 md:px-1">
            {filterData.map((property, index) => (
              <GridItem
                key={property.id}
                id={index + 1}
                coverImage={property.images.filter(img => img.type === "cover")}
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
      {hasNextPage && (
        <button className="m-auto pt-5" onClick={fetchMoreData}>
          <ArrowDown className="w-10 h-10 text-white" />
        </button>
      )}
    </>
  );
};

export default GridView;