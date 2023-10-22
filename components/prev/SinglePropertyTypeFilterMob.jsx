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
  const propertyAreaId = searchParams.get("propertyAreas");
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
      case filterTexts?.dropdownDubaiArea:
        allItemsArray?.unshift({
          id: null,
          areaName: filterTexts?.dropdownDubaiArea,
        });
        return (
          props?.selectBy?.find((item) => item._id === propertyAreaId)
            ?.areaName || allItemsArray[0]?.areaName
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
    } else if (props.searchBy === filterTexts?.dropdownDubaiArea) {
      if (content.areaName === filterTexts?.dropdownDubaiArea) {
        urlParams.delete("propertyAreas");
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, propertyAreas: null },
        });
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        dispatch({
          type: "setSingleDevFilterValuesMob",
          item: { ...singleDevFilterValuesMob, propertyAreas: content._id },
        });
        urlParams.set("propertyAreas", content._id);
        setSelectedValue(content.areaName);
      }
    }
    const updatedQueryString = urlParams.toString();
    const updatedUrl = updatedQueryString
      ? `/property-type/${props?.singleDeveloperId}?${updatedQueryString}`
      : `/property-type/${props?.singleDeveloperId}`;
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
        <span className="text-[#F1BF3F] truncate">{selectedValue}</span>
      )}

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
