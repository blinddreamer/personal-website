import React, { Fragment } from "react";
import Body from "./components/body";
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
      <div id="navbar">
        <table>
          <tr>
            <td>
              <div className="menu-item">
                <Link to="/">home</Link>
              </div>
            </td>
            <td>
              <div className="menu-item">
                <Link to="/monitor">monitor</Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <AnimatePresence initial={false} mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/monitor" element={<Monitor />} />
        </Routes>
      </AnimatePresence>
      <Body />
      <Footer />
    </Fragment>
  );
};

export default App;
