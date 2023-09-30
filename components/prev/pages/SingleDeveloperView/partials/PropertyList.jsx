import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridView from "@/components/SingleDeveloperGridView";

const PropertyList = (props) => {
  return (
    <section>
      <Skeleton className="px-5 my-5">
        <SingleDeveloperGridView
          page={props?.page}
          filterParams={props?.filterParams}
          singleDevData={props?.singleDevData}
          fetchMoreData={props?.fetchMoreData}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyList;
