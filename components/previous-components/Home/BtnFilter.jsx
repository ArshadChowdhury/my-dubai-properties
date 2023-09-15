import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useStateValue } from "./shared/StateProvider";

const BtnFilter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputData] = useState("");
  const [{ filterValues }, dispatch] = useStateValue();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dataShow, setDataShow] = useState("");
  const filterRef = useRef(null);
  const inputRef = useRef(null);

  const [isMobileView, setIsMobileView] = useState(true);
  const [resetData, setResetData] = useState(true);

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

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (value) => {
    let updatedFilterValue;

    if (props.cat === "completions") {
      updatedFilterValue = Object.values(value)[1] || value;
      setInputValue(updatedFilterValue);
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
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    let handle = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handle);
    window.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("scroll", handle);
      // dispatch({ type: "setFilterValues", item: false });
    };
  }, []);

  const data = props.selectedValue
    ? props.selectedValue[1]
      ? props.selectedValue[1]
      : props.selectedValue
    : props.selectedValue || props.selectedValue || inputValue;

  // const resetInputValue = () => {
  //   setResetData(true);
  //   setInputValue("");
  //   setDataShow("");
  // };

  const inputChange = (e) => {
    setInputValue(e.target.value);
    // setDataShow(false);
    // setInputData(
    //   props.selectedValue
    //     ? props.selectedValue[1]
    //       ? props.selectedValue[1]
    //       : props.selectedValue
    //     : props.selectedValue || props.selectedValue || inputValue
    // );
  };

  // const resetAll = (e) => {
  //   setInputValue("");
  // setDataShow(true);
  //   setInputData("");
  // };

  return (
    <div
      className="flex justify-center items-center font-montserrat filter-btn p-[9px] mb-2 hover:text-[#F1BF3F] text-white border-t-2 border-b-2 relative"
      style={{
        height: "46px",
        width: isMobileView ? "" : "168px",
      }}
    >
      <div className="z-0 absolute w-8 h-8 border-2 border-white rotate-45 top-[5px] left-[-16px] border-r-0 border-t-0"></div>
      <div
        className="flex justify-around hover:text-[#F1BF3F] text-[10px] items-center !h-full !w-full relative px-8 py-4"
        onClick={handleOnClick}
      >
        <form
          id="Form"
          action=""
          className="flex justify-between items-center group cursor-pointer"
        >
          <input
            type="text"
            placeholder={props.btnText}
            ref={inputRef}
            value={inputValue}
            onChange={inputChange}
            // onClick={resetAll}
            className="z-10 bg-transparent focus:outline-none group-hover:placeholder-[#F1BF3F] group-focus:placeholder-[#F1BF3F]"
          />

          <span className="group-hover:text-[#F1BF3F]">
            <BsFillCaretDownFill />
          </span>
        </form>
        {isDropdownOpen && (
          <div className="absolute bottom-0 left-0" ref={filterRef}>
            <FilterDropdown
              content={props.content}
              handleOptionSelect={handleOptionSelect}
              selectedValue={props.selectedValue}
              inputValue={inputValue}
            />
          </div>
        )}
      </div>
      <div className="z-0 absolute w-8 h-8  border-2 border-white rotate-45 top-[5px] right-[-16px] border-l-0 border-b-0"></div>
      {/* <div onClick={resetInputValue}>Delete</div> */}
    </div>
  );
};

export default BtnFilter;
