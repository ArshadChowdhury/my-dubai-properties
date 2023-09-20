import React from "react";

import { AiOutlineSearch } from "react-icons/ai";
import filter from "../../../assets/images/global/filter.png";
import Image from "next/image";
import { useEffect } from "react";
import { useStateValue } from "@/components/prev/states/StateProvider";

const FilterSearchInput = () => {
  const [{ filterOpen }, dispatch] = useStateValue();

  const handleScroll = () => {
    if (filterOpen) {
      dispatch({ type: "setFilterOpen", item: false });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      dispatch({ type: "setFilterOpen", item: false });
    };
  }, []);

  return (
    <div className="mb-1 mt-4 w-full">
      <div className="relative mb-1 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] pl-10 min-w-0 flex-auto rounded-l border-[.5px] !border-r-0 border-solid border-white bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-[#f1bf3f] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1"
        />
        <p className="absolute top-[11px] left-[11px] text-white text-[22px]">
          <AiOutlineSearch />
        </p>

        <button
          className="relative z-[2] flex items-center filter-background px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out border-neutral-300"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={() => dispatch({ type: "setFilterOpen", item: true })}
        >
          <Image src={filter} alt="filter" />
          <span className="ml-2 font-montserrat font-semibold">Filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSearchInput;
