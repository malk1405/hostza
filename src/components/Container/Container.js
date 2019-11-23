import styled from "styled-components";
import media from "../../utils/media";

export default styled.div`
  margin: 0 auto;
  max-width: 540px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  ${media.md`
    max-width: 720px;  
  `}

  ${media.lg`
    max-width: 960px;
  `}

  ${media.xl`
    max-width: 1140px;
  `}
`;
