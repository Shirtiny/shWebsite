import React from "react";
import "./feature.css";

const Feature = ({style, iconClass = "", title = "", content = "" }) => {
  return (
    <div className="feature" style={style}>
      <i className={`fa ${iconClass}`}></i>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-content">{content}</p>
    </div>
  );
};

export default Feature;
