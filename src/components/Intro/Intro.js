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
  height: 100vh;
  justify-content: center;
  position: relative;
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
