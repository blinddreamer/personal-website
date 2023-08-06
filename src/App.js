import React, {Fragment, } from "react";
import Navbar from "./components/navbar";
import Body from "./components/body"
import Footer from "./components/footer"

import './assets/index.css';

const App = () => {
  return (
    <Fragment>
        <Navbar />
        <Body />
        <Footer />
    </Fragment>
  );
};

export default App;