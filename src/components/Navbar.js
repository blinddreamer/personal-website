import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from '../components/home.js'
import Monitor from '../components/monitor.js'

const Navbar = () => {
  return (
    <Router>
      <div id="div-box">
        <table>
          <td><div id="menu"><Link to="/">home</Link></div></td>
          <td><div id="menu"><Link to="/monitor">monitor</Link></div></td>
        </table>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
      </Routes>
      

    </Router>
  )
}

export default Navbar