import { useState, useRef } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

const FilterSelect = (props) => {
  const { developerId } = props;
  const router = useRouter();
  const filterRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const propertyTypeId = searchParams.get("propertyTypes");
  const completions = searchParams.get("completions");
  const beds = searchParams.get("beds");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case "Property Areas":
        allItemsArray?.unshift({ id: null, areaName: "Property Areas" });
        return (
          props?.selectBy?.find((item) => item._id === propertyAreaId)
            ?.areaName || allItemsArray[0].areaName
        );
      case "Property Types":
        allItemsArray?.unshift({ id: null, name: "Property Types" });
        return (
          props?.selectBy?.find((item) => item._id === propertyTypeId)?.name ||
          allItemsArray[0].name
        );
      case "Beds":
        allItemsArray?.unshift("Beds");
        return (
          props?.selectBy?.find((item) => item == beds) || allItemsArray[0]
        );
      case "Completions":
        allItemsArray?.unshift("Completions");
        return (
          props?.selectBy?.find((item) => item == completions) ||
          allItemsArray[0]
        );
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

    if (props.searchBy === "Beds") {
      if (content === "Beds") {
        urlParams.delete("beds");
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("beds", content);
        setSelectedValue(content);
      }
    } else if (props.searchBy === "Property Areas") {
      if (content.areaName === "Property Areas") {
        urlParams.delete("propertyAreas");
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        urlParams.set("propertyAreas", content._id);
        setSelectedValue(content.areaName);
      }
    } else if (props.searchBy === "Completions") {
      if (content === "Completions") {
        urlParams.delete("completions");
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("completions", content);
        setSelectedValue(content);
      }
    } else if (props.searchBy === "Property Types") {
      if (content.name === "Property Types") {
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
      : `/developers/${developerId}`;

    props.setPage(1);
    router.push(updatedUrl);
  };

  return (
    <>
      <div
        className="flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-sm items-center !h-full !w-[230px] relative px-6 py-2 z-[100]"
        onClick={handleOnClick}
      >
        {selectedValue}
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

export default FilterSelect;
