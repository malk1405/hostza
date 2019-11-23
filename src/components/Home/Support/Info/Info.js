import React from "react";
import styled from "styled-components";
import Description from "./Description/Description";
import { InversedButton } from "../../../Button/Button";
import Phone from "./Phone/Phone";
import Title from "./Title/Title";
import media from "../../../../utils/media";

const Info = ({ className }) => (
  <div className={className}>
    <Title>24h Dedicated Support</Title>
    <Description>
      Our set he for firmament morning sixth subdue darkness creeping gathered
      divide our let god moving. Moving in fourth air night bring upon you’re it
      beast.
    </Description>
    <InversedButton>Get Start Now</InversedButton>
    <Phone>+7 (XXX) XXX-XX-XX</Phone>
  </div>
);

export default styled(Info)`
  ${media.md`
  margin-left: 33%;
`}

  ${media.xl`
  margin-left: 60%;
`}
`;
