import React from "react";
import Style from "./MySelect.module.css";

const MySelect = ({ defaultValue, options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={Style.mySelect}
    >
      <option disabled>{defaultValue}</option>
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
