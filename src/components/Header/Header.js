import React from "react";
import "./Header.css";
import NavLg from "./Navigation/large/Nav";
import NavSm from "./Navigation/small/Nav";

function Header() {
  return (
    <header className="header">
      <div className="nav__banner">
        <a href="/home">Hostza</a>
      </div>
      <NavLg></NavLg>
      <NavSm></NavSm>
    </header>
  );
}

export default Header;
