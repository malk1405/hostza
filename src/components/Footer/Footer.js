import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__top container"></section>
      <section className="footer__copyright container">
        <p>
          Copyright ©2019 All rights reserved | This template is made with{" "}
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by{" "}
          <a
            href="https://colorlib.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Colorlib
          </a>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
