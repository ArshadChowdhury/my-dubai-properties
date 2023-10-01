import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import SingleDeveloperGridViewForType from "@/components/SingleDeveloperGridViewForType";

const PropertyListForType = (props) => {
  return (
    <section>
      <Skeleton className="px-5 my-5">
        <SingleDeveloperGridViewForType
          page={props?.page}
          filterParams={props?.filterParams}
          singleDevData={props?.singleDevData}
          fetchMoreData={props?.fetchMoreData}
        />
      </Skeleton>
    </section>
  );
};

export default PropertyListForType;
