import React, { useRef } from "react";
import styled from "styled-components";
import Question from "../Question/Question";
import { AnswerContainer, Answer } from "../Answer/Answer";

const Item = styled.div`
  border: 1px solid #e9e5ec;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 16px;
`;

const StyledItem = ({ onClick, id, isOpened, question, answer }) => {
  const answerRef = useRef(null);

  return (
    <Item onClick={onClick} data-id={id}>
      <Question>{question}</Question>
      <AnswerContainer height={isOpened ? answerRef.current.scrollHeight : 0}>
        <Answer ref={answerRef}>{answer}</Answer>
      </AnswerContainer>
    </Item>
  );
};

export default StyledItem;
