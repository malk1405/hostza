import React from "react";
import "./Header.css";
import NavLg from "./Navigation/large/Nav";
import NavSm from "./Navigation/small/Nav";
// import Logo from "../../../public/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="nav__banner">
        <a href="/home">
          <img src="/logo.png" alt="logo"></img>
        </a>
      </div>
      <NavLg></NavLg>
      <NavSm></NavSm>
      <div className="nav__chat">
        <button className="nav__login">Log In</button>
        <button className="btn btn--inverse">Live chat</button>
      </div>
    </header>
  );
}

export default Header;
