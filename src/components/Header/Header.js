import React from "react";
import "./Header.css";
import NavLg from "./Navigation/large/Nav";
import NavSm from "./Navigation/small/Nav";

import { InversedButton, TransparentButton } from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <div className="nav__banner">
        <a href="/home">
          <img src="assets/img/logo.png" alt="logo"></img>
        </a>
      </div>
      <NavLg></NavLg>
      <NavSm></NavSm>
      <div className="nav__chat">
        <TransparentButton>Log In</TransparentButton>
        <InversedButton>Live chat</InversedButton>
      </div>
    </header>
  );
}

export default Header;
