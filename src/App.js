import React from "react";
import "./App.css";
import Login from "./Login.js";

function App(){
  return (
    <main className="App">
      <div className=".AppDiv" id="App-Overlay">
        <nav className=".AppNavbar">
          <h1 className="AppH1">bluestone</h1>
        </nav>
        <div className="AppDiv" id="App-Login">
          <Login />
        </div>
    </div>
    </main>
  );
}

export default App;
