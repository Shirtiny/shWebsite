import React, { useCallback } from "react";
import "./filterButton.css";

const FilterButton = ({
  index,
  label = "无label",
  dataFilter = "*",
  activeIndex = "",
  onClick,
}) => {
  const handleClick = useCallback(() => {
    onClick && onClick(index, dataFilter);
  }, [onClick]);

  return (
    <button
      className={`filter-btn ${index === activeIndex ? "active" : ""}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default FilterButton;
