import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useStateValue } from "@/components/prev/states/StateProvider";
// import filter from "../pages/HomePage/partials/Filter.jsx";

const BtnFilter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [{ filterValues, filterOpen }, dispatch] = useStateValue();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const filterRef = useRef(null);
  const inputRef = useRef(null);
  // const [resetData, setResetData] = useState(true);

  const handleOptionSelect = (value) => {
    let updatedFilterValue;

    if (props.cat === "completions") {
      updatedFilterValue = Object.values(value)[1] || value;
      setInputValue(updatedFilterValue.toString());
    } else {
      updatedFilterValue = [
        Object.values(value)[1]._id || value._id,
        Object.values(value)[1] || value,
      ];

      setInputValue(updatedFilterValue[1]);
    }
    const updatedFilterValues = {
      ...filterValues,
      [props.cat]: updatedFilterValue,
    };
    dispatch({ type: "setFilterValues", item: updatedFilterValues });
    setIsDropdownOpen(false);
  };

  const handleOnClick = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
    inputRef.current.focus();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const inputChange = (e) => {
    e.stopPropagation();
    setInputValue(e.target.value);
  };

  return (
    <div
      ref={filterRef}
      onClick={handleOnClick}
      className={`flex justify-center h-[46px] md:w-[168px] group items-center font-montserrat ${
        inputValue.length > 0
          ? isMobileView
            ? "filter-btn-selected-mob"
            : "filter-btn-selected"
          : isMobileView
          ? "filter-btn-mob"
          : "filter-btn"
      } p-[9px] mb-2 hover:text-[#F1BF3F] text-white border-t-2 border-b-2 relative`}
    >
      <div className="z-0 absolute w-8 h-8 border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>
      <div className="flex justify-around text-[10px] items-center !h-full !w-full px-8 py-4">
        <form
          id="Form"
          action=""
          className="flex justify-between items-center cursor-pointer"
        >
          <input
            type="text"
            placeholder={props.btnText}
            ref={inputRef}
            value={inputValue}
            onChange={inputChange}
            className={`bg-transparent text-[12px] text-[#dcb558] focus:outline-none group-hover:placeholder-[#F1BF3F] group-focus:placeholder-[#F1BF3F]`}
          />
          <span
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="group-hover:text-[#F1BF3F]"
          >
            <BsFillCaretDownFill />
          </span>
        </form>

        {isDropdownOpen && (
          <FilterDropdown
            // filterRef={filterRef}
            content={props.content}
            handleOptionSelect={handleOptionSelect}
            selectedValue={props.selectedValue}
            inputValue={inputValue}
          />
        )}
      </div>
      <div className="z-0 absolute w-8 h-8 border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
      {/* <div onClick={resetInputValue}>Delete</div> */}
    </div>
  );
};

export default BtnFilter;
