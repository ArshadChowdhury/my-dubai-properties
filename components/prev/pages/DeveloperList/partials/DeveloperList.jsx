// import React from "react";
// import Skeleton from "../../../components/Skeleton/Skeleton";
// import DeveloperListItem from "./DeveloperListItem";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import InfiniteScroll from "react-infinite-scroll-component";

// const DeveloperList = (props) => {
//   const [filterData, setFilterData] = useState([]);
//   const [allDev, setAllDev] = useState([]);
//   const [hasMore, setHasMore] = useState(true);

//   // const fetchMore = () => {
//   //   let pageNumber = 2;
//   //   return function () {
//   //     axios
//   //       .get(
//   //         `http://52.77.121.171:3008/api/v1/en/developers?page=${pageNumber}&size=8`
//   //       )
//   //       .then((response) => {
//   //         setAllDev(allDev.concat(response.data.data.developers.data));
//   //       })
//   //       .catch((error) => {
//   //         console.error(error);
//   //       });
//   //     pageNumber += 1;
//   //   };
//   // };

//   // const fetchMoreData = fetchMore();

//   // useEffect(() => {
//   //   axios
//   //     .get(`http://52.77.121.171:3008/api/v1/en/developers?page=1&size=8`)
//   //     .then((response) => {
//   //       setAllDev(response.data.data.developers.data);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // }, []);

//   return (
//     <section className="w-full">
//       <div className="w-full bg-gradient-to-r from-[#DBA318] via-[#FFD670] to-[#DBA318] mb-20 py-1 ">
//         <InfiniteScroll dataLength={8} next={fetchMoreData} hasMore={hasMore}>
//           <div className="w-full h-[720px]  overflow-y-scroll scrollbar-hide bg-gradient-to-r from-[#000F1D] via-[#00182E] to-[#000F1D] py-5">
//             <div className="w-full h-full bg-footer bg-repeat">
//               <div className="grid grid-cols-1 md:grid-cols-4 w-full justify-center items-center">
//                 {allDev.map((developer) => (
//                   <DeveloperListItem
//                     developerLogo={developer.logo}
//                     developerName={developer.name}
//                     id={developer._id}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </InfiniteScroll>
//       </div>
//     </section>
//   );
// };

// export default DeveloperList;
