import { useEffect } from "react";
import FilterSearch from "@/components/prev/FilterSearch";
import BtnItem from "@/components/prev/BtnItem";
import BtnItemOutline from "@/components/prev/BtnItemOutline";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useRouter } from "next/navigation";

const FilterModal = (props) => {
  const { filterListData, setPage, homeData, page } = props;
  const router = useRouter();
  const [{ filterValuesMob, filterRoute }, dispatch] = useStateValue();
  const developmentTypeId = filterRoute?.developmentTypes;
  const propertyTypeId = filterRoute?.propertyAreas;
  const developerId = filterRoute?.developers;
  const buttonSearchText = filterListData?.lang?.filterHomepage?.buttonSearch;

  const queryParams = [];

  if (developmentTypeId) {
    queryParams.push(`developmentTypes=${developmentTypeId}`);
  }

  if (propertyTypeId) {
    queryParams.push(`propertyAreas=${propertyTypeId}`);
  }

  if (developerId) {
    queryParams.push(`developers=${developerId}`);
  }

  const queryParametersString = queryParams.join("&");

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

  const handleFilterFieldsReset = () => {};

  const handleReset = () => {
    router.push("/properties");
    props?.setIsFilterModalOpen(false);
    dispatch({ type: "setFilterRoute", item: null });
  };

  const handleSubmit = () => {
    const updatedUrl = queryParametersString
      ? `?${queryParametersString}`
      : "/properties";
    props.setPage(1);
    router.push(updatedUrl);
    if (props.isFilterModalOpen) {
      props.setIsFilterModalOpen(false);
    }
  };

  return props.isFilterModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900 z-[100]">
      <div className="w-[75%] h-[310px] p-[25px] flex flex-col gap-[20px] rounded-[10px] border-2 border-[#c4c4c4] filter-modal-bg filter-modal-content">
        <FilterSearch
          page={page}
          homeData={homeData}
          setPage={setPage}
          handleFilterFieldsReset={handleFilterFieldsReset}
          filterListData={filterListData}
        />
        <div
          className={
            "flex gap-4 px-4 py-2 border-t justify-between items-center"
          }
        >
          <div onClick={handleSubmit} className="basis-1/2">
            <BtnItem btnText={buttonSearchText} to="#" />
          </div>
          <div onClick={handleReset} className="basis-1/2">
            <BtnItemOutline to="#" btnText="Discard" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterModal;
