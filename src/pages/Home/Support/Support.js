import React from "react";
import styled from "styled-components";

import Container from "../../../components/Container/Container";
import img from "./Image/support_bg.png";
import Info from "./Info/Info";
import media from "../../../utils/media";

const Support = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <Info></Info>
      </Container>
    </section>
  );
};

const StyledSupport = styled(Support)`
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

export default StyledSupport;
