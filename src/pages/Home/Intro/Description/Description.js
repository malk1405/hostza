import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.p`
  color: #00d363;
  font-size: 0.8rem;
  margin: 0;
  margin-bottom: 20px;
  order: -1;

  ${media.md`
    font-size: 1.1rem;
  `}

  ${media.lg`
    font-size: 1rem;
  `}

  ${media.xl`
    font-size: 1.1rem;
  `}
`;
