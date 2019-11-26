import styled from "styled-components";
import media from "../../../../utils/media";

const Phone = styled.p`
  color: #00d363;
  font-size: 1rem;
  margin: 0;
  margin-top: 20px;
  padding: 0;

  ${media.md`    
    display: inline-block;
    margin: 0;
    margin-left: 20px;
  `}
`;

export default Phone;
