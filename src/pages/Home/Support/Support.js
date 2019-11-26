import React from "react";
import styled from "styled-components";

import Container from "../../../components/Container/Container";
import img from "./Image/support_bg.png";
import Info from "./Info/Info";
import media from "../../../utils/media";

const Section = styled.section`
  background-image: url(${img});
  background-position: center right 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0;

  ${media.md`
    padding: 100px 0;
  `}

  ${media.lg`
    padding: 200px 0;
  `}
`;

const Support = () => {
  return (
    <Section>
      <Container>
        <Info></Info>
      </Container>
    </Section>
  );
};

export default Support;
