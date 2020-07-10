import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import ScrollReveal from "scrollreveal";
import anime from "animejs/lib/anime.es.js";
import "font-awesome/css/font-awesome.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "./index.css";

ReactDom.render(<App />, document.getElementById("root"));

const option = {
  delay: 300,
  duration: 500,
  origin: "bottom",
  distance: "50px",
  easing: "ease-in-out",
};

ScrollReveal().reveal(".feature", { ...option, interval: 350 });
ScrollReveal().reveal(".service-item", { ...option, interval: 300 });
ScrollReveal().reveal(".data-pieces", {
  beforeReveal: () => {
    anime({
      targets: ".data-piece .num",
      innerHTML: (element) => {
        return [0, element.innerHTML];
      },
      duration: 2000,
      round: 1,
      easing: "easeInExpo",
    });
  },
});
