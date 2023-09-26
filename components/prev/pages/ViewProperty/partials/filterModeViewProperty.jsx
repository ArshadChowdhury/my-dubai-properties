import { useEffect } from "react";
// import FilterSearch2 from "../../../components/FilterSearch2";
import BtnItem from "@/components/prev/BtnItem";
import BtnOutline from "@/components/prev/BtnOutline";
import BtnItemOutline from "@/components/prev/BtnItemOutline";
import { useStateValue } from "../../../states/StateProvider";
import FilterSearch3 from "@/components/prev/FilterSearch3";

const FilterModalViewProperty = (props) => {
  const [{ filterValuesMob }, dispatch] = useStateValue();
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        props.isFilterModalOpen &&
        !event.target.closest(".filter-modal-content")
      ) {
        props.setIsFilterModalOpen(false);
      }
    };

    const handleScroll = () => {
      if (props.isFilterModalOpen) {
        props.setIsFilterModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.isFilterModalOpen]);

  const handleReset = () => {
    dispatch({
      type: "setFilterSelectReset",
      item: true,
    });

    setTimeout(() => {
      dispatch({
        type: "setFilterSelectReset",
        item: false,
      });
    }, 1000);
  };

  const hadleSubmit = () => {
    dispatch({
      type: "setFilterValues",
      item: filterValuesMob,
    });
    if (props.isFilterModalOpen) {
      props.setIsFilterModalOpen(false);
    }
  };

  return props.isFilterModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900 z-[100]">
      <div className="w-[75%] p-[25px] flex flex-col gap-[20px] rounded-[10px] border-2 border-[#c4c4c4] filter-modal-bg filter-modal-content">
        <FilterSearch3
          title={
            props.propertyToView === "ready"
              ? "Ready Properties"
              : props.propertyToView === "off-plan"
              ? "Off Plan Properties"
              : "All Properties"
          }
        />
        <div className={"flex px-5 py-2 border-t justify-between "}>
          <div onClick={hadleSubmit} className="mr-2 basis-1/2 ">
            <BtnItem btnText="search" />
          </div>

          <div onClick={handleReset} className="ml-2 basis-1/2">
            <BtnItemOutline btnText="Discard" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterModalViewProperty;
