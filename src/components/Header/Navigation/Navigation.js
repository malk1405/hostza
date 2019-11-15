import React, { useState } from "react";

import "./nav.css";

const links = [
  { name: "Home", href: "#" },
  { name: "Package", href: "#" },
  {
    name: "Blog",
    href: "#",
    submenu: [
      { name: "Blog", href: "#" },
      { name: "Single blog", href: "#" }
    ]
  },
  { name: "Pages", href: "#", submenu: [{ name: "Elements", href: "#" }] },
  { name: "Support", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" }
];

function Navigation() {
  const listItems = links.map(({ name, href, submenu }, i) => {
    const subList = !submenu ? null : (
      <ul className="nav__items nav__items--submenu">
        {submenu.map(({ name, href }) => (
          <li key={`sub-${name}`} className="nav__item nav__item--submenu">
            <a href={href} className="nav__link nav__link--submenu">
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
    return (
      <li className="nav__item nav__item--main-menu" key={name}>
        <a href={href} className="nav__link nav__link--main-menu">
          {name}
        </a>
        {subList}
      </li>
    );
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(isExpanded => !isExpanded);
  };

  let classes = "nav__items nav__items--main-menu";
  if (isExpanded) classes += " nav__items--visible";

  return (
    <nav role="navigation" className="nav">
      <div className="nav__banner">
        <a href="/home">Hostza</a>
      </div>
      <button className="show-nav" onClick={toggleMenu}>
        {isExpanded ? "Hide" : "Show"}
      </button>
      <ul className={classes}>{listItems}</ul>
    </nav>
  );
}

export default Navigation;
