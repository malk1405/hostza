import React, { useState } from "react";
import Dropdown from "./Dropdown";
import links from "../links";

import "./nav.css";

function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const closeMenu = () => {
    setIsExpanded(false);
  };

  const listItems = links.map(({ name, href, submenu }, i) => {
    if (submenu) {
      const subLinks = submenu.map(({ name, href }) => (
        <li key={`sub-${name}`} className="nav-sm__subitem">
          <a href={href} onClick={closeMenu} className="nav-sm__sublink">
            {name}
          </a>
        </li>
      ));

      return (
        <Dropdown key={name} name={name} href={href} onClick={closeMenu}>
          {subLinks}
        </Dropdown>
      );
    }

    return (
      <li className="nav-sm__item" key={name}>
        <a href={href} onClick={closeMenu} className="nav-sm__link">
          {name}
        </a>
      </li>
    );
  });

  const toggleMenu = () => {
    setIsExpanded(isExpanded => !isExpanded);
  };

  let classes = "nav-sm__list";
  let hamburgerClasses = "hamburger";
  if (isExpanded) {
    classes += " nav-sm__list--visible";
    hamburgerClasses += " hamburger--cross";
  }

  return (
    <nav role="navigation" className="nav-sm">
      <button className="show-nav" onClick={toggleMenu}>
        <span className={hamburgerClasses}></span>
      </button>
      <ul className={classes}>{listItems}</ul>
    </nav>
  );
}

export default Navigation;
