import React from "react"
import Home from "./components/home"
import Monitor from "./components/monitor"
import {Route, Link, Routes} from 'react-router-dom';
import './assets/index.css'

const App = () => {
  return (
      <>
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
      </>

  )
}


export default App;