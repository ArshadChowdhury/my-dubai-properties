import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridView from "@/components/SingleDeveloperGridView";

const PropertyList = (props) => {
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
          fetchMoreData={props?.fetchMoreData}
          handleShowAll={handleShowAll}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyList;
