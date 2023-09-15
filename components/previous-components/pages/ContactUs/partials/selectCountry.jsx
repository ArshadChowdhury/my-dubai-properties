import React from "react";
import Select from "react-select";

const countryOptions = [
  { value: "US", label: "United States", flag: "flag-icon flag-icon-us" },
  { value: "CA", label: "Canada", flag: "flag-icon flag-icon-ca" },
  {
    value: "GB",
    label: "United Kingdom",
    flag: "flag-icon flag-icon-gb",
  },
  // Add more country options as needed
];
const CountrySelect = () => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 200,
    }),
  };

  const customOption = ({ innerProps, label, data }) => (
    <div {...innerProps}>
      <span className={data.flag} /> {label}
    </div>
  );

  return (
    <Select
      options={countryOptions}
      isSearchable={true}
      styles={customStyles}
      components={{ Option: customOption }}
    />
  );
};
export default CountrySelect;
