import { useEffect } from "react";

import SignUpForm from "./partials/SignUpForm";
import PropertyInvestment from "./partials/PropertyInvestment";
import HeroSection from "./partials/HeroSection";
import ArrangeMeeting from "../ArrangeMeeting/ArrangeMeeting";
import Filter from "./partials/Filter";
import LatestProperty from "./partials/LatestProperty";
import Payment from "./partials/Payment";
// import qs from "qs";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../../Footer";
import VerticalLine2 from "../../VerticalLine2";
import { useStateValue } from "@/components/prev/states/StateProvider";

const Home = (props) => {
  const { filterListData, homeData, properties } = props;
  const [{ lang }] = useStateValue();
  const [{ filterValues, filterOpen, showModal }, dispatch] = useStateValue();
  const [params, setParams] = useState({});
  const [subsPopUp, setSubsPopUp] = useState(true);

  const handleScroll = () => {
    if (filterOpen) {
      dispatch({ type: "setFilterOpen", item: true });
    }
  };

  console.log(filterOpen, showModal);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const query = "";

  // const changeQuery = (query) => {
  //   dispatch({ type: "setQuery", item: query });
  // };

  const sliders = homeData?.sliders;
  const filterData = filterListData;

  return (
    <>
      <ArrangeMeeting />
      <VerticalLine2 />
      <div>
        <Navbar
          filterListData={filterData}
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
        />
        <section className="bg-[#000F1D] relative">
          <HeroSection sliders={sliders} />
          <div
            className={` ${
              filterOpen ? "flex justify-center items-center" : "hidden"
            }  md:block`}
          >
            <Filter filterLists={filterData} />
          </div>
          <LatestProperty properties={properties} />
          <PropertyInvestment />
          <Payment />
          <SignUpForm popup={true} />
        </section>
      </div>

      <div className="-mt-6 relative bg-[#000f1d]">
        <Footer home={true} />
      </div>
    </>
  );
};

export default Home;
