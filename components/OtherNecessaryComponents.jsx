"use client";

import Menu from "@/components/prev/pages/Menu/Menu";
import ArrangeMeeting from "@/components/prev/pages/ArrangeMeeting/ArrangeMeeting";
import FilterModalViewProperty from "@/components/prev/pages/ViewProperty/partials/filterModeViewProperty";
import BottomMenu from "@/components/prev/BottomMenu";
import Chat from "@/components/prev/Chat";
import { useState, useEffect } from "react";

const OtherNecessaryComponents = () => {
  const [mobileView, setMobileView] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  useEffect(() => {
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, []);

  return (
    <>
      <Menu mobileView={mobileView} />
      <ArrangeMeeting mobileView={mobileView} />
      <FilterModalViewProperty
        isFilterModalOpen={isFilterModalOpen}
        setIsFilterModalOpen={setIsFilterModalOpen}
      />
      <BottomMenu />
      <Chat />
    </>
  );
};

export default OtherNecessaryComponents;
