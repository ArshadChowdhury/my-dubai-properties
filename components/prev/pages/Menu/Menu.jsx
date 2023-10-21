import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import the ScrollTrigger plugin
import { useStateValue } from "../../states/StateProvider";
import Dropdown from "@/components/Dropdown";
import { instance } from "../../services/apiFunctions";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Menu = (props) => {
  const [{ isDropdownMenuOpen, showModal, lang }, dispatch] = useStateValue();
  const menuRef = useRef();

  // let location = useLocation();

  const closeDropdown = () => {
    dispatch({
      type: "setDropdownOpen",
      item: false,
    });
  };

  useEffect(() => {
    closeDropdown();
  }, [showModal]);

  useLayoutEffect(() => {
    let handle = (e) => {
      const distanceFromTop = window.scrollY;

      if (menuRef.current) {
        const menuHeight = menuRef.current?.offsetHeight;
        const menuOffsetTop = menuRef.current?.offsetTop;
        if (distanceFromTop > menuHeight + menuOffsetTop) {
          closeDropdown();
        }
      }
      if (!menuRef.current?.contains(e.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handle);
    document.addEventListener("scroll", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("scroll", handle);
    };
  }, [isDropdownMenuOpen, menuRef]);

  useLayoutEffect(() => {
    if (isDropdownMenuOpen) {
      if (props.mobileView) {
        gsap.fromTo(
          menuRef.current,
          {
            right: "-100%",
            top: "0",
            opacity: 0,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          },
          {
            right: "0",
            top: "0",
            opacity: 1,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          }
        );
      } else {
        gsap.fromTo(
          menuRef.current,
          {
            top: "0",
            opacity: 0,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          },
          {
            top: `${
              props?.pathname == "/" || props?.pathname.includes("/properties/")
                ? "72px"
                : "88px"
            }`,
            opacity: 1,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          }
        );
      }
    } else {
      if (props.mobileView) {
        gsap.fromTo(
          menuRef.current,
          {
            right: "0",
            top: "0",
            opacity: 1,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          },
          {
            right: "-100%",
            top: "0",
            opacity: 0,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          }
        );
      } else {
        gsap.fromTo(
          menuRef.current,
          {
            top: "140px",
            opacity: 1,
            duration: 0.7,
            ease: "power1.out",
            // smooth: true,
          },
          {
            top: "0",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
            // smooth: true,
          }
        );
      }
    }
  }, [isDropdownMenuOpen]);

  return (
    <div
      className={`${
        isDropdownMenuOpen
          ? "w-[100vw] h-[100vh] z-[100] md:h-[330px] bg-gradient-to-r from-[#000F1D] to-[#0B233A] fixed right-0 top-0 transition-all"
          : "hidden"
      } `}
      ref={menuRef}
    >
      {/* {lang === "en" ? (
        <span
          onClick={closeDropdown}
          className="absolute top-5 right-5 md:hidden"
        >
          <Image src={backsapce} alt="backspace" />
        </span>
      ) : (
        <span
          onClick={closeDropdown}
          className="absolute top-5 left-5 rotate-180 md:hidden"
        >
          <Image src={backsapce} alt="backspace" />
        </span>
      )} */}

      <Dropdown
        pathname={props?.pathname}
        homeData={props?.homeData}
        filterListData={props?.filterListData}
        // developersData={props.developersData}
        isMobileView={props?.mobileView}
      />
    </div>
  );
};

export default Menu;
