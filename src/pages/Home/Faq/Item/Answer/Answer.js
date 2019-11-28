import styled from "styled-components";
import media from "../../../../../utils/media";

const AnswerContainer = styled.div`
  height: ${props => `${props.height}px` || "auto"};
  transition: height 0.3s;
  overflow: hidden;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  font-color: #212529;
  padding: 20px 50px;

  ${media.md`
    font-size: 16px;
  `}
`;

export { AnswerContainer, Answer };
