import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.p`
  color: #00d363;
  font-size: 1.3rem;
  margin: 0;
  margin-bottom: 10px;
  order: -1;

  ${media.md`
    font-size: 1.8rem;
  `}

  ${media.lg`
    font-size: 1.6rem;
  `}

  ${media.xl`
    font-size: 1.8rem;
  `}
`;
