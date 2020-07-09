import React from "react";
import Header from "./componets/header/header";
import GlideBox from "./componets/glide/glide";
import Content from "./componets/content/content";
import Footer from "./componets/footer/footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <GlideBox />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default App;
