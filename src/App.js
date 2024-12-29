import React from "react";
import "./App.css";

function App(){
  return (
    <main className="App">
      <div className=".AppDiv" id="App-Overlay">
        <nav className=".AppNavbar">
          <h1 className="AppH1">bluestone</h1>
        </nav>
        <div className="AppDiv" id="App-Login">
          <h2 className="AppH2">login</h2>
          <input name="username" type="text" placeholder="username" />
          <input type="password" name="password" placeholder="password" />
          <button type="button" className="AppBtn" id="App-login-btn">submit</button>
        </div>
    </div>
    </main>
  );
}

export default App;
