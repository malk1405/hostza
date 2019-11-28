import React from "react";

import plans from "./config/plans";

import { Button } from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";

import Plans, {
  Plan,
  Logo,
  Title as PlanTitle,
  Price,
  Value,
  Description as PlanDescription
} from "./Plans/Plans";

import Section, {
  Header,
  Title,
  Description
} from "../../../components/Section/Section";

function Hosting() {
  return (
    <Section>
      <Container>
        <Header>
          <Title>Choose your Hosting Plan</Title>
          <Description>
            Your domain control panel is designed for ease-of-use and allows for
            all aspects of your domains.
          </Description>
        </Header>
        <Plans>
          {plans.map(({ id, title, description, price, iconColor }) => (
            <Plan key={id}>
              <Logo bgColor={iconColor}></Logo>
              <PlanTitle>{title}</PlanTitle>
              <PlanDescription>{description}</PlanDescription>
              <Price>
                Start from <Value>${price}/m</Value>
              </Price>
              <Button className="btn">Start now</Button>
            </Plan>
          ))}
        </Plans>
      </Container>
    </Section>
  );
}

export default Hosting;
