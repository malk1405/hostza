import styled from "styled-components";
import media from "../../../../utils/media";

export default styled.h3`
  color: #2e004b;
  font-size: 2.8rem;
  margin-bottom: 3rem;

  ${media.md`
    font-size: 4.2rem;
  `}

  ${media.xl`    
    margin-bottom: 10rem;
  `}
`;
