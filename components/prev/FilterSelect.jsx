import { useEffect, useState } from "react";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { useRouter } from "next/navigation";

const FilterSelect = (props) => {
  const filterParams = props;
  const router = useRouter();
  const [{ filterValues }, dispatch] = useStateValue();
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    const selectedValueFromProps =
      props.searchBy === "Property Areas"
        ? filterParams.filterParams.propertyAreaId
        : props.searchBy === "Development Type"
        ? filterParams.filterParams.developmentTypeId
        : props.searchBy === "Developer Type"
        ? filterParams.filterParams.developerId
        : null;
    setSelectedValue(selectedValueFromProps);
  }, []);

  const changed = (e) => {
    const newValue = e.target.value === props.searchBy ? null : e.target.value;
    const urlParams = new URLSearchParams(window.location.search);

    if (props.searchBy === "Developer Type") {
      if (e.target.value === "Developer Type") {
        urlParams.delete("developers");
      } else if (e.target.value) {
        urlParams.set("developers", e.target.value);
      }
    } else if (props.searchBy === "Property Areas") {
      if (e.target.value === "Property Areas") {
        urlParams.delete("propertyAreas");
      } else if (e.target.value) {
        urlParams.set("propertyAreas", e.target.value);
      }
    } else if (props.searchBy === "Development Type") {
      if (e.target.value === "Development Type") {
        urlParams.delete("developmentTypes");
      } else if (e.target.value) {
        urlParams.set("developmentTypes", e.target.value);
      }
    }

    const updatedQueryString = urlParams.toString();
    const updatedUrl = updatedQueryString
      ? `?${updatedQueryString}`
      : "/properties";

    router.push(updatedUrl);
    setSelectedValue(newValue);
  };

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
