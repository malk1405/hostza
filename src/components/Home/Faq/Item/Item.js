import React, { useRef } from "react";
import styled from "styled-components";
import Question from "../Question/Question";
import { Container, Text } from "../Answer/Answer";

const Item = styled.div`
  border: 1px solid #e9e5ec;
  cursor: pointer;
  margin-bottom: 30px;
  padding: 16px;
`;

const StyledItem = ({ onClick, id, isOpened, question, answer }) => {
  const answerRef = useRef(null);
  const onClickInner = () => {
    onClick(id);
  };
  return (
    <Item onClick={onClickInner}>
      <Question>{question}</Question>
      <Container height={isOpened ? answerRef.current.scrollHeight : 0}>
        <Text ref={answerRef}>{answer}</Text>
      </Container>
    </Item>
  );
};

export default StyledItem;
