import React, { useEffect, useState } from "react";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useSearchParams } from "next/navigation";

const FilterSelect = (props) => {
  const [{ filterValues }, dispatch] = useStateValue();
  const [selectedValue, setSelectedValue] = useState(props.searchBy || "");
  // const searchParams = useSearchParams();
  // const queryString = searchParams.get("search").substring(1);
  // const queryParams = Object.fromEntries(
  //   queryString.split("&").map((param) => param.split("="))
  // );

  // const { developers, developmentTypes, propertyAreas } = queryParams;

  const changed = (e) => {
    if (props.searchBy === "Developer Type") {
      if (e.target.value === "Developer Type") {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, developers: false },
        });
      } else if (e.target.value) {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, developers: e.target.value },
        });
      }
    } else if (props.searchBy === "Property Areas") {
      if (e.target.value === "Property Areas") {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, propertyAreas: false },
        });
      } else if (e.target.value) {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, propertyAreas: e.target.value },
        });
      }
    } else if (props.searchBy === "Development Type") {
      if (e.target.value === "Development Type") {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, developmentTypes: false },
        });
      } else if (e.target.value) {
        dispatch({
          type: "setFilterValues",
          item: { ...filterValues, developmentTypes: e.target.value },
        });
      }
    }
    const newValue = e.target.value === props.searchBy ? null : e.target.value;
    setSelectedValue(newValue);
  };
  useEffect(() => {
    const selectedValueFromProps =
      props.searchBy === "Property Areas"
        ? filterValues?.propertyAreas
        : props.searchBy === "Development Type"
        ? filterValues?.developmentTypes
        : props.searchBy === "Developer Type"
        ? filterValues?.developers
        : null;

    setSelectedValue(selectedValueFromProps);
  }, [
    filterValues.developers,
    filterValues.developmentTypes,
    filterValues.propertyAreas,
    filterValues.completions,
    filterValues.propertyTypes,
    selectedValue,
  ]);

  return (
    <select
      name={props.selectBy}
      id={props.selectBy}
      onChange={changed}
      value={selectedValue}
      className="outline-none filterSelect"
      style={{
        width: "210px",
        paddingTop: "6px",
        paddingBottom: "8px",
        fontSize: "14px",
        fontWeight: "100",
      }}
    >
      <option className="font-roboto text-md" value={null}>
        {props.searchBy}
      </option>
      {props.selectBy?.map((item) => (
        <option
          className="font-roboto text-lg "
          value={item._id ? item._id : item}
          key={item._id}
        >
          {item.name ? item.name : item.areaName ? item.areaName : item}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;
