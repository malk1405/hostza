import React, { useState } from "react";

function Dropdown({ href, name, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = e => {
    e.preventDefault();
    setIsExpanded(isExpanded => !isExpanded);
  };

  const closeMenu = () => {
    setIsExpanded(false);
  };
  let classes = "nav-sm__sublist";
  if (isExpanded) classes += " nav-sm__sublist--visible";
  return (
    <li className="nav-sm__item">
      <a
        href={href}
        onClick={toggle}
        className={"nav-sm__link"}
        data-symbol={isExpanded ? "-" : "+"}
      >
        {name}
      </a>
      <ul className={classes} onClick={closeMenu}>
        {children}
      </ul>
    </li>
  );
}

export default Dropdown;
