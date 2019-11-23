import styled from "styled-components";
import media from "../../../../../utils/media";

const Title = styled.h3`
  color: white;
  font-size: 27px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 33px;

  ${media.md`
  font-size: 42px;
`}
`;

export default Title;
