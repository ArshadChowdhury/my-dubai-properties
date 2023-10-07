import React, { useEffect } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import FilterSelect from "@/components/prev/FilterSelect";
import home from "../../../assets/images/global/icon-search.png";
import downOption from "../../../assets/images/global/Group 360.png";
import { useState } from "react";
import FilterSearchInput from "../../ViewProperty/partials/filterSearch";
import FilterModal from "../../ViewProperty/partials/filterModal";

import { useStateValue } from "../../../states/StateProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const TableView = (props) => {
  const [{ lang }] = useStateValue();
  const devProjects = props.singleDevData?.developerProperty;
  const tableTexts = props.singleDevData?.lang?.developerDetails;
  const selectBy = ["text", "text-2", "text-3"];
  const [showTableView, setShowTableView] = useState(false);
  const [filterData, setFilterData] = useState([]);

  const dataLength = 6;
  const totalPages = Math.ceil(devProjects?.count / dataLength);
  const hasNextPage = props.page < totalPages;

  useEffect(() => {
    if (devProjects?.data) {
      if (devProjects.page === 1) {
        setFilterData(devProjects?.data);
      } else {
        const newArray = [...filterData, ...devProjects?.data];
        const uniqueArray = newArray.filter((item, index, self) => {
          return index === self.findIndex((i) => i._id === item._id);
        });
        setFilterData(uniqueArray);
      }
    }
  }, [props.singleDevData?.developerProperty, props.page]);

  return (
    <Skeleton className={"px-5"}>
      <div className="w-full flex flex-col z-10 ">
        <div className="overflow-x-auto">
          <div className="md:p-1.5 w-full inline-block align-middle">
            {/* {props.mobileView ? (
              <FilterSearchInput setIsFilterModalOpen={setIsFilterModalOpen} />
            ) : (
              <div className="w-full md:grid grid-cols-5">
                <FilterSelect searchBy="Dubai Area" selectBy={selectBy} />
                <FilterSelect searchBy="Dubai Area" selectBy={selectBy} />
                <FilterSelect searchBy="Dubai Area" selectBy={selectBy} />
                <FilterSelect searchBy="Dubai Area" selectBy={selectBy} />
                <div className="w-full bg-white bg-opacity-10 rounded-md flex items-center custom-shadow mt-3 md:mt-0">
                  <input
                    type="search"
                    name="search developers"
                    id="search-developers"
                    placeholder="SEARCH"
                    className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
                  />
                  <button className="px-5">
                    <Image src={home} alt="search" className="w-7" />
                  </button>
                </div>
              </div>
            )} */}
            {/* <FilterModal
              propertyToView={propertyToView}
              isFilterModalOpen={isFilterModalOpen}
              setIsFilterModalOpen={setIsFilterModalOpen}
            /> */}

            <div className="mt-10 md:mt-0 overflow-x-scroll overflow-y-scroll max-h-[300px] md:max-h-full md:h-full scrollbar-thin md:scrollbar-hide scrollbar-thumb-rounded scrollbar-track-gray-500/10 scrollbar-thumb-[#3374FF]/30">
              {lang === "ar" ? (
                <table className="min-w-full divide-y divide-gray-200 mt-5 ">
                  <thead className="bg-transparent ">
                    <tr>
                      <th
                        scope="col"
                        className="text-right py-3 text-xs font-bold text-gray-500 uppercase"
                      >
                        {tableTexts?.columnImage}
                      </th>
                      <th
                        scope="col"
                        className="pr-4 py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        {tableTexts?.columnTitle}
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        {tableTexts?.columnArea}
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        {tableTexts?.columnBeds}
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        {tableTexts?.columnPropertyType}
                      </th>
                      <th
                        scope="col"
                        className="py-3 text-xs font-bold text-right text-gray-500 uppercase"
                      >
                        {tableTexts?.columnCompletion}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white bg-opacity-5">
                    {filterData?.map((property, idx) => {
                      const { images } = property;
                      const coverImage = images.filter((image) => {
                        if (image.type === "cover") {
                          return image;
                        }
                      });

                      if (idx < props?.showCount && !showTableView) {
                        return (
                          <tr
                            key={idx}
                            className="text-white hover:bg-[rgba(0,0,0,0.2)]"
                          >
                            <td
                              className="text-sm font-medium whitespace-nowrap"
                              style={{ width: "10%", height: "auto" }}
                            >
                              <Image
                                height={300}
                                width={300}
                                src={
                                  coverImage[0]?.path ||
                                  "/placeholder-image.png"
                                }
                                alt="propertyImage"
                                className="aspect-[16/9]"
                              />
                            </td>
                            <td className="text-sm text-white whitespace-nowrap pr-4">
                              <span className="hover:text-[#ffd15f]">
                                <Link href={`/properties/${property._id}`}>
                                  {property.propertyName}
                                </Link>
                              </span>
                            </td>
                            <td className="text-sm whitespace-nowrap">
                              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                                <Link
                                  href={`/property-area/${property.propertyArea.id}`}
                                >
                                  {property.propertyArea.areaName}
                                </Link>
                              </span>
                            </td>
                            <td className="pl-10 text-sm whitespace-nowrap">
                              {property.unitType.count}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                                <Link
                                  href={`/property-type/${property?.propertyType?.id}`}
                                >
                                  {property.propertyType.name}{" "}
                                </Link>
                              </span>
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.completion}{" "}
                            </td>
                          </tr>
                        );
                      }
                      if (showTableView) {
                        return (
                          <tr
                            key={idx}
                            className="text-white hover:bg-[rgba(0,0,0,0.2)]"
                          >
                            <td
                              className="text-sm font-medium whitespace-nowrap"
                              style={{ width: "10%", height: "auto" }}
                            >
                              <Image
                                src={
                                  coverImage[0]?.path ||
                                  "/placeholder-image.png"
                                }
                                alt="propertyImage"
                                className="aspect-[16/9]"
                              />
                            </td>
                            <td
                              className="text-sm text-white whitespace-nowrap"
                              style={{ width: "25%" }}
                            >
                              {property.propertyName}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.propertyArea.areaName}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "20%" }}
                            >
                              {property.unitType.size}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.propertyType.name}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.completion}{" "}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              ) : (
                <table className="min-w-full divide-y divide-gray-200 mt-5">
                  <thead className="bg-transparent">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {tableTexts?.columnImage}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left  text-gray-500 uppercase"
                      >
                        {tableTexts?.columnTitle}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {tableTexts?.columnArea}{" "}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {tableTexts?.columnBeds}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {tableTexts?.columnPropertyType}
                      </th>
                      <th
                        scope="col"
                        className="flex px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                      >
                        {tableTexts?.columnCompletion}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white bg-opacity-5">
                    {filterData?.map((property, idx) => {
                      const { images } = property;
                      const coverImage = images.filter((image) => {
                        if (image.type === "cover") {
                          return image;
                        }
                      });

                      if (idx < props?.showCount && !showTableView) {
                        return (
                          <tr
                            key={idx}
                            className="text-white hover:bg-[rgba(0,0,0,0.2)]"
                          >
                            <td
                              className="text-sm font-medium whitespace-nowrap"
                              style={{ width: "10%", height: "auto" }}
                            >
                              <Image
                                height={300}
                                width={300}
                                src={
                                  coverImage[0]?.path ||
                                  "/placeholder-image.png"
                                }
                                alt="propertyImage"
                                className="aspect-[16/9]"
                              />
                            </td>
                            <td className="text-sm  text-white whitespace-nowrap pl-6">
                              <span className="hover:text-[#ffd15f]">
                                <Link href={`/properties/${property._id}`}>
                                  {property.propertyName}
                                </Link>
                              </span>
                            </td>
                            <td className="pl-6 text-sm whitespace-nowrap">
                              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                                <Link
                                  href={`/property-area/${property.propertyArea.id}`}
                                >
                                  {property.propertyArea.areaName}
                                </Link>
                              </span>
                            </td>
                            <td className="pl-6 text-sm whitespace-nowrap">
                              {property.unitType.count}{" "}
                            </td>
                            <td
                              className="pl-6 text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                                <Link
                                  href={`/property-type/${property?.propertyType?.id}`}
                                >
                                  {property.propertyType.name}{" "}
                                </Link>
                              </span>
                            </td>
                            <td
                              className="pl-6 text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.completion}{" "}
                            </td>
                          </tr>
                        );
                      }
                      if (showTableView) {
                        return (
                          <tr
                            key={idx}
                            className="text-white hover:bg-[rgba(0,0,0,0.2)]"
                          >
                            <td
                              className="text-sm font-medium whitespace-nowrap"
                              style={{ width: "10%", height: "auto" }}
                            >
                              <Image
                                src={
                                  coverImage[0]?.path ||
                                  "/placeholder-image.png"
                                }
                                alt="propertyImage"
                                className="aspect-[16/9]"
                              />
                            </td>
                            <td
                              className="text-sm text-white whitespace-nowrap"
                              style={{ width: "25%" }}
                            >
                              {property.propertyName}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.developerType.name}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "20%" }}
                            >
                              {property.unitType.size}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.propertyType.name}{" "}
                            </td>
                            <td
                              className="text-sm whitespace-nowrap"
                              style={{ width: "15%" }}
                            >
                              {property.completion}{" "}
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              )}
            </div>
            {hasNextPage && (
              <div
                onClick={() => {
                  props?.fetchMoreData();
                  props?.setShowCount((prev) => prev + 6);
                }}
                className="w-full hidden md:flex flex-col text-white justify-center items-center mt-5"
              >
                <Image src={downOption} alt="" />
                <span>Show More</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default TableView;
