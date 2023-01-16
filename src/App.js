import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import './assets/index.css'
//import './assets/text.js' too much moving stuff disabled for now

function App() {
  return (
    <div class="area">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
