import React from "react";
import plans from "./Plans";
import { Button } from "../../Button/Button";
import Container from "../../Container/Container";

import "./hosting.css";

function Hosting() {
  return (
    <Container>
      <section className="hosting">
        <section className="hosting__title">
          <h2>Choose your Hosting Plan</h2>
          <p>
            Your domain control panel is designed for ease-of-use and allows for
            all aspects of your domains.
          </p>
        </section>
        <section>
          <ul className="hosting__plans">
            {plans.map(({ title, description, price }) => (
              <li className="hosting__plan" key={title}>
                <div className="plan__logo"></div>
                <h3 className="plan__title">{title}</h3>
                <p className="plan__description">{description}</p>
                <p className="plan__price">
                  Start from <span>${price}/m</span>
                </p>
                <Button className="btn">Start now</Button>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </Container>
  );
}

export default Hosting;
