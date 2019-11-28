import styled from "styled-components";
import media from "../../../../utils/media";

const Phone = styled.p`
  color: #00d363;
  margin-top: 20px;

  ${media.md`    
    display: inline-block;
    margin: 0;
    margin-left: 20px;
  `}
`;

export default Phone;
