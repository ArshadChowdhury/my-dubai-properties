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

  const firstDevData = developers?.developers?.data;

  useEffect(() => {
    setAllDev(developers?.developers?.data);
  }, []);

  useEffect(() => {
    if (developers?.developers?.page === page) {
      const uniqueIds = new Set(allDev?.map((item) => item._id));
      const filteredDeveloperData = developers?.developers?.data.filter(
        (item) => {
          if (!uniqueIds.has(item._id)) {
            uniqueIds.add(item._id);
            return true;
          }
          return false;
        }
      );
      setAllDev(allDev && [...allDev, ...filteredDeveloperData]);
    } else {
      setAllDev(firstDevData);
    }
    if (page === 1) {
      setAllDev(firstDevData);
    }
  }, [developers, page]);

  return (
    <section className="w-full">
      <div className="sticky z-10 overflow-hidden w-full bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] pt-1 h-9 top-0 md:top-0"></div>
      <div className="sticky z-10 overflow-hidden w-full bg-gradient-to-r from-[#DFBF68] via-[#FFD670] to-[#DBA318] py-1 top-[28px] md:top-[63px]"></div>
      <InfiniteScroll dataLength={4} next={fetchMoreData} hasMore={hasNextPage}>
        <div className="relative overflow-hidden grid grid-cols-1 md:grid-cols-4 mt-6 w-full footer_background bg-repeat bg-opacity-10 justify-center items-center gap-[50px]">
          {allDev?.map((developer, index) => (
            <DeveloperListItem
              key={developer._id}
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
