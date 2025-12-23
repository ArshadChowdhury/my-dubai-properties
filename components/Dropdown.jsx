import Link from "next/link";

import investment from "./prev/assets/images/global/investment.png";
import SkeletonSingleProperty from "./prev/Skeleton/SkeletonSingleProperty";
import helpLine from "./prev/assets/images/global/help-circle-outline.png";
import developerIcon from "./prev/assets/images/global/construct.png";
import { useState, useEffect } from "react";
import home from "./prev/assets/images/global/home.png";
import camera from "./prev/assets/images/global/camera-sharp.png";
import offer from "./prev/assets/images/global/pricetag-outline.png";
import { useStateValue } from "@/components/prev/states/StateProvider";

import calender from "./prev/assets/images/global/calendar-outline.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import backsapce from "../public/images/global/backspace-outline.png";

const Dropdown = (props) => {
  const developersData = props.filterListData?.developers;
  const homeData = props.homeData;
  const [{ isDropdownMenuOpen, showModal }, dispatch] = useStateValue();
  const lang = 'en'
  const [isMobileView, setIsMobileView] = useState(false);
  const navItem = homeData?.lang?.menu;
  const propertySelection = homeData?.lang?.propertySelection;
  const router = useRouter();

  const closeDropdown = () => {
    dispatch({
      type: "setDropdownOpen",
      item: false,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    dispatch({ type: "setDropdownOpen", item: false });
  };

  const handleArrangeMeeting = (e) => {
    e.preventDefault();
    dispatch({ type: "setShowModal", item: true });
  };



  return !isMobileView ? (
    lang === "en" ? (
      (
        <div className="font-extralight mt-[68px] text-[#ffff] md:mt-0 font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
          <div className="md:mt-0 dropdown_background w-full h-full">
            <div className="px-5 flex flex-col gap-5 justify-center md:grid grid-cols-2 w-full py-10">
              <div className="mx-4 flex flex-col gap-8">
                {/* Section: Why Us */}
                <div className="flex">
                  <span><Image src={helpLine} alt="help" /></span>
                  <div className="text-white ml-[10.5px]">
                    <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase">
                      {"Why Choose Us"}
                    </h2>
                    <ul className="text-xs flex flex-col gap-2">
                      <li className="uppercase hover:text-[#ffd15f]">
                        <Link href="/about" onClick={handleClose}>
                          {"Our Heritage"}
                        </Link>
                      </li>
                      <li className="uppercase hover:text-[#ffd15f]">
                        <Link href="/contact-us" onClick={handleClose}>
                          {"Private Consultation"}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section: Developers */}
                <div className="flex">
                  <span><Image src={developerIcon} alt="developers" /></span>
                  <div className="text-white ml-[10.5px]">
                    <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase">
                      {"Tier-1 Developers"}
                    </h2>
                    <ul className="text-xs flex flex-col gap-2">
                      {developersData?.slice(0, 6).map((developer) => (
                        <Link key={developer._id} href={`/developers/${developer._id}`} onClick={handleClose}>
                          <li className="hover:text-[#ffd15f]">{developer.name}</li>
                        </Link>
                      ))}
                      <Link href="/developers" onClick={handleClose} className="text-[#ffd15f] font-medium">
                        {"View All Developers"}
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {/* Section: Portfolios */}
                <div className="flex leading-[22px]">
                  <span><Image src={home} alt="projects" /></span>
                  <div className="text-white ml-[10.5px]">
                    <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase">
                      {"Property Portfolios"}
                    </h2>
                    <ul className="flex flex-col gap-2 text-xs">
                      <Link href="/properties/ready" onClick={handleClose}>
                        <li className="hover:text-[#ffd15f]">{"Ready-to-Move Residences"}</li>
                      </Link>
                      <Link href="/properties/off-plan" onClick={handleClose}>
                        <li className="hover:text-[#ffd15f]">{"Off-Plan Investment"}</li>
                      </Link>
                      <Link href="/properties" onClick={handleClose}>
                        <li className="hover:text-[#ffd15f] font-medium text-[#ffd15f]">
                          {"All Projects"}
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Image src={offer} alt="offers" />
                  <h2 className="text-base font-[500] uppercase cursor-pointer hover:text-[#ffd15f]">
                    {"Exclusive Incentives"}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <Image src={camera} alt="tours" />
                  <h2 className="text-base font-[500] uppercase cursor-pointer hover:text-[#ffd15f]">
                    {"Virtual 360° Tours"}
                  </h2>
                </div>
              </div>
            </div>

            {/* Mobile Button */}
            <div className="flex justify-center items-center">
              <button className="md:hidden border border-white p-3 w-3/4 flex justify-center items-center my-8 text-white uppercase font-asul" onClick={handleArrangeMeeting}>
                {"Arrange a Private Meeting"}
              </button>
            </div>
          </div>

          {/* Right Side Card (Desktop Only) */}
          <div className="w-full h-full relative hidden md:block bg-cover overflow-hidden min-h-[300px]">
            <Image src={investment} alt="Investment" className="h-full w-full object-cover grayscale-[20%]" />
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-10">
              <div className="bg-black bg-opacity-80 p-8 rounded-lg border border-[#D4B970]/30 text-center">
                <p className="text-[14px] font-bold text-[#D4B970] font-roboto tracking-widest mb-2 uppercase">
                  {"PREMIUM REAL ESTATE INVESTMENT"}
                </p>
                <p className="text-[12px] font-light font-montserrat text-gray-300 mb-6 leading-relaxed">
                  {"Access high-yield opportunities in Dubai's tax-free market with guaranteed returns."}
                </p>
                <button className="bg-[#bea04e] hover:bg-transparent border border-[#bea04e] text-white px-6 py-2 rounded-md transition-all text-sm font-montserrat" onClick={() => router.push("/contact-us")}>
                  {"Speak to an Advisor"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )

    ) : (
      <div className="font-extralight text-right mt-[68px] md:mt-0 text-[#ffff] font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
        {/** left side */}
        <div className="w-full h-full relative hidden md:block bg-cover">
          <Image src={investment} alt="" className="h-full w-full" />
          <div className="w-full h-full absolute-center px-10 bg-[#171717] bg-opacity-30 rounded-md flex flex-col justify-center p-5">
            <div className="flex flex-col gap-2 bg-black bg-opacity-70 ml-10 mr-10 px-10 py-6 rounded-lg">
              <p className="text-[12px] font-medium text-[#D4B970] font-roboto leading-[14px]">
                {propertySelection?.insideTitle}
              </p>
              <p className="text-[11px] font-extralight font-montserrat text-white pb-1">
                {propertySelection?.insideSubTitle}
              </p>
              <button
                onClick={() => {
                  router.push("/contact-us");
                  handleClose();
                }}
                className="bg-[#bea04e] self-end rounded-md px-1 py-[1x] w-[70%] border border-1 border-[#bea04e] hover:bg-transparent"
              >
                <span className="text-white py-1 flex justify-center items-center text-[12px] font-normal font-montserrat ">
                  {propertySelection?.insideButton}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:mt-0 dropdown_background w-full h-full`}>
          <SkeletonSingleProperty className="w-full !pb-0">
            <div className="flex flex-col px-5 gap-5 justify-center md:grid grid-cols-2 w-full md:justify-items-end">
              <div className="flex flex-col gap-5">
                <div className="flex justify-end gap-3">
                  <div className="text-white">
                    <h2 className="text-base font-[500] leading-[27px] mb-2">
                      {navItem?.whyUs}
                    </h2>
                    <ul className="text-xs flex flex-col gap-1">
                      <li className="uppercase leading-[15.3px] hover:text-[#ffd15f]">
                        <Link href="/about" onClick={handleClose}>
                          {navItem?.aboutUs}
                        </Link>
                      </li>
                      <li className="uppercase leading-[15.3px] hover:text-[#ffd15f]">
                        <Link href="/contact-us" onClick={handleClose}>
                          {navItem?.contactUs}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <span>
                    <Image src={helpLine} alt="help line image" />
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="text-white">
                    <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase">
                      {navItem?.developers}
                    </h2>
                    <ul className="text-xs flex flex-col gap-1">
                      {developersData
                        ?.map((developer) => (
                          <Link
                            href={`/developers/${developer._id}`}
                            key={developer._id}
                            onClick={handleClose}
                            className="hover:text-[#ffd15f]"
                          >
                            <li className="leading-[15.3px]">
                              {developer.name}
                            </li>
                          </Link>
                        ))
                        .slice(0, 6)}
                      <Link
                        href={"/developers"}
                        onClick={handleClose}
                        className="text-xs leading-[15.3px] hover:text-[#ffd15f]"
                      >
                        {navItem?.all}
                      </Link>
                    </ul>
                  </div>
                  <span>
                    <Image src={developerIcon} alt="help line image" />
                  </span>
                </div>
              </div>
              <div>
                <div className="flex justify-end gap-3 mb-[22.5px] leading-[22px]">
                  <div className="text-white">
                    <h2 className="text-base font-[500] leading-[27px] mb-2">
                      {navItem?.projects}
                    </h2>
                    <ul className="flex flex-col gap-1">
                      <Link
                        href={
                          "/properties/ready?developmentTypes=6519855e79fcdc27efbf85cd"
                        }
                        onClick={handleClose}
                      >
                        <li className="text-xs leading-[15.3px] hover:text-[#ffd15f]">
                          {" "}
                          {navItem?.ready}
                        </li>
                      </Link>
                      <Link
                        href={
                          "/properties/off-plan?developmentTypes=651984de79fcdc27efbf859b"
                        }
                        onClick={handleClose}
                      >
                        <li className="text-xs leading-[15.3px] hover:text-[#ffd15f]">
                          {" "}
                          {navItem?.offPlan}
                        </li>
                      </Link>
                      <Link href="/properties" onClick={handleClose}>
                        <li className="text-xs leading-[15.3px] hover:text-[#ffd15f]">
                          {navItem?.allProject}
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <span>
                    <Image src={home} alt="help line image" />
                  </span>
                </div>
                <div className="flex justify-end gap-3 mb-[22.5px] leading-[22px]">
                  <div className="text-white">
                    <h2 className="text-base font-[500] leading-[27px] mb-2">
                      {navItem?.offers}
                    </h2>
                  </div>
                  <span>
                    <Image src={offer} alt="help line image" />
                  </span>
                </div>
                <div className="flex justify-end gap-3 mb-[22.5px] leading-[22px]">
                  <div className="text-white">
                    <h2 className="text-base font-[500] leading-[27px] mb-2">
                      {navItem?.tour}
                    </h2>
                  </div>
                  <span>
                    <Image src={camera} alt="help line image" />
                  </span>
                </div>
              </div>
            </div>
          </SkeletonSingleProperty>
          <div className="flex justify-center items-center">
            <button
              className="md:hidden border-t hex-btn-outline text-white relative p-2 w-3/4 flex justify-center items-center my-8"
              onClick={handleArrangeMeeting}
            >
              <h1 className="uppercase font-asul text-white text-lg flex items-center z-30">
                <Image src={calender} alt="calender" />
                {props?.homeData?.lang?.meetings?.title}
              </h1>
            </button>
          </div>
        </div>
      </div>
    )
  ) : lang === "en" ? (
    <div className="font-extralight mt-0 text-[#ffff] font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
      <div className={`pt-[68px] md:mt-0 dropdown_background w-full h-full`}>
        <SkeletonSingleProperty className="w-full !pb-0">
          <span
            onClick={closeDropdown}
            className="absolute top-5 right-5 md:hidden"
          >
            <Image src={backsapce} alt="backspace" />
          </span>
          <div className="px-5 flex flex-col gap-5 justify-center md:grid grid-cols-2 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <span>
                  <Image src={helpLine} alt="help line image" />
                </span>
                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2">
                    {navItem?.whyUs}
                  </h2>
                  <ul className="text-xs flex flex-col gap-1">
                    <li className="uppercase leading-[15.3px]">
                      <Link href="/about" onClick={handleClose}>
                        {navItem?.aboutUs}
                      </Link>
                    </li>
                    <li className="uppercase leading-[15.3px]">
                      <Link href="/contact-us" onClick={handleClose}>
                        {navItem?.contactUs}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <span>
                  <Image src={developerIcon} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase">
                    {navItem?.developers}
                  </h2>
                  <ul className="text-xs flex flex-col gap-1">
                    {developersData
                      ?.map((developer) => (
                        <Link
                          href={`/developers/${developer._id}`}
                          key={developer._id}
                          onClick={handleClose}
                        >
                          <li className="leading-[15.3px]">{developer.name}</li>
                        </Link>
                      ))
                      .slice(0, 6)}
                    <Link
                      href={"/developers"}
                      onClick={handleClose}
                      className="text-xs leading-[15.3px]"
                    >
                      {navItem?.all}
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={home} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2">
                    {navItem?.projects}
                  </h2>
                  <ul className="flex flex-col gap-1">
                    <Link
                      href={
                        "/properties/ready?developmentTypes=6519855e79fcdc27efbf85cd"
                      }
                      onClick={handleClose}
                    >
                      <li className="text-xs leading-[15.3px]">
                        {" "}
                        {navItem?.ready}
                      </li>
                    </Link>
                    <Link
                      href={
                        "/properties/off-plan?developmentTypes=651984de79fcdc27efbf859b"
                      }
                      onClick={handleClose}
                    >
                      <li className="text-xs leading-[15.3px]">
                        {" "}
                        {navItem?.offPlan}
                      </li>
                    </Link>
                    <Link href="/properties" onClick={handleClose}>
                      <li className="text-xs leading-[15.3px]">
                        {navItem?.allProject}
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={offer} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2">
                    {navItem?.offers}
                  </h2>
                </div>
              </div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={camera} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2">
                    {navItem?.tour}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SkeletonSingleProperty>
        <div className="flex justify-center items-center">
          <button
            className="md:hidden border-t hex-btn-outline text-white relative p-2 w-3/4 flex justify-center items-center my-8"
            onClick={handleArrangeMeeting}
          >
            <h1 className="uppercase font-asul text-white text-lg flex items-center z-30">
              <Image src={calender} alt="calender" className="mr-3" />
              {props?.homeData?.lang?.meetings?.title}
            </h1>
          </button>
        </div>
      </div>

      {/**right side */}
      <div className="w-full h-full relative hidden md:block bg-cover">
        <Image src={investment} alt="" className="h-full w-full" />
        <div className="w-full h-full absolute-center px-10 bg-[#171717] bg-opacity-30 rounded-md flex flex-col justify-center p-5">
          <div className="bg-black bg-opacity-70 ml-10 mr-10 px-10 py-6 rounded-lg">
            <p className="text-[12px] font-medium text-[#D4B970] font-roboto leading-[14px]">
              {propertySelection?.insideTitle}
            </p>
            <p className="text-[11px] font-extralight font-montserrat text-white pb-1">
              {propertySelection?.insideSubTitle}
            </p>
            <button className="bg-[#bea04e] rounded-md px-1 py-[1x] w-[70%] border border-1 border-[#bea04e] hover:bg-transparent">
              <span className="text-white py-1 flex justify-center items-center text-[12px] font-normal font-montserrat ">
                {propertySelection?.insideButton}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="font-extralight mt-0 text-[#ffff] font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
      <div className={`pt-[68px] md:mt-0 dropdown_background w-full h-full`}>
        <SkeletonSingleProperty className="w-full !pb-0">
          <span
            onClick={closeDropdown}
            className="absolute top-5 left-5 rotate-180 md:hidden"
          >
            <Image src={backsapce} alt="backspace" />
          </span>
          <div className="pr-[28px] my-2 flex flex-col gap-6 justify-center md:grid grid-cols-2 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 justify-end">
                <div className="text-white ml-[10.5px] text-right">
                  <h2 className="text-base font-[500] leading-[27px] mb-2">
                    {navItem?.whyUs}
                  </h2>
                  <ul className="text-xs flex flex-col gap-1">
                    <li className="uppercase leading-[15.3px] text-right">
                      <Link href="/about" onClick={handleClose}>
                        {navItem?.aboutUs}
                      </Link>
                    </li>
                    <li className="uppercase leading-[15.3px] text-right">
                      <Link href="/contact-us" onClick={handleClose}>
                        {navItem?.contactUs}
                      </Link>
                    </li>
                  </ul>
                </div>
                <span>
                  <Image src={helpLine} alt="help line image" />
                </span>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2 uppercase text-right">
                    {navItem?.developers}
                  </h2>
                  <ul className="text-xs flex flex-col gap-1">
                    {developersData
                      ?.map((developer) => (
                        <Link
                          href={`/developers/${developer._id}`}
                          key={developer._id}
                          onClick={handleClose}
                        >
                          <li className="leading-[15.3px] text-right">
                            {developer.name}
                          </li>
                        </Link>
                      ))
                      .slice(0, 6)}
                    <Link
                      href={"/developers"}
                      onClick={handleClose}
                      className="text-xs leading-[15.3px] text-right"
                    >
                      {navItem?.all}
                    </Link>
                  </ul>
                </div>
                <span>
                  <Image src={developerIcon} alt="help line image" />
                </span>
              </div>
            </div>
            <div>
              <div className="flex gap-2 justify-end mb-[22.5px] leading-[22px]">
                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2 text-right">
                    {navItem?.projects}
                  </h2>
                  <ul className="flex flex-col gap-1">
                    <Link
                      href={
                        "/properties/ready?developmentTypes=6519855e79fcdc27efbf85cd"
                      }
                      onClick={handleClose}
                    >
                      <li className="text-xs leading-[15.3px] text-right">
                        {" "}
                        {navItem?.ready}
                      </li>
                    </Link>
                    <Link
                      href={
                        "/properties/off-plan?developmentTypes=651984de79fcdc27efbf859b"
                      }
                      onClick={handleClose}
                    >
                      <li className="text-xs leading-[15.3px] text-right">
                        {" "}
                        {navItem?.offPlan}
                      </li>
                    </Link>
                    <Link href="/properties" onClick={handleClose}>
                      <li className="text-xs leading-[15.3px] text-right">
                        {navItem?.allProject}
                      </li>
                    </Link>
                  </ul>
                </div>
                <span>
                  <Image src={home} alt="help line image" />
                </span>
              </div>
              <div className="flex gap-2 justify-end mb-[22.5px] leading-[22px]">
                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2 text-right">
                    {navItem?.offers}
                  </h2>
                </div>
                <span>
                  <Image src={offer} alt="help line image" />
                </span>
              </div>
              <div className="flex gap-2 justify-end mb-[22.5px] leading-[22px]">
                <div className="text-white ml-[10.5px]">
                  <h2 className="text-base font-[500] leading-[27px] mb-2 text-right">
                    {navItem?.tour}
                  </h2>
                </div>
                <span>
                  <Image src={camera} alt="help line image" />
                </span>
              </div>
            </div>
          </div>
        </SkeletonSingleProperty>
        <div className="flex gap-2 justify-center items-center">
          <button
            className="md:hidden border-t hex-btn-outline text-white relative p-2 w-3/4 flex justify-center items-center my-8 text-right"
            onClick={handleArrangeMeeting}
          >
            <h1 className="uppercase font-asul text-white text-lg flex items-center z-30 gap-2">
              {props?.homeData?.lang?.meetings?.title}
              <Image src={calender} alt="calender" />
            </h1>
          </button>
        </div>
      </div>

      {/**right side */}
      <div className="w-full h-full relative hidden md:block bg-cover">
        <Image src={investment} alt="" className="h-full w-full" />
        <div className="w-full h-full absolute-center px-10 bg-[#171717] bg-opacity-30 rounded-md flex flex-col justify-center p-5">
          <div className="bg-black bg-opacity-70 ml-10 mr-10 px-10 py-6 rounded-lg">
            <p className="text-[12px] font-medium text-[#D4B970] font-roboto leading-[14px]">
              {propertySelection?.insideTitle}
            </p>
            <p className="text-[11px] font-extralight font-montserrat text-white pb-1">
              {propertySelection?.insideSubTitle}
            </p>
            <button className="bg-[#bea04e] rounded-md px-1 py-[1x] w-[70%] border border-1 border-[#bea04e] hover:bg-transparent">
              <span className="text-white py-1 flex justify-center items-center text-[12px] font-normal font-montserrat ">
                {propertySelection?.insideButton}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
