import React, { useState } from "react";

const links = [
  { name: "Home", href: "#" },
  { name: "Package", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Pages", href: "#" },
  { name: "Support", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" }
];

function Navigation() {
  const listItems = links.map(({ name, href }) => (
    <li key={name} className="nav__item">
      <a href={href} className="nav__link">
        {name}
      </a>
    </li>
  ));

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(isExpanded => !isExpanded);
  };

  let classes = "nav__items";
  if (isExpanded) classes += " nav__items--visible";

  return (
    <nav className="nav">
      <button className="show-nav" onClick={toggleMenu}>
        {isExpanded ? "Hide" : "Show"}
      </button>
      <ul className={classes}>{listItems}</ul>
    </nav>
  );
}

export default Navigation;
