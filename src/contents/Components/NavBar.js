import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/SignUpPage">SignUp</a>
      </li>
      <li>
        <a href="/LoginPage">Login</a>
      </li>
    </ul>
  );
}
