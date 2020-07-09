import React from "react";
import Header from "./componets/header/header";
import GlideBox from "./componets/glide/glide";
import About from "./componets/about/about";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <GlideBox />
      <About />
    </React.Fragment>
  );
};

export default App;
