import React from "react";
import styled from "styled-components";

import Container from "../../../components/Container/Container";
import { InversedButton } from "../../../components/Button/Button";
import img from "./Image/support_bg.png";
import media from "../../../utils/media";
import Phone from "./Phone/Phone";
import Title from "./Title/Title";
import Description from "./Description/Description";

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

const Info = styled(Container)`
  ${media.md`
    padding-left: 33%;
`}

  ${media.xl`
    padding-left: 60%;
`}
`;

const Support = () => {
  return (
    <Section>
      <Container>
        <Info>
          <Title>24h Dedicated Support</Title>
          <Description>
            Our set he for firmament morning sixth subdue darkness creeping
            gathered divide our let god moving. Moving in fourth air night bring
            upon you’re it beast.
          </Description>
          <InversedButton>Get Start Now</InversedButton>
          <Phone>+7 (XXX) XXX-XX-XX</Phone>
        </Info>
      </Container>
    </Section>
  );
};

export default Support;
