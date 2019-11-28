import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.h1`
  color: white;
  font-size: 2.4rem;
  line-height: 1.2;
  margin-bottom: 50px;

  ${media.md`
    font-size: 3rem;
  `}

  ${media.lg`
    font-size: 3.5rem;
  `}

  ${media.xl`
    font-size: 6rem;
  `}
`;
