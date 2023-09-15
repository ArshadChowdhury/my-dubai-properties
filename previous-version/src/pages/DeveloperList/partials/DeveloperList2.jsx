import React from "react";
import Skeleton from "../../../components/Skeleton/Skeleton";
import DeveloperListItem from "./DeveloperListItem";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import DownArrow from "../../../components/DownArrow";

const DeveloperList = (props) => {
  const [filterData, setFilterData] = useState([]);
  const [allDev, setAllDev] = useState([]);
  const [dataLimit, setDataLimit] = useState(null);
  const [showArrow, setShowArrow] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [isMobileView, setIsMobileView] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Fetching more developers data
  const fetchMore = () => {
    let pageNumber = 2;
    return function () {
      axios
        .get(
          `http://52.77.121.171:3008/api/v1/en/developers?page=${pageNumber}&size=8`
        )
        .then((response) => {
          setAllDev(allDev.concat(response.data.data.developers.data));
        })
        .catch((error) => {
          console.error(error);
        });
      pageNumber += 1;
    };
  };

  const fetchMoreData = fetchMore();

  // Fetching developer data
  useEffect(() => {
    axios
      .get(`http://52.77.121.171:3008/api/v1/en/developers?page=1&size=8`)
      .then((response) => {
        setAllDev(response.data.data.developers.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (allDev.length == props.developersDataLength) {
      setShowArrow(false);
    }
  }, [allDev]);

  return (
    <section className="w-full">
      <div
        className="sticky z-10 w-full bg-gradient-to-r from-[#DFBF68] via-[#FFD670] to-[#DBA318] py-1 "
        style={{ top: isMobileView ? "78px" : "68px" }}></div>
      <InfiniteScroll
        dataLength={4}
        next={fetchMoreData}
        hasMore={hasMore}
        style={{ overflow: "hidden" }}>
        <div
          className="relative grid grid-cols-1 md:grid-cols-4 mt-6 w-full footer_background bg-repeat bg-opacity-10 justify-center items-center"
          style={{ gap: "50px" }}>
          {allDev.map((developer) => (
            <DeveloperListItem
              developerLogo={developer.logo}
              developerName={developer.name}
              id={developer._id}
            />
          ))}
        </div>
      </InfiniteScroll>
      {showArrow && (
        <button className="w-full flex items-center justify-center m-auto pt-5">
          <DownArrow />
        </button>
      )}
      {/* <div className="w-full bg-gradient-to-r from-[#DBA318] via-[#FFD670] to-[#DBA318] py-1 "></div> */}
    </section>
  );
};

export default DeveloperList;
