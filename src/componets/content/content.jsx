import React from "react";
import About from "../about/about";
import Showcase from "../showcase/showcase";
import "./content.css";

const Content = () => {
  return (
    <div className="content-wrapper">
      <About />
      <Showcase />
    </div>
  );
};

export default Content;
