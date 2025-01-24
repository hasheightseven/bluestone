import React from "react";
import "./App.css";
import LandingBluestone from "./components/LandingBluestone.js";
import BottomMenu, { addeventlisteners } from "./components/BottomMenu.js";

function App(){
  return (
    <div className="App">
        <LandingBluestone />
        <BottomMenu />
    </div>
  );
}
addeventlisteners();
export default App;
