import { useState, useRef, useEffect } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useStateValue } from "./prev/states/StateProvider";

const FilterSelectSinglePropertyArea = (props) => {
  const { developerId, filterTexts, setPage } = props;
  const [{ lang }] = useStateValue();
  const router = useRouter();
  const filterRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyTypeId = searchParams.get("propertyTypes");
  const completions = searchParams.get("completions");
  const beds = searchParams.get("beds");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [filterTexts]);

  useEffect(() => {
    router.push(`/property-area/${developerId}`);
  }, [lang]);

  //   const getSelectedValue = () => {
  //     switch (props?.searchBy) {
  //       case "Developers":
  //         allItemsArray?.unshift({
  //           id: null,
  //           name: "Developers",
  //         });
  //         return (
  //           props?.selectBy?.find((item) => item._id === propertyAreaId)?.name ||
  //           allItemsArray[0]?.name
  //         );
  //       case filterTexts?.dropdownPropertyType:
  //         allItemsArray?.unshift({
  //           id: null,
  //           name: filterTexts?.dropdownPropertyType,
  //         });
  //         return (
  //           props?.selectBy?.find((item) => item._id === propertyTypeId)?.name ||
  //           allItemsArray[0]?.name
  //         );
  //       case filterTexts?.dropdownCompletion:
  //         allItemsArray?.unshift(filterTexts?.dropdownCompletion);
  //         return (
  //           props?.selectBy?.find((item) => item == completions) ||
  //           allItemsArray[0]
  //         );
  //       case filterTexts?.dropdownBeds:
  //         allItemsArray?.unshift(filterTexts?.dropdownBeds);
  //         return (
  //           props?.selectBy?.find((item) => item == beds) || allItemsArray[0]
  //         );
  //       default:
  //         return null;
  //     }
  //   };

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case "Developers":
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift({
            id: null,
            name: "Developers",
          });
          const selectedItem = props?.selectBy?.find(
            (item) => item._id === propertyTypeId
          );
          return selectedItem?.name || allItemsArray[0]?.name;
        }
        return null;
      case filterTexts?.dropdownPropertyType:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift({
            id: null,
            name: filterTexts?.dropdownPropertyType,
          });
          const selectedItem = props?.selectBy?.find(
            (item) => item._id === propertyTypeId
          );
          return selectedItem?.name || allItemsArray[0]?.name;
        }
        return null;
      case filterTexts?.dropdownCompletion:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift(filterTexts?.dropdownCompletion);
          const selectedItem = props?.selectBy?.find(
            (item) => item == completions
          );
          return selectedItem || allItemsArray[0];
        }
        return null;
      case filterTexts?.dropdownBeds:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift(filterTexts?.dropdownBeds);
          const selectedItem = props?.selectBy?.find((item) => item == beds);
          return selectedItem || allItemsArray[0];
        }
        return null;
      default:
        return null;
    }
  };

  const [selectedValue, setSelectedValue] = useState(getSelectedValue());

  const handleOnClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (content) => {
    const urlParams = new URLSearchParams(window.location.search);

    if (props.searchBy === filterTexts?.dropdownBeds) {
      if (content === filterTexts?.dropdownBeds) {
        urlParams.delete("beds");
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("beds", content);
        setSelectedValue(content);
      }
    } else if (props.searchBy === "Developers") {
      if (content.name === "Developers") {
        urlParams.delete("developers");
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developers", content._id);
        setSelectedValue(content.name);
      }
    } else if (props.searchBy === filterTexts?.dropdownCompletion) {
      if (content === filterTexts?.dropdownCompletion) {
        urlParams.delete("completions");
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("completions", content);
        setSelectedValue(content);
      }
    } else if (props.searchBy === filterTexts?.dropdownPropertyType) {
      if (content.name === filterTexts?.dropdownPropertyType) {
        urlParams.delete("propertyTypes");
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("propertyTypes", content._id);
        setSelectedValue(content.name);
      }
    }
    const updatedQueryString = urlParams.toString();
    const updatedUrl = updatedQueryString
      ? `?${updatedQueryString}`
      : `/property-area/${developerId}`;
    props.setPage(1);
    router.push(updatedUrl);
  };

  useEffect(() => {
    let handle = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);
    document.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("scroll", handle);
    };
  }, []);

  return (
    <>
      <div
        ref={filterRef}
        className="flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-sm items-center !h-full !w-[230px] relative px-6 py-2 z-[100]"
        onClick={handleOnClick}
      >
        {selectedValue ===
        (allItemsArray[0]?.areaName ||
          allItemsArray[0]?.name ||
          allItemsArray[0]) ? (
          <span className="truncate">{selectedValue}</span>
        ) : (
          <span className="text-[#F1BF3F] truncate">{selectedValue}</span>
        )}
        <span className="group-hover:text-[#F1BF3F]">
          <BsFillCaretDownFill />
        </span>
        {isDropdownOpen && (
          <div className="absolute z-[100] right-[2px] outline-none top-[38px] w-[325px] md:w-[230px] px-3 bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] h-[180px] text-md font-[300]">
            <div className="w-full h-full text-start text-[10.6px] text-white overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded scrollbar-track-gray-500/10 scrollbar-thumb-[#FFFF]/30">
              <div className="p-3 space-y-2">
                {allItemsArray?.map((content, idx) => {
                  return (
                    <p
                      className={`cursor-pointer z-[100] hover:text-[#dcb558] shadow-sm`}
                      key={idx}
                      onClick={() => handleOptionSelect(content)}
                    >
                      {content.name || content.areaName || content}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FilterSelectSinglePropertyArea;
