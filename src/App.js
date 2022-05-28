import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
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
      <Body />
    </div>
  );
}

export default App;
