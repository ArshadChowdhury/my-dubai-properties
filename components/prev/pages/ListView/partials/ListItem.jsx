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

import React, { useState } from "react";
import { motion } from "framer-motion";

import iconBuilding from "../../../assets/images/property details page/icon-building.svg";
import iconLocation from "../../../assets/images/property details page/icon-locate.svg";
import iconVillas from "../../../assets/images/property details page/icon-villas.svg";
import iconBed from "../../../assets/images/property details page/icon-bed.svg";
import ButtonOutline from "@/components/prev/ButtonOutline";
import { Link, useNavigate } from "react-router-dom";
import BtnItem from "@/components/prev/BtnItem";
import ButtonOutline2 from "@/components/prev/ButtonOutline2";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ListItem = (props) => {
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const inlineStyles = {
    background: hovered ? "#001324" : "",
    transition: "background-color 0.3s",
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
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
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
              onClick={() => router.push(`/properties/${props.id}`)}
              width={900}
              height={500}
              src={props.coverImage[0].path}
              alt="cover"
              className="h-full rounded-l-md cursor-pointer"
            />
          </div>
          <div
            className="w-[60%] p-2 md:p-5"
            style={inlineStyles}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
          >
            <h1
              onClick={() => router.push(`/properties/${props.id}`)}
              className="font-roboto text-[15px] md:text-xl text-white cursor-pointer w-fit"
            >
              {props.propertyName} at {props.developerName}
            </h1>
            <div className="flex  w-full items-center md:mt-2">
              <div className="md:flex">
                <div className="mr-4">
                  <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
                    <Image src={iconLocation} alt="building" className="mr-1" />
                    {props.areaName}
                  </p>
                </div>
                <div className="mr-4">
                  <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
                    <Image src={iconBuilding} alt="building" className="mr-1" />
                    {props.developerName}
                  </p>
                </div>
              </div>
              <div className="md:flex">
                <div className="mr-4">
                  <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
                    <Image src={iconVillas} alt="building" className="mr-1" />
                    {props.propertyType}
                  </p>
                </div>
                <div className="mr-4">
                  <p className="font-montserrat text-white text-[9px] md:text-sm leading-4 flex my-2 pr-3">
                    <Image src={iconBed} alt="building" className="mr-1" />
                    {props.unitSize}
                  </p>
                </div>
              </div>
            </div>
            <p
              className={`font-montserrat text-white leading-7 my-4 hidden md:block`}
            >
              {props.description}
            </p>
            <div className="flex py-2">
              <div className="w-full md:w-[450px] mr-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
