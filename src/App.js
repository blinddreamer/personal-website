import React from "react"
//import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Gnoma from "./components/Gnoma"
import './assets/index.css'

function App() {
  return (
    <div class="area">
                  <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
      <Navbar />
      <Gnoma />
    </div>
  );
}

export default App;
