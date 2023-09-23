import { useEffect } from "react";
import FilterSearch from "@/components/prev/FilterSearch";
import BtnItem from "@/components/prev/BtnItem";
import BtnItemOutline from "@/components/prev/BtnItemOutline";
import { useStateValue } from "@/components/prev/states/StateProvider";

const FilterModal = (props) => {
  const { filterListData, setPage, homeData } = props;
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
  }, [props.isFilterModalOpen, props.setIsFilterModalOpen]);

  const handleReset = () => {
    props.setIsFilterModalOpen(false);
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
      <div className="w-[75%] h-[310px] p-[25px] flex flex-col gap-[20px] rounded-[10px] border-2 border-[#c4c4c4] filter-modal-bg filter-modal-content">
        <FilterSearch
          homeData={homeData}
          setPage={setPage}
          filterListData={filterListData}
        />
        <div className={"flex px-5 py-2 border-t justify-between items-center"}>
          <div onClick={hadleSubmit} className="mr-2 basis-1/2">
            <BtnItem btnText="search" to="#" />
          </div>
          <div onClick={handleReset} className="ml-2 basis-1/2">
            <BtnItemOutline to="#" btnText="Discard" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterModal;
