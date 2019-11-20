import React from "react";

import "./hosting.css";

function Hosting() {
  return (
    <section className="container hosting">
      <section className="hosting__title">
        <h2>Choose your Hosting Plan</h2>
        <p>
          Your domain control panel is designed for ease-of-use and allows for
          all aspects of your domains.
        </p>
      </section>
      <section>
        <ul className="hosting__plans">
          <li className="hosting__plan">
            <div className="plan__logo"></div>
            <h3 className="plan__title">Share Hosting</h3>
            <p className="plan__description">
              Easy drag and drop fully customizable mobile friendly
            </p>
            <p className="plan__price">
              Start from <span>$2.5/m</span>
            </p>
            <button className="btn">Start now</button>
          </li>
          <li className="hosting__plan">
            <div className="plan__logo"></div>
            <h3 className="plan__title">VPS Hosting</h3>
            <p className="plan__description">
              Easy drag and drop fully customizable mobile friendly
            </p>
            <p className="plan__price">
              Start from <span>$2.5/m</span>
            </p>
            <button className="btn">Start now</button>
          </li>
          <li className="hosting__plan">
            <div className="plan__logo"></div>
            <h3 className="plan__title">Wordpress Hosting</h3>
            <p className="plan__description">
              Easy drag and drop fully customizable mobile friendly
            </p>
            <p className="plan__price">
              Start from <span>$2.5/m</span>
            </p>
            <button className="btn">Start now</button>
          </li>
          <li className="hosting__plan">
            <div className="plan__logo"></div>
            <h3 className="plan__title">Dedicated Hosting</h3>
            <p className="plan__description">
              Easy drag and drop fully customizable mobile friendly
            </p>
            <p className="plan__price">
              Start from <span>$2.5/m</span>
            </p>
            <button className="btn">Start now</button>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Hosting;
