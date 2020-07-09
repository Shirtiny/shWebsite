import React from "react";
import About from "../about/about";
import Showcase from "../showcase/showcase";
import Service from "../services/service";
import Team from "../team/team";
import "./content.css";

const Content = () => {
  return (
    <div className="content-wrapper">
      <About />
      <Showcase />
      <Service />
      <Team />
    </div>
  );
};

export default Content;
