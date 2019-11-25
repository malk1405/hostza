import React from "react";
import styled from "styled-components";
import Image from "./Image/banner.png";
import Container from "../Container/Container";

const Intro = styled.section`
  align-items: center;
  background: url(${Image}) no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    background-color: #2e004b;
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;

const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ({ children }) => (
  <Intro>
    <Container>
      <Centered>{children}</Centered>
    </Container>
  </Intro>
);
