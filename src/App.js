import React from "react";
import Home from "./components/home";
import Body from "./components/body"
import Footer from "./components/footer"
import Monitor from "./components/monitor";
import { Route, Link, Routes } from 'react-router-dom';
import './assets/index.css';

const App = () => {
  return (
    <>
      <div id="div-box">
        <table>
          <tr>
            <td><div className="menu-item"><Link to="/">home</Link></div></td>
            <td><div className="menu-item"><Link to="/monitor">monitor</Link></div></td>
          </tr>
        </table>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>

      <Body />
      <Footer />
    </>
  );
};

export default App;
