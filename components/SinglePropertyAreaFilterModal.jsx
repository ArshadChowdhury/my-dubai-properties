import { useEffect } from "react";
import SinglePropertyAreaFilterSearch from "./prev/SinglePropertyAreaFilterSearch";
import BtnItem from "@/components/prev/BtnItem";
import BtnItemOutline from "@/components/prev/BtnItemOutline";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useRouter } from "next/navigation";

const SinglePropertyAreaFilterModal = (props) => {
  const {
    filterListData,
    setPage,
    homeData,
    singleDevData,
    developerId: singleDeveloperId,
  } = props;
  const router = useRouter();
  const [{ singleDevFilterValuesMob }, dispatch] = useStateValue();
  const developers = singleDevFilterValuesMob?.developers;
  const propertyTypeId = singleDevFilterValuesMob?.propertyTypes;
  const completions = singleDevFilterValuesMob?.completions;
  const beds = singleDevFilterValuesMob?.beds;

  const queryParams = [];

  if (propertyTypeId) {
    queryParams.push(`propertyTypes=${propertyTypeId}`);
  }

  if (developers) {
    queryParams.push(`developers=${developers}`);
  }

  if (completions) {
    queryParams.push(`completions=${completions}`);
  }

  if (beds) {
    queryParams.push(`beds=${beds}`);
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

  const handleReset = () => {
    router.push(`/property-area/${singleDeveloperId}`);

    dispatch({
      type: "setSingleDevFilterValuesMob",
      item: null,
    });
    props.setIsFilterModalOpen(false);
  };

  const hadleSubmit = () => {
    const updatedUrl = queryParametersString
      ? `?${queryParametersString}`
      : `/property-area/${singleDeveloperId}`;
    props.setPage(1);
    router.push(updatedUrl);
    if (props.isFilterModalOpen) {
      props.setIsFilterModalOpen(false);
    }
  };

  return props.isFilterModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-900 z-[100]">
      <div className="w-[75%] h-[310px] p-[25px] flex flex-col gap-[20px] rounded-[10px] border-2 border-[#c4c4c4] filter-modal-bg filter-modal-content">
        <SinglePropertyAreaFilterSearch
          singleDeveloperId={singleDeveloperId}
          singleDevData={singleDevData}
          homeData={homeData}
          setPage={setPage}
          filterListData={filterListData}
        />
        <div
          className={
            "flex gap-4 px-4 py-2 border-t justify-between items-center"
          }
        >
          <div onClick={hadleSubmit} className="basis-1/2">
            <BtnItem btnText="search" to="#" />
          </div>
          <div onClick={handleReset} className="basis-1/2">
            <BtnItemOutline to="#" btnText="Discard" />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default SinglePropertyAreaFilterModal;
