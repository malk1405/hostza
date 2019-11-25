import styled from "styled-components";
import media from "../../../../utils/media";

const Container = styled.div`
  height: ${props => `${props.height}px` || "auto"};
  transition: height 0.3s;
  overflow: hidden;
`;

const Text = styled.p`
  font-size: 12px;
  font-color: #212529;
  margin: 0;
  padding: 20px 50px;

  ${media.md`
    font-size: 16px;
  `}
`;

export { Container, Text };
