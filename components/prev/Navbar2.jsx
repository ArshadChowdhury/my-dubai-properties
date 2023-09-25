import { useState } from "react";
import Skeleton from "./Skeleton/Skeleton";
import logo from "../../components/prev/assets/images/global/logo.png";
import calender from "../../components/prev/assets/images/global/calendar-outline.svg";
import { useStateValue } from "./states/StateProvider";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar2 = (props) => {
  const [dropDown, setDropDown] = useState(true);
  const { filterListData, homeData } = props;
  const [{ lang, isDropdownMenuOpen }, dispatch] = useStateValue();
  const pathname = usePathname();

  const navData = homeData?.lang?.navber;

  const switchLang = (language) => {
    dispatch({ type: "setLang", item: language });
  };

  const handleArrangeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: true });
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setDropDown((prev) => !prev);
    dispatch({ type: "setDropdownOpen", item: dropDown });
  };

  const langList = homeData?.langList;

  return (
    <section className={props.className}>
      <Skeleton className="justify-between items-center px-5">
        <div className="flex items-center z-50">
          <div
            className="flex flex-wrap mr-5 w-[2.5rem] h-[2.5rem] md:w-12 md:h-12 group cursor-pointer transition duration-500 relative group"
            onClick={handleMenu}
          >
            <div className="absolute -right-1 -top-1 group-hover:top-7 group-hover:right-8 scale-110 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500 ">
              <div className="w-full h-full rounded-full bg-white bg-opacity-50"></div>
            </div>
            <div className="absolute -right-1 -bottom-2 group-hover:bottom-5 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500 ">
              <div className="w-1/2 h-1/6 rounded-2xl bg-white bg-opacity-50"></div>
            </div>
            <div className="w-1/2 h-1/2 scale-125 p-1 transition duration-500 ">
              <div className="w-full h-full border-2 rounded-full border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 relative">
              <div className="w-full h-full border-2 rounded rounded-bl-none border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 ">
              <div className="w-full h-full border-2 rounded rounded-tr-none border-[#F1BF3F]"></div>
            </div>
            <div className="w-1/2 h-1/2 p-1 transition duration-500 ">
              <div className="w-full h-full scale-125 border-2 rounded rounded-tl-none border-[#F1BF3F]"></div>
            </div>
          </div>
          <div
            className={`w-[100px] md:w-auto ${
              props.type === "home" ? "hidden" : "block"
            }`}
          >
            <Link href={"/"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div
          className={`${
            props.type === "home"
              ? "flex flex-col items-end justify-end z-50"
              : "flex items-center z-50"
          }`}
        >
          <div
            className={`hidden ${
              props.type === "home"
                ? "order-2 md:flex items-center"
                : "md:flex items-center mr-5"
            }`}
          >
            <button
              className="hex-btn-outline text-white relative p-2 mx-6"
              onClick={handleArrangeMeeting}
            >
              <h1 className="flex gap-3 uppercase font-asul text-white text-lg items-center z-30">
                <Image src={calender} alt="calender" />
                {navData?.arrangeMeeting}
              </h1>
            </button>
            <div className="flex items-center nav">
              <h1
                className={`uppercase cursor-pointer font-openSans mx-4 ${
                  pathname == "/properties/off-plan"
                    ? "text-[#F1BF3F]"
                    : "text-white"
                }`}
              >
                <Link
                  href={
                    "/properties/off-plan?developmentTypes=63feff816023b40ac4385fba"
                  }
                >
                  {navData?.offPlan}
                </Link>
              </h1>
              <h1
                className={`uppercase cursor-pointer font-openSans mx-4 ${
                  pathname == "/properties/ready"
                    ? "text-[#F1BF3F]"
                    : "text-white"
                }`}
              >
                <Link
                  href={
                    "/properties/ready?developmentTypes=63feffa56023b40ac4385fec"
                  }
                >
                  {navData?.ready}
                </Link>
              </h1>

              <h1
                className={`uppercase cursor-pointer font-openSans mx-4 ${
                  pathname == "/properties" ? "text-[#F1BF3F]" : "text-white"
                }`}
              >
                <Link href={"/properties"}> {navData?.allProjects}</Link>
              </h1>
              {/* <div className="animation start-home"></div> */}
              {/* <div className="line bg-gradient-to-l from-white"></div> */}
            </div>
            {/* <div className="flex items-center nav">
              <h1 className="uppercase cursor-pointer font-openSans text-white mx-4">
                Off Plan
              </h1>
              <h1 className="uppercase cursor-pointer font-openSans text-white mx-4">
                Ready
              </h1>
              <h1 className="uppercase cursor-pointer font-openSans text-white ml-4">
                All Projects
              </h1>
              <div className="animation cursor-pointer start-home"></div>
            </div> */}
          </div>
          <div className={`${props.type === "home" ? "pt-5" : ""}`}>
            <select
              name="language"
              id="language"
              onChange={(e) => switchLang(e.target.value)}
              className="rounded-2xl px-2 uppercase bg-[#F1BF3F]"
            >
              <option value={lang} className="rounded-2xl bg-[#F1BF3F] hidden">
                {lang}
              </option>
              {langList?.map((lang) => (
                <option
                  value={lang.value}
                  key={lang.value}
                  className="rounded-2xl bg-[#F1BF3F]"
                >
                  {lang.value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Skeleton>
    </section>
  );
};

export default Navbar2;
