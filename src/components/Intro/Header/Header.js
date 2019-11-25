import styled from "styled-components";
import media from "../../../utils/media";

export default styled.h1`
  color: white;
  font-size: 1.2rem;

  ${media.md`
    font-size: 1.5rem;
  `}

  ${media.lg`
    font-size: 2rem;
  `}
`;
