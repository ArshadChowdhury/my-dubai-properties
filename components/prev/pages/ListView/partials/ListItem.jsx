// import React, { useState } from "react";

// import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
// import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
// import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
// import iconBed from "../../../assets/images/property details page/icon-bed.svg";
// import ButtonOutline from "../../../components/ButtonOutline";
// import { Link, useNavigate } from "react-router-dom";
// import BtnItem from "../../../components/BtnItem";

// const ListItem = (props) => {
//   const [isHoveredCard, setIsHoveredCard] = useState(false);
//   const onMouseEnterHandler = () => {
//     props.setIsHovered(true);
//     props.setIsHoveredCard(true);
//     setIsHoveredCard(true);
//   };
//   const onMouseLeaveHandler = () => {
//     props.setIsHovered(false);
//     props.setIsHoveredCard(false);
//     setIsHoveredCard(false);
//   };
//   const navigate = useNavigate();
//   return (
//     <Link
//       to={`/properties/${props.id}`}
//       onClick={() => navigate(`/properties/${props.id}`)}
//       className={` ${isHoveredCard ? "hovered" : ""}`}
//     >
//       <div
//         className="px-1 py-3 w-full"
//         onMouseEnter={onMouseEnterHandler}
//         onMouseLeave={onMouseLeaveHandler}
//       >
//         <div className="flex flex-wrap border border-[#D9D9D9] rounded-lg overflow-clip p-1">
//           <div className="w-[40%] rounded-md overflow-hidden">
//             <img
//               src={props.coverImage[0].path}
//               alt="cover"
//               className="h-full rounded-l-md"
//             />
//           </div>
//           <div className="w-[60%] p-2 md:p-5">
//             <h1 className="font-roboto text-[15px] md:text-xl text-white">
//               {props.propertyName} at {props.developerName}
//             </h1>
//             <div className="flex  w-full justify-center  items-center">
//               <div className="md:flex">
//                 <div className="mr-4">
//                   <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
//                     <img src={iconLocation} alt="building" className="mr-1" />
//                     {props.areaName}
//                   </p>
//                 </div>
//                 <div className="mr-4">
//                   <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
//                     <img src={iconBuilding} alt="building" className="mr-1" />
//                     {props.developerName}
//                   </p>
//                 </div>
//               </div>
//               <div className="md:flex">
//                 <div className="mr-4">
//                   <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
//                     <img src={iconVillas} alt="building" className="mr-1" />
//                     {props.propertyType}
//                   </p>
//                 </div>
//                 <div className="mr-4">
//                   <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
//                     <img src={iconBed} alt="building" className="mr-1" />
//                     {props.unitSize}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <p
//               className={`font-montserrat text-white leading-7 my-4 hidden md:block`}
//             >
//               {props.description}
//             </p>
//             <div className="flex py-2">
//               <div className="w-full mr-5">
//                 <BtnItem
//                   btnText="Details"
//                   className="mr-2 basis-1/2"
//                   to={`/properties/${props.id}`}
//                   navigate={`/properties/${props.id}`}
//                 />
//               </div>
//               <div className="w-full">
//                 <ButtonOutline btnText="Enquiry" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default ListItem;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";
import ButtonOutline from "@/components/prev/ButtonOutline";
import Link from "next/link";
import BtnItem from "@/components/prev/BtnItem";
import ButtonOutline2 from "@/components/prev/ButtonOutline2";
import Image from "next/image";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useRouter } from "next/navigation";

const ListItem = (props) => {
  const router = useRouter();
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [{ showContactModal }, dispatch] = useStateValue();
  const onMouseEnterHandler = () => {
    props.setIsHovered && props.setIsHovered(true);
    setIsHoveredCard(true);
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

  const handleModalOpen = (id, propertyName) => {
    dispatch({ type: "setShowContactModal", item: true });
    dispatch({ type: "setContactModalInfo", item: { id, propertyName } });
  };

  const onMouseLeaveHandler = () => {
    props.setIsHovered && props.setIsHovered(false);
    setIsHoveredCard(false);
  };
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const inlineStyles = {
    background: hovered ? "#001324" : "",
    transition: "backgroundColor 0.3s",
  };
  // const onMouseEnterHandler = () => {
  //   props.setIsHovered(true);
  //   props.setIsHoveredCard(true);
  //   setIsHoveredCard(true);
  // };
  // const onMouseLeaveHandler = () => {
  //   props.setIsHovered(false);
  //   props.setIsHoveredCard(false);
  //   setIsHoveredCard(false);
  // };

  return (
    <div className={` ${isHoveredCard ? "hovered" : ""}`}>
      <div
        className="px-1 py-3 w-full"
        // onMouseEnter={onMouseEnterHandler}
        // onMouseLeave={onMouseLeaveHandler}
      >
        <div className="flex flex-wrap border border-[#D9D9D9] rounded-lg overflow-clip p-1">
          <div className="w-[40%] rounded-md overflow-hidden">
            <Image
              priority
              onClick={() => router.push(`/properties/${props.id}`)}
              width={900}
              height={500}
              src={props.coverImage[0]?.path || "/placeholder-image.png"}
              alt="cover"
              className="h-full rounded-l-md cursor-pointer bg-cover aspect-[16/9]"
            />
          </div>
          <div
            className="w-[60%] p-2 md:p-5"
            style={inlineStyles}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <h1 className="font-roboto text-[15px] md:text-xl text-white cursor-pointer w-fit hover:text-[#F1BF3F]">
              <Link href={`/properties/${props.id}`}>
                {isMobileView
                  ? props.propertyName.length < 20
                    ? props.propertyName
                    : props.propertyName.slice(0, 20).concat("...")
                  : props.propertyName.length < 60
                  ? props.propertyName
                  : props.propertyName.slice(0, 60).concat("...")}
              </Link>
            </h1>
            <div className="flex gap-6 w-full items-center md:mt-2">
              <div className="md:flex gap-6">
                <div>
                  <p className="flex gap-1 font-montserrat text-white text-[9px] md:text-sm leading-4 my-2">
                    <Image src={iconLocation} alt="building" />
                    <Link
                      href={`/property-area/${props.property.propertyArea.id}`}
                    >
                      <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                        {props.areaName}
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="flex gap-1 font-montserrat text-white text-[9px] md:text-sm leading-4 my-2">
                    <Image src={iconBuilding} alt="building" className="mr-1" />
                    <Link
                      href={`/developers/${props?.property?.developerType?.id}`}
                    >
                      <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                        {props.developerName}
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="md:flex gap-6">
                <div>
                  <p className="flex gap-1 font-montserrat text-white text-[9px] md:text-sm leading-4 my-2">
                    <Image src={iconVillas} alt="building" className="mr-1" />
                    <Link
                      href={`/property-type/${props.property.propertyType.id}`}
                    >
                      <span className="hover:border-b-[0.5px] hover:border-b-[#ffd15f]">
                        {props.propertyType}
                      </span>
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="flex gap-1 font-montserrat text-white text-[9px] md:text-sm leading-4 my-2">
                    <Image src={iconBed} alt="building" className="mr-1" />
                    {props.unitSize}
                  </p>
                </div>
              </div>
            </div>
            <p
              className={`font-montserrat text-white leading-7 my-4 hidden md:block`}
            >
              {props.description.length < 380
                ? props.description
                : props.description.slice(0, 380).concat("...")}
              {/* {props.description} */}
            </p>
            <div className="flex w-full md:w-[450px] gap-2 md:gap-10">
              <BtnItem
                btnText="Details"
                className="basis-1/2"
                to={`/properties/${props.id}`}
              />
              <button
                onClick={() => handleModalOpen(props.id, props.propertyName)}
                className={`border basis-1/2 border-[#283646] hover:border-transparent rounded-[5px] w-full md:w-[15rem]`}
              >
                <div className="w-full h-full flex justify-around items-center bg-gradient-to-r from-[#0A223A] via-[#214265] to-[#0A223A]   text-white rounded text-xs md:text-sm font-montserrat py-2 uppercase">
                  Enquiry
                </div>
              </button>
              {/* <div className="w-full md:w-[450px] mr-5">
                <BtnItem
                  btnText="Details"
                  className="w-full"
                  to={`/properties/${props.id}`}
                />
              </div>
              <div className="w-full">
                <ButtonOutline2
                  link={() => router.push(`/contact-us`)}
                  btnText="Enquiry"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
