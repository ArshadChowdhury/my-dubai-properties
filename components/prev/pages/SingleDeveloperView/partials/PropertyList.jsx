import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridView from "@/components/SingleDeveloperGridView";

const PropertyList = (props) => {
  // const [showAll, setShowAll] = useState(false);
  // const propertiesToShow = showAll
  //   ? singleDevData?.data
  //   : singleDevData?.data?.slice(0, 3);

  const handleShowAll = () => {
    props.setPage((page) => page + 1);
  };
  return (
    <section>
      <Skeleton className="px-5">
        <SingleDeveloperGridView
          page={props?.page}
          filterParams={props?.filterParams}
          singleDevData={props?.singleDevData}
          handleShowAll={handleShowAll}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyList;
