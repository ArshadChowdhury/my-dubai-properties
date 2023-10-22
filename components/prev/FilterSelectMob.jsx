import { useState, useRef, useEffect } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useStateValue } from "./states/StateProvider";

const FilterSelectMob = (props) => {
  const filterTexts = props?.homeData?.lang?.filterHomepage;
  const router = useRouter();
  const [{ filterRoute }, dispatch] = useStateValue();
  const filterRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const [currentUrl, setCurrentUrl] = useState("");
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const developerId = searchParams.get("developers");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [filterTexts, props?.page]);

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case "Property Areas":
        allItemsArray?.unshift({
          id: null,
          areaName: filterTexts?.textBoxPropertyArea,
        });

        return (
          props?.selectBy?.find((item) => item._id === propertyAreaId)
            ?.areaName || allItemsArray[0].areaName
        );
      case "Development Type":
        allItemsArray?.unshift({
          id: null,
          name: filterTexts?.textBoxDevelopmentType,
        });
        return (
          props?.selectBy?.find((item) => item._id === developmentTypeId)
            ?.name || allItemsArray[0]?.name
        );
      case "Developer Type":
        allItemsArray?.unshift({
          id: null,
          name: filterTexts?.textBoxDubaiDeveloper,
        });
        return (
          props?.selectBy?.find((item) => item._id === developerId)?.name ||
          allItemsArray[0]?.name
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
      if (content.name === filterTexts?.textBoxDubaiDeveloper) {
        urlParams.delete("developers");
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, developers: null },
        });
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developers", content._id);
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, developers: content._id },
        });
        setSelectedValue(content.name);
      }
    } else if (props.searchBy === "Property Areas") {
      if (content.areaName === filterTexts?.textBoxPropertyArea) {
        urlParams.delete("propertyAreas");
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, propertyAreas: null },
        });
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        urlParams.set("propertyAreas", content._id);
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, propertyAreas: content._id },
        });
        setSelectedValue(content.areaName);
      }
    } else if (props.searchBy === "Development Type") {
      if (content.name === filterTexts?.textBoxDevelopmentType) {
        urlParams.delete("developmentTypes");
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, developmentTypes: null },
        });
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developmentTypes", content._id);
        dispatch({
          type: "setFilterRoute",
          item: { ...filterRoute, developmentTypes: content._id },
        });
        setSelectedValue(content.name);
      }
    }
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
      className={`flex cursor-pointer justify-between gap-6 hover:text-[#F1BF3F] text-xs items-center !h-full !w-full px-4 py-2`}
      onClick={handleOnClick}
    >
      {selectedValue ===
      (allItemsArray[0]?.areaName || allItemsArray[0]?.name) ? (
        <span className="truncate">{selectedValue}</span>
      ) : (
        <span className="text-[#F1BF3F] truncate">{selectedValue}</span>
      )}
      <span className="group-hover:text-[#F1BF3F]">
        <BsFillCaretDownFill />
      </span>
      {isDropdownOpen && (
        <div
          className={`absolute top-[33px] right-0 outline-none rounded-md w-full md:w-[230px] px-3 bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[180px] md:h-[220px] z-[100] text-md font-[300]`}
        >
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
