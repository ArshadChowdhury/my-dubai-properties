import { useState, useRef } from "react";

import { useRouter } from "next/navigation";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useSearchParams } from "next/navigation";
import { useStateValue } from "./states/StateProvider";
import { useEffect } from "react";

const FilterSelect = (props) => {
  const { filterTexts, filterParams } = props;
  const [{ lang, filterValues }] = useStateValue();
  const router = useRouter();
  const filterRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const propertyAreaId = searchParams.get("propertyAreas");
  const developmentTypeId = searchParams.get("developmentTypes");
  const developerId = searchParams.get("developers");
  const allItemsArray = props?.selectBy && [...props?.selectBy];

  useEffect(() => {
    setSelectedValue(getSelectedValue());
  }, [filterTexts]);

  useEffect(() => {
    if (isMounted) {
      router.push("/properties");
    } else {
      setIsMounted(true);
    }
  }, [lang]);

  const getSelectedValue = () => {
    switch (props?.searchBy) {
      case filterTexts?.textBoxPropertyArea:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift({
            id: null,
            areaName: filterTexts?.textBoxPropertyArea,
          });
          const selectedItem = props?.selectBy?.find(
            (item) => item._id === propertyAreaId
          );
          return (
            selectedItem?.areaName ||
            (allItemsArray[0] && allItemsArray[0]?.areaName)
          );
        }
        return null;
      case filterTexts?.textBoxDevelopmentType:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift({
            id: null,
            name: filterTexts?.textBoxDevelopmentType,
          });
          const selectedItem = props?.selectBy?.find(
            (item) => item._id === developmentTypeId
          );
          return (
            selectedItem?.name || (allItemsArray[0] && allItemsArray[0]?.name)
          );
        }
        return null;
      case filterTexts?.textBoxDubaiDeveloper:
        if (allItemsArray && allItemsArray.length > 0) {
          allItemsArray.unshift({
            id: null,
            name: filterTexts?.textBoxDubaiDeveloper,
          });
          const selectedItem = props?.selectBy?.find(
            (item) => item._id === developerId
          );
          return (
            selectedItem?.name || (allItemsArray[0] && allItemsArray[0]?.name)
          );
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

    if (props.searchBy === filterTexts?.textBoxDubaiDeveloper) {
      if (content.name === filterTexts?.textBoxDubaiDeveloper) {
        urlParams.delete("developers");
        setSelectedValue(content.name);
      } else if (content.name) {
        urlParams.set("developers", content._id);
        setSelectedValue(content.name);
      }
    } else if (props.searchBy === filterTexts?.textBoxPropertyArea) {
      if (content.areaName === filterTexts?.textBoxPropertyArea) {
        urlParams.delete("propertyAreas");
        setSelectedValue(content.areaName);
      } else if (content.areaName) {
        urlParams.set("propertyAreas", content._id);
        setSelectedValue(content.areaName);
      }
    } else if (props.searchBy === filterTexts?.textBoxDevelopmentType) {
      if (content.name === filterTexts?.textBoxDevelopmentType) {
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
        className="flex cursor-pointer justify-between gap-2 hover:text-[#F1BF3F] text-xs items-center !h-full !w-[180px] relative px-4 py-2 z-[100] filter-btn-dropdown dropdown-btn"
        onClick={handleOnClick}
      >
        {selectedValue ===
        (allItemsArray[0].areaName || allItemsArray[0].name) ? (
          <span className="truncate">{selectedValue}</span>
        ) : (
          <span className="text-[#F1BF3F] truncate">{selectedValue}</span>
        )}
        <span className="group-hover:text-[#F1BF3F]">
          <BsFillCaretDownFill />
        </span>
        {isDropdownOpen && (
          <div className="absolute z-[100] right-0 outline-none top-[34px] rounded-md w-[325px] md:w-[180px] px-3 bg-gradient-to-r from-[#000F1D]  via-[#00182E] to-[#000F1D] h-[182px] text-md font-[300]">
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
