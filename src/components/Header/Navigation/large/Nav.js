import React from "react";
import links from "../links";

import "./nav.css";

function Navigation() {
  const listItems = links.map(({ name, href, submenu }, i) => {
    const subList = !submenu ? null : (
      <ul className="nav-lg__list nav-lg__list--submenu">
        {submenu.map(({ name, href }) => (
          <li
            key={`sub-${name}`}
            className="nav-lg__item nav-lg__item--submenu"
          >
            <a href={href} className="nav-lg__link nav-lg__link--submenu">
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
    return (
      <li className="nav-lg__item nav-lg__item--main-menu" key={name}>
        <a
          href={href}
          className={`nav-lg__link nav-lg__link--main-menu${
            subList ? " nav-lg__link--dropdown" : ""
          }`}
        >
          {name}
        </a>
        {subList}
      </li>
    );
  });

  let classes = "nav-lg__list nav-lg__list--main-menu";

  return (
    <nav role="navigation" className="nav-lg">
      <ul className={classes}>{listItems}</ul>
    </nav>
  );
}

export default Navigation;
