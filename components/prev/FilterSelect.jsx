import { useState, useRef } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";

const FilterSelect = (props) => {
  const router = useRouter();
  const filterRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const developerId = searchParams.get("developers");
  const allItemsArray = [...props.selectBy];

  const getSelectedValue = () => {
    switch (props.searchBy) {
      case "Property Areas":
        allItemsArray.unshift({ id: null, areaName: "Property Areas" });
        return (
          props?.selectBy?.find((item) => item._id === propertyAreaId)
            ?.areaName || allItemsArray[0].areaName
        );
      case "Development Type":
        allItemsArray.unshift({ id: null, name: "Development Type" });
        return (
          props?.selectBy?.find((item) => item._id === developmentTypeId)
            ?.name || allItemsArray[0].name
        );
      case "Developer Type":
        allItemsArray.unshift({ id: null, name: "Developer Type" });
        return (
          props?.selectBy?.find((item) => item._id === developerId)?.name ||
          allItemsArray[0].name
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

    if (props.searchBy === "Developer Type") {
      if (content.name === "Developer Type") {
        urlParams.delete("developers");
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developers", content._id);
        setSelectedValue(content.name);
      }
    } else if (props.searchBy === "Property Areas") {
      if (content.areaName === "Property Areas") {
        urlParams.delete("propertyAreas");
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        urlParams.set("propertyAreas", content._id);
        setSelectedValue(content.areaName);
      }
    } else if (props.searchBy === "Development Type") {
      if (content.name === "Development Type") {
        urlParams.delete("developmentTypes");
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developmentTypes", content._id);
        setSelectedValue(content.name);
      }
    }

    const updatedQueryString = urlParams.toString();
    const updatedUrl = updatedQueryString
      ? `?${updatedQueryString}`
      : "/properties";

    router.push(updatedUrl);
  };

  return (
    <>
      <div
        className="flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-sm items-center !h-full !w-[230px] relative px-6 py-2"
        onClick={handleOnClick}
      >
        {selectedValue}
        <span className="group-hover:text-[#F1BF3F]">
          <BsFillCaretDownFill />
        </span>
        <div className="absolute bottom-0 left-0" ref={filterRef}>
          {isDropdownOpen && (
            <div className="absolute outline-none w-[325px] md:w-[230px] px-3 bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[220px] z-[100] text-md font-[300]">
              <div className="w-full h-full text-start text-[10.6px] text-white overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded scrollbar-track-gray-500/10 scrollbar-thumb-[#FFFF]/30">
                <div className="p-3 space-y-2">
                  {allItemsArray.map((content, idx) => {
                    return (
                      <p
                        className={`cursor-pointer hover:text-[#dcb558] shadow-sm`}
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
      </div>
    </>
  );
};

export default FilterSelect;
