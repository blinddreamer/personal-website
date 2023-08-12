import React, { Fragment } from "react";
import Video from "./components/video";
import Footer from "./components/footer";
import { AnimatePresence } from "framer-motion";
import Monitor from "./components/monitor";
import Home from "./components/home";
import { Route, Link, Routes, useLocation } from "react-router-dom";

import "./assets/index.css";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <div class="container">
        <div class="flex-navbar">
          <Link to="/">home</Link>
          <Link to="/monitor">monitor</Link>
        </div>
        <div class="flex-content">
          <AnimatePresence initial={false} mode={"wait"}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/monitor" element={<Monitor />} />
            </Routes>
          </AnimatePresence>
          <Video />
        </div>
        <div class="flex-footer">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
