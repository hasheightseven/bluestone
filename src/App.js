import React from "react";
import "./App.css";
import LandingBluestone from "./components/LandingBluestone.js";
import BottomMenu from "./components/BottomMenu.js";

function App(){
  return (
    <div className="App">
        <LandingBluestone />
        <BottomMenu />
    </div>
  );
}

export default App;
