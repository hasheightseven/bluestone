
import React from "react";
import "./App.css";
import NavbarBluestone from "./components/NavbarBluestone.js";
import LandingBluestone from "./components/LandingBluestone.js";
import ContactBluestone from "./components/ContactBluestone.js";
import CanvasBluestone from "./components/CanvasBluestone.js";
import BottomMenu, { addeventlisteners } from "./components/BottomMenu.js";

function App(){
  return (
    <div className="App">
        <NavbarBluestone className="navbar-bluestone" />
        <LandingBluestone className="landing-bluestone" />
        <CanvasBluestone />
        <ContactBluestone className="contact-bluestone" />
        <BottomMenu className="bottom-menu" />
    </div>
  );
}
addeventlisteners();
export default App;

/*

import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">neon monkey</h1>
      </header>
      <main className="p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg">Card {index + 1}</h2>
              <p className="text-sm text-gray-600">
                This is a responsive card component.
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;

*/
