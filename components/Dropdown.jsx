import Link from "next/link";

import investment from "./prev/assets/images/global/investment.png";
import SkeletonSingleProperty from "./prev/Skeleton/SkeletonSingleProperty";
import helpLine from "./prev/assets/images/global/help-circle-outline.png";
import developerIcon from "./prev/assets/images/global/construct.png";
import home from "./prev/assets/images/global/home.png";
import camera from "./prev/assets/images/global/camera-sharp.png";
import offer from "./prev/assets/images/global/pricetag-outline.png";
import { useStateValue } from "@/components/prev/states/StateProvider";

import calender from "./prev/assets/images/global/calendar-outline.svg";
import Image from "next/image";

const Dropdown = (props) => {
  const developersData = props.developersData;
  const homeData = props.homeData;
  const [{}, dispatch] = useStateValue();
  const navItem = homeData?.lang?.menu;
  const developers = developersData?.developers?.data;
  const propertySelection = homeData?.lang?.propertySelection;

  const handleClose = () => {
    dispatch({ type: "setDropdownOpen", item: false });
  };

  const handleArrangeMeeting = (e) => {
    e.preventDefault();
    dispatch({ type: "setShowModal", item: true });
  };

  return (
    <div className="font-extralight mt-[68px] md:-mt-1 text-[#ffff] font-montserrat flex flex-col md:flex-row justify-between items-center w-full h-full shadow-2xl">
      <div className={`md:mt-0 md:dropdown_background w-full h-full`}>
        <SkeletonSingleProperty className="w-full !pb-0">
          <div className="pl-5 flex flex-col gap-5 justify-center md:grid grid-cols-2 w-full">
            <div className="flex flex-col gap-5">
              <div className="flex">
                <span>
                  <Image src={helpLine} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    {navItem?.whyUs}
                  </h2>
                  <ul className="text-[10.5px]">
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
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2 uppercase">
                    {navItem?.developers}
                  </h2>
                  <ul className="text-[10.5px]">
                    {developers?.map((developer) => (
                      <Link
                        href={`/developers/${developer._id}`}
                        key={developer._id}
                        onClick={handleClose}
                      >
                        <li className="leading-[15.3px]">{developer.name}</li>
                      </Link>
                    ))}
                    <Link
                      href={"/developers"}
                      onClick={handleClose}
                      className="leading-[15.3px]"
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
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    {navItem?.projects}
                  </h2>
                  <ul className="text-[10.5px]">
                    <Link
                      href={
                        "/properties/ready?developmentTypes=63feffa56023b40ac4385fec"
                      }
                      onClick={handleClose}
                    >
                      <li className="leading-[15.3px]"> {navItem?.ready}</li>
                    </Link>
                    <Link
                      href={
                        "/properties/off-plan?developmentTypes=63feff816023b40ac4385fba"
                      }
                      onClick={handleClose}
                    >
                      <li className="leading-[15.3px]"> {navItem?.offPlan}</li>
                    </Link>
                    <Link href="/properties" onClick={handleClose}>
                      <li className="leading-[15.3px]">
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
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    {navItem?.offers}
                  </h2>
                </div>
              </div>
              <div className="flex mb-[22.5px] leading-[22px]">
                <span>
                  <Image src={camera} alt="help line image" />
                </span>

                <div className="text-white ml-[10.5px]">
                  <h2 className="text-[18px] font-[500] leading-[27px] mb-2">
                    {navItem?.tour}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </SkeletonSingleProperty>
        <div className="flex justify-center items-center">
          <button
            className="md:hidden border-t hex-btn-outline  text-white relative p-2  w-3/4 flex justify-center items-center"
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
      <div className="w-full h-full relative hidden md:block">
        <Image src={investment} alt="" className="h-full w-full " />
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
