import React from "react";
import "./App.css";

function Login() {
    return (
        <form for="login">
            <input name="username" type="text" maxLength="100" placeholder="username" required />
            <input name="password" type="password" maxLength="100" placeholder="password" required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;