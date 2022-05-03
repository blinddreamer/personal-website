import React from "react"
import Main from "./components/Body"
import Navbar from "./components/Navbar"
import Gnoma from "./components/Gnoma"
import './assets/index.css'

function App() {
  return (
    <div class="area">

      <Navbar />
      <Main /> 
      <Gnoma />
    </div>
  );
}

export default App;
