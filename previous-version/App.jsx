import { useQuery } from "react-query";
import SinglePropertyDetails from "../src/pages/SinglePropertyDetails/SinglePropertyDetails";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ViewProperty from "./pages/ViewProperty/ViewProperty";
import { useStateValue } from "./states/StateProvider";
import DeveloperListPage from "./pages/DeveloperList/DeveloperListPage";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { getApiData } from "../../services/apiFunctions";
// import { Routes, Route } from "react-router-dom";
import ArrangeMeeting from "./pages/ArrangeMeeting/ArrangeMeeting";
import { useState, useEffect } from "react";
import Home from "./pages/HomePage/Home";
import Menu from "./pages/Menu/Menu";
import AboutUs from "./pages/AboutUs/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import ContactUs from "./pages/ContactUs/ContactUs";
import PrivacyPoliscy from "./pages/PrivacyPolicy/PrivacyPoliscy";
import BottomMenu from "./components/BottomMenu";
import Chat from "./components/Chat";
import VerticalLine from "./components/VerticalLine";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";
import SingleDeveloperView from "./pages/SingleDeveloperView/SingleDeveloperView";
import FilterModal from "./pages/ViewProperty/partials/filterModal";
import FilterModalViewProperty from "./pages/ViewProperty/partials/filterModeViewProperty";
import Navbar2 from "./components/Navbar2";
import { useMemo } from "react";
import OffPlanProperties from "./pages/ViewProperty/OffPlanProperties";
import ReadyProperties from "./pages/ViewProperty/ReadyProperties";

function App() {
  const [mobileView, setMobileView] = useState(false);
  // const [{ lang, propertyToView }] = useStateValue();
  const lang = "en";

  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const getAllProperties = () => {
    return getApiData(lang, "properties");
  };
  const getAllHomeContent = () => {
    return getApiData(lang, "get-home");
  };
  const { isLoading, data, isError, error } = useQuery(
    ["property-list", lang],
    getAllProperties
  );

  useEffect(() => {
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    setMobileView(isMobileView);
  }, []);

  if (isLoading) {
    return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center text-bold bg-brand text-white text-4xl">
        Loading...Please wait...
      </div>
    );
  }

  if (isError) {
    return error.message;
  }
  const allProperties = data.data.properties.data;

  return (
    <section
      className="relative bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] overflow-x-clip"
      style={{ display: "flow-root" }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <VerticalLine />
      <Routes>
        <Route path="/" element={<Home properties={allProperties} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-with-us" element={<ContactUs />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPoliscy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/properties/:propertyId"
          element={
            <SinglePropertyDetails
              mobileView={mobileView}
              allProperties={allProperties}
            />
          }
        />

        <Route
          path="/properties/:propertyType"
          element={<ViewProperty properties={allProperties} />}
        />
        <Route
          path="/properties"
          element={
            <ViewProperty
              isFilterModalOpen={isFilterModalOpen}
              setIsFilterModalOpen={setIsFilterModalOpen}
              mobileView={mobileView}
              properties={allProperties}
            />
          }
        />
        <Route
          path="/properties/off-plan"
          element={
            <OffPlanProperties
              isFilterModalOpen={isFilterModalOpen}
              setIsFilterModalOpen={setIsFilterModalOpen}
              mobileView={mobileView}
              properties={allProperties}
            />
          }
        />
        <Route
          path="/properties/ready"
          element={
            <ReadyProperties
              isFilterModalOpen={isFilterModalOpen}
              setIsFilterModalOpen={setIsFilterModalOpen}
              mobileView={mobileView}
              properties={allProperties}
            />
          }
        />
        <Route
          path="developer-list"
          element={
            <DeveloperListPage
              isFilterModalOpen={isFilterModalOpen}
              setIsFilterModalOpen={setIsFilterModalOpen}
              mobileView={mobileView}
            />
          }
        />
        <Route
          path="single-developer-view/:developerId"
          element={
            <SingleDeveloperView
              mobileView={mobileView}
              properties={allProperties}
            />
          }
        />
      </Routes>
      <Menu mobileView={mobileView} />
      <ArrangeMeeting mobileView={mobileView} />
      <FilterModalViewProperty
        // propertyToView={propertyToView}
        isFilterModalOpen={isFilterModalOpen}
        setIsFilterModalOpen={setIsFilterModalOpen}
      />
      <BottomMenu />
      <Chat />
      {/* <Footer /> */}
    </section>
  );
}

export default App;
