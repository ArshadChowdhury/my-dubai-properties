import { useState, useRef, useEffect } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useStateValue } from "./states/StateProvider";

const FilterSelectMob = (props) => {
  const { filterTexts } = props;
  const [{ singleDevFilterValuesMob }, dispatch] = useStateValue();
  const filterRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const beds = searchParams.get("beds");
  const completions = searchParams.get("completions");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [filterTexts]);

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case filterTexts?.dropdownDubaiArea:
        allItemsArray?.unshift({
          id: null,
          areaName: filterTexts?.dropdownDubaiArea,
        });
        return (
          props?.selectBy?.find((item) => item._id === propertyAreaId)
            ?.areaName || allItemsArray[0].areaName
        );
      case filterTexts?.dropdownPropertyType:
        allItemsArray?.unshift({
          id: null,
          name: filterTexts?.dropdownPropertyType,
        });
        return (
          props?.selectBy?.find((item) => item._id === developmentTypeId)
            ?.name || allItemsArray[0].name
        );
      case filterTexts?.dropdownCompletion:
        allItemsArray?.unshift(filterTexts?.dropdownCompletion);
        return (
          props?.selectBy?.find((item) => item == completions) ||
          allItemsArray[0]
        );
      case filterTexts?.dropdownBeds:
        allItemsArray?.unshift(filterTexts?.dropdownBeds);
        return (
          props?.selectBy?.find((item) => item == beds) || allItemsArray[0]
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

    if (props.searchBy === filterTexts?.dropdownBeds) {
      if (content === filterTexts?.dropdownBeds) {
        urlParams.delete("beds");
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("beds", content);
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, beds: content },
        });
        setSelectedValue(content);
      }
    } else if (props.searchBy === filterTexts?.dropdownDubaiArea) {
      if (content.areaName === filterTexts?.dropdownDubaiArea) {
        urlParams.delete("propertyAreas");
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, propertyAreas: content._id },
        });
        urlParams.set("propertyAreas", content._id);
        setSelectedValue(content.areaName);
      }
    } else if (props.searchBy === filterTexts?.dropdownCompletion) {
      if (content === filterTexts?.dropdownCompletion) {
        urlParams.delete("completions");
        setSelectedValue(content);
      } else if (content) {
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, completions: content },
        });
        urlParams.set("completions", content);
        setSelectedValue(content);
      }
    } else if (props.searchBy === filterTexts?.dropdownPropertyType) {
      if (content.name === filterTexts?.dropdownPropertyType) {
        urlParams.delete("propertyTypes");
        setSelectedValue(content.name);
      } else if (content.name) {
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, propertyTypes: content._id },
        });
        urlParams.set("propertyTypes", content._id);
        setSelectedValue(content.name);
      }
    }
    const updatedQueryString = urlParams.toString();
    const updatedUrl = updatedQueryString
      ? `/developers/${props?.singleDeveloperId}?${updatedQueryString}`
      : `/developers/${props?.singleDeveloperId}`;
    props.setPage(1);
  };

  console.log(singleDevFilterValuesMob);

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
    <div
      ref={filterRef}
      className="flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-xs items-center !h-full !w-[230px] relative px-6 py-2"
      onClick={handleOnClick}
    >
      {selectedValue}
      <span className="group-hover:text-[#F1BF3F]">
        <BsFillCaretDownFill />
      </span>
      {isDropdownOpen && (
        <div className="absolute top-[33px] right-1 outline-none w-[236px] rounded-md md:w-[230px] px-3 bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[180px] md:h-[220px] z-[100] text-md font-[300]">
          <div className="w-full h-full text-start text-[10.6px] text-white overflow-y-scroll scrollbar-thin  scrollbar-thumb-rounded scrollbar-track-gray-500/10 scrollbar-thumb-[#FFFF]/30">
            <div className="p-3 space-y-2">
              {allItemsArray?.map((content, idx) => {
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
  );
};

export default FilterSelectMob;