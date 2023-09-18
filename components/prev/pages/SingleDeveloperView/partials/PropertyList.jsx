import React, { useState } from "react";
import Skeleton from "@/components/prev/Skeleton/Skeleton";
import GridView from "../../GridView/GridView";

const PropertyList = (props) => {
  const [showAll, setShowAll] = useState(false);
  const properties = props.propertyList;
  const productsToShow = showAll ? properties : properties.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };
  return (
    <section>
      <Skeleton className="px-5">
        <GridView properties={productsToShow} handleShowAll={handleShowAll} />
      </Skeleton>
    </section>
  );
};

export default PropertyList;
