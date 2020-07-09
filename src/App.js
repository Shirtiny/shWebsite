import React from "react";
import Header from "./componets/header/header";
import GlideBox from "./componets/glide/glide";
import Content from "./componets/content/content";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <GlideBox />
      <Content />
    </React.Fragment>
  );
};

export default App;
