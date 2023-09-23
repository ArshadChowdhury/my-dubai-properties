import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridView from "@/components/SingleDeveloperGridView";

const PropertyList = (props) => {
  const [showAll, setShowAll] = useState(false);
  const singleDevData = props?.singleDevData;
  const page = props.singleDevData.page;
  const propertiesToShow = showAll
    ? singleDevData?.data
    : singleDevData?.data?.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <section>
      <Skeleton className="px-5">
        <SingleDeveloperGridView
          page={page}
          singleDevData={singleDevData}
          propertiesToShow={propertiesToShow}
          handleShowAll={handleShowAll}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyList;
