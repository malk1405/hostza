import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.h1`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 50px;

  ${media.md`
    font-size: 1.5rem;
  `}

  ${media.lg`
    font-size: 2.2rem;
  `}

  ${media.xl`
    font-size: 3.8rem;
  `}
`;
