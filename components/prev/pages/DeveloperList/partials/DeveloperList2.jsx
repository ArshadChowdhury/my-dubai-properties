import React from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import DeveloperListItem from "./DeveloperListItem";
import { useEffect } from "react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DownArrow from "@/components/prev/DownArrow";

const DeveloperList = (props) => {
  const { developers, fetchMoreData, page } = props;
  // const [filterData, setFilterData] = useState([]);

  const [allDev, setAllDev] = useState([]);
  // const [dataLimit, setDataLimit] = useState(null);

  //   const [isMobileView, setIsMobileView] = useState(true);
  const totalPages = Math.ceil(
    developers?.developers?.count / developers?.developers?.size
  );
  const hasNextPage = page < totalPages;

  useEffect(() => {
    if (developers) {
      if (page === 1) {
        setAllDev(developers?.developers?.data);
      } else {
        const newArray = [...allDev, ...developers?.developers?.data];
        const uniqueArray = newArray.filter((item, index, self) => {
          return index === self.findIndex((i) => i._id === item._id);
        });

        setAllDev(uniqueArray);
      }
    }
  }, [developers?.developers?.data, page]);

  return (
    <section className="w-full">
      <div className="sticky z-10 overflow-hidden w-full bg-gradient-to-r from-[#DFBF68] via-[#FFD670] to-[#DBA318] py-1 top-[80px] md:top-[88px]"></div>
      <InfiniteScroll
        dataLength={developers?.developers?.page * 9}
        next={fetchMoreData}
        hasMore={hasNextPage}
      >
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 w-full footer_background bg-repeat bg-opacity-10 justify-center items-center gap-[50px]">
          {allDev?.map((developer, index) => (
            <DeveloperListItem
              key={index + 1}
              developerLogo={developer.logo}
              developerName={developer.name}
              id={developer._id}
            />
          ))}
        </div>
      </InfiniteScroll>
      {hasNextPage && (
        <button className="w-full flex items-center justify-center m-auto pt-5">
          <DownArrow />
        </button>
      )}
      {/* <div className="w-full bg-gradient-to-r from-[#DBA318] via-[#FFD670] to-[#DBA318] py-1 "></div> */}
    </section>
  );
};

export default DeveloperList;
