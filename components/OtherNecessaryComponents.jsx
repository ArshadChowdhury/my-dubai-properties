"use client";

import Menu from "@/components/prev/pages/Menu/Menu";
import ArrangeMeeting from "@/components/prev/pages/ArrangeMeeting/ArrangeMeeting";
import FilterModalViewProperty from "@/components/prev/pages/ViewProperty/partials/filterModeViewProperty";
import BottomMenu from "@/components/prev/BottomMenu";
import Chat from "@/components/prev/Chat";
import { useStateValue } from "./prev/states/StateProvider";
import { useState } from "react";

const OtherNecessaryComponents = () => {
  const [{ lang }] = useStateValue();
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  return (
    <>
      {/* mobileView={mobileView} */}
      <Menu />
      {/* mobileView={mobileView} */}
      <ArrangeMeeting />
      <FilterModalViewProperty
        // propertyToView={propertyToView}
        isFilterModalOpen={isFilterModalOpen}
        setIsFilterModalOpen={setIsFilterModalOpen}
      />
      <BottomMenu />
      <Chat />
    </>
  );
};

export default OtherNecessaryComponents;
