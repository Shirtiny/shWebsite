import React from "react";
import "./feature.css";

const Feature = ({ iconClass, title, content }) => {
  return (
    <div className="feature">
      <i className={`fa ${iconClass}`}></i>
      <h4 className="feature-title">{title}</h4>
      <p className="feature-content">{content}</p>
    </div>
  );
};

export default Feature;
