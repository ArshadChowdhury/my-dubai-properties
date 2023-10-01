import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridViewForArea from "@/components/SingleDeveloperGridViewForArea";

const PropertyListForArea = (props) => {
  return (
    <section>
      <Skeleton className="px-5 my-5">
        <SingleDeveloperGridViewForArea
          page={props?.page}
          filterParams={props?.filterParams}
          singleDevData={props?.singleDevData}
          fetchMoreData={props?.fetchMoreData}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyListForArea;
