import React, { useEffect, useState } from "react";
import Header from "./componets/header/header";
import GlideBox from "./componets/glide/glide";
import Content from "./componets/content/content";
import Footer from "./componets/footer/footer";
import ScrollReveal from "scrollreveal";
import anime from "animejs/lib/anime.es.js";
import SmoothScroll from "smooth-scroll";

const App = () => {
  const [smScroll, setSmScroll] = useState(null);
  useEffect(() => {
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
    const scroll = new SmoothScroll('a[href*="#"],.explore-btn', {
      header: "header .shHeader",
      //向下多滚100px
      offset: 100,
    });
    setSmScroll(scroll);
  }, []);
  return (
    <React.Fragment>
      <Header />
      <GlideBox smScroll={smScroll} />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default App;
