import React from "react";
import "./App.css";

function Login() {
    return (
        <form for="login" id="nm-login">
            <input name="username" id="nm-username" type="text" maxLength="100" placeholder="username" required />
            <input name="password" id="nm-password" type="password" maxLength="100" placeholder="password" required />
            <button id="nm-button" type="submit">Submit</button>
        </form>
    );
}

export default Login;