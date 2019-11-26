import React from "react";
import styled from "styled-components";
import Image from "./Image/banner.png";
import Container from "../Container/Container";

const Intro = styled.section`
  align-items: center;
  background: linear-gradient(#2e004b99, #2e004b99), url(${Image}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${props => props.height || "auto"};
  padding: 120px 0;
  position: relative;
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({ height, children }) => (
  <Intro height={height}>
    <Container>
      <Centered>{children}</Centered>
    </Container>
  </Intro>
);
