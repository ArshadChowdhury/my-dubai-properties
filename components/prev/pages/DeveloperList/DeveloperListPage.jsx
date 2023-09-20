"use client";

import DevelopersDescription from "./partials/DevelopersDescription";
import DeveloperList2 from "./partials/DeveloperList2";
import { useQuery } from "@tanstack/react-query";
import { instance } from "../../services/apiFunctions";
import { useStateValue } from "../../states/StateProvider";
import RouteLink from "../../RouteLink";
import { usePathname } from "next/navigation";
import HeadingBox from "../../HeadingBox";

import search from "../../assets/images/global/icon-search.png";
import Skeleton from "../../Skeleton/Skeleton";
import FilterSearchInput from "../ViewProperty/partials/filterSearch";
import Navbar2 from "../../Navbar2";
import Footer from "../../Footer";
import Image from "next/image";

const DeveloperListPage = (props) => {
  const [{ lang }] = useStateValue();
  const pathname = usePathname();

  const getAllDevelopers = async () => {
    const data = await instance
      .get(`/${lang}/developers`, {
        timeout: 5000,
      })
      .then((data) => data);
    return data;
  };

  const {
    isLoading: isLoadingDevelopersData,
    data: developersData,
    isError: isErrorDevelopersData,
  } = useQuery({
    queryKey: ["get-developers"],
    queryFn: getAllDevelopers,
  });

  if (isLoadingDevelopersData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Loading...Please wait...
      </p>
    );
  }

  if (isErrorDevelopersData) {
    return (
      <p className="h-screen text-4xl flex justify-center items-center text-white">
        Something Went Wrong...
      </p>
    );
  }

  const developers = developersData?.data?.data?.developers?.data;
  const developersDataLength = developersData?.data?.data?.developers?.count;

  return (
    <section dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="relative w-full pt-20 md:pt-28 font-montserrat bg-payment mb-40">
        <Navbar2
          className={`absolute top-0 left-0 w-full py-5 bg-[#000F1D] z-50 md:!bg-transparent`}
          type="inline"
          filterListData={developersData}
        />
        <RouteLink locationName={pathname} />
        <Skeleton className="px-5">
          <div className="w-full z-50  flex flex-col md:flex-row justify-between items-center sticky pb-2 md:pb-0 px-2 -top-16 md:top-0 mt-5 bg-gradient-to-r from-[#001120] via-[#00182E] to-[#001120]">
            <div className="w-full md:w-[25%] py-3">
              <HeadingBox heading="All Developers" />
            </div>
            {props.mobileView ? (
              <FilterSearchInput
                setIsFilterModalOpen={props.setIsFilterModalOpen}
              />
            ) : (
              <div className="w-1/4 bg-white bg-opacity-10 rounded-md flex items-center custom-shadow">
                <input
                  type="search"
                  name="search developers"
                  id="search-developers"
                  placeholder="SEARCH"
                  className="w-full px-5 py-1 rounded-md font-roboto font-extralight text-[#DBA318] placeholder:text-[#798A9C] placeholder:font-light placeholder:font-roboto placeholder:text-sm bg-transparent focus-visible:outline-0"
                />
                <button className="px-5">
                  <Image src={search} alt="search" className="w-7" />
                </button>
              </div>
            )}
          </div>
          <DevelopersDescription />
          <DeveloperList2
            developers={developers}
            developersDataLength={developersDataLength}
          />
        </Skeleton>
      </div>
      <Footer footerBg={"footer_background"} />
    </section>
  );
};

export default DeveloperListPage;
