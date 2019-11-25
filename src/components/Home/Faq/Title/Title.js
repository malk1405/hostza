import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.h3`
  color: #2e004b;
  font-size: 28px;
  margin-bottom: 100px;

  ${media.md`
    font-size: 42px;
  `}
`;
