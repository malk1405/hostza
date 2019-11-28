import React from "react";

import plans from "./config/plans";

import { Button } from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";

import Header from "./Header/Header";
import Plans, {
  Plan,
  Logo,
  Title,
  Price,
  Value,
  Description
} from "./Plans/Plans";

function Hosting() {
  return (
    <section>
      <Container>
        <Header>
          <h2>Choose your Hosting Plan</h2>
          <p>
            Your domain control panel is designed for ease-of-use and allows for
            all aspects of your domains.
          </p>
        </Header>
        <Plans>
          {plans.map(({ id, title, description, price, iconColor }) => (
            <Plan key={id}>
              <Logo bgColor={iconColor}></Logo>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <Price>
                Start from <Value>${price}/m</Value>
              </Price>
              <Button className="btn">Start now</Button>
            </Plan>
          ))}
        </Plans>
      </Container>
    </section>
  );
}

export default Hosting;
