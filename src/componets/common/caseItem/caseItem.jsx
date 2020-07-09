import React from "react";
import "./caseItem.css";

const CaseItem = ({ className = "", src = "", alt = "" }) => {
  return (
    <div className={`case-item ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default CaseItem;
