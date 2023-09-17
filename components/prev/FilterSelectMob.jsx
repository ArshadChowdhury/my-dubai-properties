// import React from "react";
// import { useStateValue } from "../states/StateProvider.jsx";
// import { useState } from "react";

// const FilterSelectMob = (props) => {
//   const [{ filterValues }, dispatch] = useStateValue();
//   const [filterValuesMob, setFilterValuesMob] = useState({
//     propertyAreas: null,
//     developers: null,
//     propertyTypes: null,
//     beds: null,
//     completions: null,
//     developmentTypes: null,
//   });
//   console.log(`Mobile filter: ${filterValuesMob.propertyAreas}`);
//   console.log(`Mobile filter: ${filterValuesMob.propertyTypes}`);
//   console.log(`Mobile filter: ${filterValuesMob.beds}`);
//   function changed(e) {
//     if (props.searchBy === "Developer Type") {
//       if (e.target.value === "Developer Type") {
//         setFilterValuesMob({ ...filterValuesMob, developers: null });
//       } else {
//         setFilterValuesMob({ ...filterValuesMob, developers: e.target.value });
//       }
//     } else if (props.searchBy === "Property Areas") {
//       if (e.target.value === "Property Areas") {
//         setFilterValuesMob({ ...filterValuesMob, propertyAreas: null });
//       } else {
//         setFilterValuesMob({
//           ...filterValuesMob,
//           propertyAreas: e.target.value,
//         });
//       }
//     } else if (props.searchBy === "Development Type") {
//       if (e.target.value === "Development Type") {
//         setFilterValuesMob({ ...filterValuesMob, developmentTypes: null });
//       } else {
//         setFilterValuesMob({
//           ...filterValuesMob,
//           developmentTypes: e.target.value,
//         });
//       }
//     } else if (props.searchBy === "Property Type") {
//       if (e.target.value === "Property Type") {
//         setFilterValuesMob({ ...filterValuesMob, propertyTypes: null });
//       } else {
//         setFilterValuesMob({
//           ...filterValuesMob,
//           propertyTypes: e.target.value,
//         });
//       }
//     } else if (props.searchBy === "Completions") {
//       if (e.target.value === "Completions") {
//         setFilterValuesMob({ ...filterValuesMob, completions: null });
//       } else {
//         setFilterValuesMob({ ...filterValuesMob, completions: e.target.value });
//       }
//     } else if (props.searchBy === "Beds") {
//       if (e.target.value === "Beds") {
//         setFilterValuesMob({ ...filterValuesMob, beds: null });
//       } else {
//         setFilterValuesMob({ ...filterValuesMob, beds: e.target.value });
//       }
//     }
//   }
//   return (
//     <select
//       name={props.selectBy}
//       id={props.selectBy}
//       onChange={changed}
//       className="mt-2 md:mt-0 w-full md:auto relative py-2 px-3 md:px-0 md:pl-2 md:pr-5 rounded-lg bg-gradient-to-r from-[#073f7b] to-[#122C47] border-t-2 border-[#DDE5EB] md:mx-1 text-white hover:text-[#FFD15F] transition duration-500 before:absolute before:h-full before:w-full before:bg-white">
//       <option className="font-roboto text-lg" value={null}>
//         {props.searchBy}
//       </option>
//       {props.selectBy?.map((item) => (
//         <option
//           className="font-roboto text-lg"
//           value={item._id ? item._id : item}
//           key={item._id}>
//           {item.name ? item.name : item.areaName || item}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default FilterSelectMob;

import React from "react";
import { useStateValue } from "./states/StateProvider";
import { useEffect } from "react";

const FilterSelectMob = (props) => {
  const [{ filterValuesMob, filterSelectReset }, dispatch] = useStateValue();

  useEffect(() => {
    // Reset the select index when filterSelectReset is true
    if (filterSelectReset) {
      const selectElement = document.getElementById(props.selectBy);
      selectElement.selectedIndex = 0;
    }
  }, [filterSelectReset, props.selectBy]);

  function changed(e) {
    if (props.searchBy === "Developer Type") {
      if (e.target.value === "Developer Type") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, developers: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, developers: e.target.value },
        });
      }
    } else if (props.searchBy === "Property Areas") {
      if (e.target.value === "Property Areas") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, propertyAreas: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, propertyAreas: e.target.value },
        });
      }
    } else if (props.searchBy === "Development Type") {
      if (e.target.value === "Development Type") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, developmentTypes: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, developmentTypes: e.target.value },
        });
      }
    } else if (props.searchBy === "Property Type") {
      if (e.target.value === "Property Type") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, propertyTypes: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, propertyTypes: e.target.value },
        });
      }
    } else if (props.searchBy === "Completions") {
      if (e.target.value === "Completions") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, completions: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, completions: e.target.value },
        });
      }
    } else if (props.searchBy === "Beds") {
      if (e.target.value === "Beds") {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, beds: null },
        });
      } else {
        dispatch({
          type: "setFilterValuesMob",
          item: { ...filterValuesMob, beds: e.target.value },
        });
      }
    }
  }
  return (
    <select
      name={props.selectBy}
      id={props.selectBy}
      onChange={changed}
      style={{
        width: "210px",
        "padding-top": "6px",
        "padding-bottom": "8px",
        "padding-left": "8px",
        // color: "#FFFF",
        "font-size": "14px",
        "font-weight": "100",
      }}
      className="w-full outline-none filterSelect"
    >
      <option className="font-roboto text-lg" value={null}>
        {props.searchBy}
      </option>
      {props.selectBy?.map((item) => (
        <option
          className="font-roboto text-lg"
          value={item._id ? item._id : item}
          key={item._id}
        >
          {item.name ? item.name : item.areaName || item}
        </option>
      ))}
    </select>
  );
};

export default FilterSelectMob;
