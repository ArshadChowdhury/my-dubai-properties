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
  const developerId = searchParams.get("developers");
  const propertyTypeId = searchParams.get("propertyTypes");
  const beds = searchParams.get("beds");
  const completions = searchParams.get("completions");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [filterTexts]);

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case "Developers":
        allItemsArray?.unshift({
          id: null,
          name: "Developers",
        });
        return (
          props?.selectBy?.find((item) => item._id === developerId)?.name ||
          allItemsArray[0]?.name
        );
      case filterTexts?.dropdownPropertyType:
        allItemsArray?.unshift({
          id: null,
          name: filterTexts?.dropdownPropertyType,
        });
        return (
          props?.selectBy?.find((item) => item._id === propertyTypeId)?.name ||
          allItemsArray[0]?.name
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
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, beds: null },
        });
        setSelectedValue(content);
      } else if (content) {
        urlParams.set("beds", content);
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, beds: content },
        });
        setSelectedValue(content);
      }
    } else if (props.searchBy === "Developers") {
      if (content.name === "Developers") {
        urlParams.delete("developers");
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, developers: null },
        });
        setSelectedValue(content.name);
      } else if (content.name) {
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, developers: content._id },
        });
        urlParams.set("developers", content._id);
        setSelectedValue(content.name);
      }
    } else if (props.searchBy === filterTexts?.dropdownCompletion) {
      if (content === filterTexts?.dropdownCompletion) {
        urlParams.delete("completions");
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, completions: null },
        });
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
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, propertyTypes: null },
        });
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
      className="flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-xs items-center !h-full !w-full px-4 py-2"
      onClick={handleOnClick}
    >
      {selectedValue ===
      (allItemsArray[0]?.areaName ||
        allItemsArray[0]?.name ||
        allItemsArray[0]) ? (
        <span className="truncate">{selectedValue}</span>
      ) : (
        <span className="text-[#F1BF3F] ">{selectedValue}</span>
      )}
      {/* {selectedValue} */}
      <span className="group-hover:text-[#F1BF3F]">
        <BsFillCaretDownFill />
      </span>
      {isDropdownOpen && (
        <div className="absolute top-[33px] right-0 outline-none w-full rounded-md md:w-[230px] px-3 bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[180px] md:h-[220px] z-[100] text-md font-[300]">
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
