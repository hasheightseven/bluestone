import React from "react";
import "./App.css";
import NavbarBluestone from "./components/NavbarBluestone.js";
import LandingBluestone from "./components/LandingBluestone.js";
import ContactBluestone from "./components/ContactBluestone.js";
import BottomMenu, { addeventlisteners } from "./components/BottomMenu.js";

function App(){
  return (
    <div className="App">
        <NavbarBluestone className="navbar-bluestone" />
        <LandingBluestone className="landing-bluestone" />
        <ContactBluestone className="contact-bluestone" />
        <BottomMenu className="bottom-menu" />
    </div>
  );
}
addeventlisteners();
export default App;
