"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Skeleton from "./prev/Skeleton/Skeleton";
import logo from "@/public/images/global/logo.png";
import calender from "@/public/images/global/calendar-outline.svg";
import { useQuery } from "@tanstack/react-query";
import { useStateValue } from "@/states/StateProvider";
import { instance } from "./prev/services/apiFunctions";
import Dropdown from "./Dropdown";

const Navbar = (props) => {
  // const [{ lang }, dispatch] = useStateValue();
  const [dropDown, setDropDown] = useState(false);
  const [navPoint, setNavPoint] = useState(false);

  const lang = "en";

  const getAllProperty = async () => {
    const data = await instance
      .get("/en/properties", {
        timeout: 5000,
      })
      .then((data) => data.data.data.properties);
    return data;
  };

  const getAllFilter = async () => {
    const data = await instance
      .get("/en/data/filter-list", {
        timeout: 5000,
      })
      .then((data) => data.data.data);
    return data;
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["all-property"],
    queryFn: getAllProperty,
  });

  const { data: filterData } = useQuery({
    queryKey: ["filter-data"],
    queryFn: getAllFilter,
  });

  if (isLoading) {
    return "Loading data, please wait";
  }

  if (isError) {
    return error.message;
  }

  const switchLang = (language) => {
    dispatch({ type: "setLang", item: language });
  };

  const switchPropertyToView = (toView) => {
    dispatch({ type: "setPropertyToView", item: toView });
  };
  const handleArrangeMeeting = (e) => {
    dispatch({ type: "setShowModal", item: true });
  };

  const handleMenu = (e) => {
    e.preventDefault();
    setDropDown(!dropDown);
    dispatch({ type: "setDropdownOpen", item: dropDown });
  };

  const langList = filterData?.langList;

  //Nav animation logic
  const animation = document.querySelector(".animation");
  const navItems = document.querySelectorAll(".nav h1");

  let fixedItem = null;

  function moveAnimation(targetElement) {
    const targetRect = targetElement.getBoundingClientRect();
    const navRect = document.querySelector(".nav").getBoundingClientRect();
    const leftOffset = targetRect.left - navRect.left;
    const rightOffset = navRect.right - targetRect.right;

    animation.style.left = leftOffset + "px";
    animation.style.width = targetRect.width + "px";
    animation.style.opacity = 1;
  }

  function resetAnimation() {
    if (fixedItem === null) {
      animation.style.opacity = 1;
    }
  }

  function handleClick(item) {
    if (fixedItem === item) {
      fixedItem = null;
      resetAnimation();
    } else {
      fixedItem = item;
      moveAnimation(item);
      animation.style.marginLeft = "0rem";
    }
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      moveAnimation(item);
    });

    item.addEventListener("mouseleave", () => {
      if (fixedItem === null) {
        resetAnimation();
      }
    });

    item.addEventListener("click", () => {
      handleClick(item);
    });
  });

  return (
    <section className={props.className}>
      <Skeleton className="py-6 justify-between items-center px-5">
        <div className="flex items-center z-50">
          <div
            className="flex flex-wrap mr-5 w-[2.5rem] h-[2.5rem] md:w-12 md:h-12 group cursor-pointer transition duration-500 relative group"
            onClick={handleMenu}
          >
            <div className="absolute -right-1 -top-1 group-hover:top-7 group-hover:right-8 scale-110 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500">
              <div className="w-full h-full rounded-full bg-white bg-opacity-50"></div>
            </div>
            <div className="absolute -right-1 -bottom-2 group-hover:bottom-5 w-1/2 h-1/2 p-1 transition-all ease-in-out duration-500">
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
              <h1 className="uppercase font-asul text-white text-lg flex items-center z-30">
                <Image src={calender} alt="calender" className="mr-3" />
                Arrange a Meeting
              </h1>
            </button>
            <div
              className="flex items-center nav"
              onMouseLeave={() => setNavPoint(false)}
            >
              <h1
                className="uppercase cursor-pointer font-openSans text-white mx-4"
                onMouseEnter={() => setNavPoint(true)}
              >
                <Link href={"/properties/off-plan"}>Off Plan</Link>
              </h1>
              <h1
                className="uppercase cursor-pointer font-openSans text-white mx-4"
                onMouseEnter={() => setNavPoint(true)}
              >
                <Link href={"/properties/ready"}>Ready</Link>
              </h1>
              <h1
                className="uppercase cursor-pointer font-openSans text-white mx-4"
                onMouseEnter={() => setNavPoint(true)}
              >
                <Link href={"/properties"}>All Properties</Link>
              </h1>
              {navPoint ? (
                <div
                  className="animation2 animation2 start-home"
                  style={{ transition: "1s" }}
                ></div>
              ) : (
                ""
              )}

              <div className="line bg-gradient-to-l from-white"></div>
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
          <div>
            <select
              name="language"
              id="language"
              onChange={(e) => switchLang(e.target.value)}
              className="rounded-2xl px-2 uppercase bg-[#F1BF3F]"
            >
              <option value={lang} className="rounded-2xl bg-[#F1BF3F] hidden">
                {lang}
              </option>
              {console.log(langList)}
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

export default Navbar;
