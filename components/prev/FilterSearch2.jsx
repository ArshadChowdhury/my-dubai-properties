import React, { useRef } from "react";
import FilterSelect from "./FilterSelect";
import { useStateValue } from "@/components/prev/states/StateProvider";
import HeadingBox from "./HeadingBox";
import { usePathname } from "next/navigation";

import FilterSelectMob from "./FilterSelectMob";

const FilterSearch = (props) => {
  const { filterListData, setPage, homeData, filterParams } = props;
  const [{ lang, viewType, query }, dispatch] = useStateValue();
  const filterRef = useRef();
  const pathname = usePathname();
  const filterTexts = homeData?.lang?.filterHomepage;

  const beds = [1, 2, 3, 4, 5];

  const switchViewType = (viewType) => {
    dispatch({ type: "setViewType", item: viewType });
  };

  return (
    <section className="w-full md:flex justify-between">
      <div className="w-full lg:w-auto gap-[5px] md:flex items-center my-2 md:my-0">
        {pathname === "/properties" ? (
          <div
            className="mt-2 md:mt-0 relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10  md:mx-1 text-white hover:text-[#FFD15F] "
            style={{
              borderLeft: "2px solid gray",
              borderRight: "2px solid gray",
              borderTop: "3px solid gray",
            }}
          >
            <FilterSelect
              filterParams={filterParams}
              filterTexts={filterTexts}
              setPage={setPage}
              searchBy={filterTexts?.textBoxDevelopmentType}
              selectBy={filterListData?.developmentTypes}
            />
          </div>
        ) : null}
        <div
          className="mt-2 md:mt-0 relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10  md:mx-1 text-white hover:text-[#FFD15F] "
          style={{
            borderLeft: "2px solid gray",
            borderRight: "2px solid gray",
            borderTop: "3px solid gray",
          }}
        >
          <FilterSelect
            filterParams={filterParams}
            filterTexts={filterTexts}
            setPage={setPage}
            searchBy={filterTexts?.textBoxDubaiDeveloper}
            selectBy={filterListData?.developers}
          />
        </div>
        <div
          className="mt-2 md:mt-0 relative px-3 md:px-0 md:pl-0 rounded-md bg-white bg-opacity-10 text-white hover:text-[#FFD15F]"
          style={{
            borderLeft: "2px solid gray",
            borderRight: "2px solid gray",
            borderTop: "3px solid gray",
          }}
        >
          <FilterSelect
            filterParams={filterParams}
            filterTexts={filterTexts}
            setPage={setPage}
            searchBy={filterTexts?.textBoxPropertyArea}
            selectBy={filterListData?.propertyAreas}
          />
        </div>

        {lang === "en" ? (
          <div className="hidden md:visible -top-[192px] md:relative md:top-0 md:flex z-100">
            <span
              className="hover:scale-125 transition duration-300 cursor-pointer"
              onClick={() => {
                switchViewType("list");
                setPage(1);
              }}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H32.8099C33.986 0 34.9082 1.00984 34.8017 2.18107L31.9835 33.1811C31.8899 34.2112 31.0262 35 29.9918 35H2C0.895431 35 0 34.1046 0 33V2Z"
                  fill={viewType === "list" ? "#DFBF68" : "#373F48"}
                />
                <g clipPath="url(#clip0_280_14885)">
                  <path
                    d="M14.5254 14.4375H22.4004M14.5254 17.5H22.4004M14.5254 20.5625H22.4004"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 14.875C11.5287 14.875 11.7246 14.6791 11.7246 14.4375C11.7246 14.1959 11.5287 14 11.2871 14C11.0455 14 10.8496 14.1959 10.8496 14.4375C10.8496 14.6791 11.0455 14.875 11.2871 14.875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 17.8496C11.5287 17.8496 11.7246 17.6537 11.7246 17.4121C11.7246 17.1705 11.5287 16.9746 11.2871 16.9746C11.0455 16.9746 10.8496 17.1705 10.8496 17.4121C10.8496 17.6537 11.0455 17.8496 11.2871 17.8496Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 20.8252C11.5287 20.8252 11.7246 20.6293 11.7246 20.3877C11.7246 20.1461 11.5287 19.9502 11.2871 19.9502C11.0455 19.9502 10.8496 20.1461 10.8496 20.3877C10.8496 20.6293 11.0455 20.8252 11.2871 20.8252Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_14885">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(9.09961 10.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span
              className="hover:scale-125 transition duration-300 cursor-pointer"
              onClick={() => {
                switchViewType("grid");
                setPage(1);
              }}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.3199 1.80099C3.42214 0.778589 4.28247 0 5.30998 0H33C34.1046 0 35 0.895431 35 2V33C35 34.1046 34.1046 35 33 35H2.20998C1.02673 35 0.102164 33.9784 0.219901 32.801L3.3199 1.80099Z"
                  fill={viewType === "grid" ? "#DFBF68" : "#373F48"}
                />
                <path
                  d="M16.0781 17.0625H12.3594C12.0983 17.0625 11.8479 16.9588 11.6633 16.7742C11.4787 16.5896 11.375 16.3392 11.375 16.0781V12.3594C11.375 12.0983 11.4787 11.8479 11.6633 11.6633C11.8479 11.4787 12.0983 11.375 12.3594 11.375H16.0781C16.3392 11.375 16.5896 11.4787 16.7742 11.6633C16.9588 11.8479 17.0625 12.0983 17.0625 12.3594V16.0781C17.0625 16.3392 16.9588 16.5896 16.7742 16.7742C16.5896 16.9588 16.3392 17.0625 16.0781 17.0625ZM22.6406 17.0625H18.9219C18.6608 17.0625 18.4104 16.9588 18.2258 16.7742C18.0412 16.5896 17.9375 16.3392 17.9375 16.0781V12.3594C17.9375 12.0983 18.0412 11.8479 18.2258 11.6633C18.4104 11.4787 18.6608 11.375 18.9219 11.375H22.6406C22.9017 11.375 23.1521 11.4787 23.3367 11.6633C23.5213 11.8479 23.625 12.0983 23.625 12.3594V16.0781C23.625 16.3392 23.5213 16.5896 23.3367 16.7742C23.1521 16.9588 22.9017 17.0625 22.6406 17.0625ZM16.0781 23.625H12.3594C12.0983 23.625 11.8479 23.5213 11.6633 23.3367C11.4787 23.1521 11.375 22.9017 11.375 22.6406V18.9219C11.375 18.6608 11.4787 18.4104 11.6633 18.2258C11.8479 18.0412 12.0983 17.9375 12.3594 17.9375H16.0781C16.3392 17.9375 16.5896 18.0412 16.7742 18.2258C16.9588 18.4104 17.0625 18.6608 17.0625 18.9219V22.6406C17.0625 22.9017 16.9588 23.1521 16.7742 23.3367C16.5896 23.5213 16.3392 23.625 16.0781 23.625ZM22.6406 23.625H18.9219C18.6608 23.625 18.4104 23.5213 18.2258 23.3367C18.0412 23.1521 17.9375 22.9017 17.9375 22.6406V18.9219C17.9375 18.6608 18.0412 18.4104 18.2258 18.2258C18.4104 18.0412 18.6608 17.9375 18.9219 17.9375H22.6406C22.9017 17.9375 23.1521 18.0412 23.3367 18.2258C23.5213 18.4104 23.625 18.6608 23.625 18.9219V22.6406C23.625 22.9017 23.5213 23.1521 23.3367 23.3367C23.1521 23.5213 22.9017 23.625 22.6406 23.625Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_280_14881"
                    x1="1.17214e-07"
                    y1="17"
                    x2="35"
                    y2="17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stopColor={viewType === "grid" ? "#DFBF68" : "#373F48"}
                    />
                    <stop
                      offset="0.234375"
                      stopColor={viewType === "grid" ? "#C0A457" : "#373F48"}
                    />
                    <stop
                      offset="0.491997"
                      stopColor={viewType === "grid" ? "#BFA04B" : "#373F48"}
                    />
                    <stop
                      offset="0.807292"
                      stopColor={viewType === "grid" ? "#C8AA5A" : "#373F48"}
                    />
                    <stop
                      offset="1"
                      stopColor={viewType === "grid" ? "#DFBF68" : "#373F48"}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        ) : (
          <div className="hidden md:visible -top-[192px] md:relative md:top-0 md:flex z-100">
            <span
              onClick={() => {
                switchViewType("grid");
                setPage(1);
              }}
              className="hover:scale-125 transition duration-300 cursor-pointer"
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M3.3199 1.80099C3.42214 0.778589 4.28247 0 5.30998 0H33C34.1046 0 35 0.895431 35 2V33C35 34.1046 34.1046 35 33 35H2.20998C1.02673 35 0.102164 33.9784 0.219901 32.801L3.3199 1.80099Z"
                  fill={viewType === "grid" ? "#DFBF68" : "#373F48"}
                />
                <path
                  d="M16.0781 17.0625H12.3594C12.0983 17.0625 11.8479 16.9588 11.6633 16.7742C11.4787 16.5896 11.375 16.3392 11.375 16.0781V12.3594C11.375 12.0983 11.4787 11.8479 11.6633 11.6633C11.8479 11.4787 12.0983 11.375 12.3594 11.375H16.0781C16.3392 11.375 16.5896 11.4787 16.7742 11.6633C16.9588 11.8479 17.0625 12.0983 17.0625 12.3594V16.0781C17.0625 16.3392 16.9588 16.5896 16.7742 16.7742C16.5896 16.9588 16.3392 17.0625 16.0781 17.0625ZM22.6406 17.0625H18.9219C18.6608 17.0625 18.4104 16.9588 18.2258 16.7742C18.0412 16.5896 17.9375 16.3392 17.9375 16.0781V12.3594C17.9375 12.0983 18.0412 11.8479 18.2258 11.6633C18.4104 11.4787 18.6608 11.375 18.9219 11.375H22.6406C22.9017 11.375 23.1521 11.4787 23.3367 11.6633C23.5213 11.8479 23.625 12.0983 23.625 12.3594V16.0781C23.625 16.3392 23.5213 16.5896 23.3367 16.7742C23.1521 16.9588 22.9017 17.0625 22.6406 17.0625ZM16.0781 23.625H12.3594C12.0983 23.625 11.8479 23.5213 11.6633 23.3367C11.4787 23.1521 11.375 22.9017 11.375 22.6406V18.9219C11.375 18.6608 11.4787 18.4104 11.6633 18.2258C11.8479 18.0412 12.0983 17.9375 12.3594 17.9375H16.0781C16.3392 17.9375 16.5896 18.0412 16.7742 18.2258C16.9588 18.4104 17.0625 18.6608 17.0625 18.9219V22.6406C17.0625 22.9017 16.9588 23.1521 16.7742 23.3367C16.5896 23.5213 16.3392 23.625 16.0781 23.625ZM22.6406 23.625H18.9219C18.6608 23.625 18.4104 23.5213 18.2258 23.3367C18.0412 23.1521 17.9375 22.9017 17.9375 22.6406V18.9219C17.9375 18.6608 18.0412 18.4104 18.2258 18.2258C18.4104 18.0412 18.6608 17.9375 18.9219 17.9375H22.6406C22.9017 17.9375 23.1521 18.0412 23.3367 18.2258C23.5213 18.4104 23.625 18.6608 23.625 18.9219V22.6406C23.625 22.9017 23.5213 23.1521 23.3367 23.3367C23.1521 23.5213 22.9017 23.625 22.6406 23.625Z"
                  fill="white"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_280_14881"
                    x1="1.17214e-07"
                    y1="17"
                    x2="35"
                    y2="17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stopColor={viewType === "grid" ? "#DFBF68" : "#373F48"}
                    />
                    <stop
                      offset="0.234375"
                      stopColor={viewType === "grid" ? "#C0A457" : "#373F48"}
                    />
                    <stop
                      offset="0.491997"
                      stopColor={viewType === "grid" ? "#BFA04B" : "#373F48"}
                    />
                    <stop
                      offset="0.807292"
                      stopColor={viewType === "grid" ? "#C8AA5A" : "#373F48"}
                    />
                    <stop
                      offset="1"
                      stopColor={viewType === "grid" ? "#DFBF68" : "#373F48"}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span
              className="hover:scale-125 transition duration-300 cursor-pointer"
              onClick={() => {
                switchViewType("list");
                setPage(1);
              }}
            >
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H32.8099C33.986 0 34.9082 1.00984 34.8017 2.18107L31.9835 33.1811C31.8899 34.2112 31.0262 35 29.9918 35H2C0.895431 35 0 34.1046 0 33V2Z"
                  fill={viewType === "list" ? "#DFBF68" : "#373F48"}
                />
                <g clipPath="url(#clip0_280_14885)">
                  <path
                    d="M14.5254 14.4375H22.4004M14.5254 17.5H22.4004M14.5254 20.5625H22.4004"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 14.875C11.5287 14.875 11.7246 14.6791 11.7246 14.4375C11.7246 14.1959 11.5287 14 11.2871 14C11.0455 14 10.8496 14.1959 10.8496 14.4375C10.8496 14.6791 11.0455 14.875 11.2871 14.875Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 17.8496C11.5287 17.8496 11.7246 17.6537 11.7246 17.4121C11.7246 17.1705 11.5287 16.9746 11.2871 16.9746C11.0455 16.9746 10.8496 17.1705 10.8496 17.4121C10.8496 17.6537 11.0455 17.8496 11.2871 17.8496Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2871 20.8252C11.5287 20.8252 11.7246 20.6293 11.7246 20.3877C11.7246 20.1461 11.5287 19.9502 11.2871 19.9502C11.0455 19.9502 10.8496 20.1461 10.8496 20.3877C10.8496 20.6293 11.0455 20.8252 11.2871 20.8252Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_280_14885">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(9.09961 10.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterSearch;
