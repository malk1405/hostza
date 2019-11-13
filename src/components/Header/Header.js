import React from "react";
import "./main.css";
import Nav from "./Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__banner">
        <h1>Hostza</h1>
      </div>
      <Nav></Nav>
    </header>
  );
}

export default Header;
