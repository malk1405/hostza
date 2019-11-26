import React from "react";
import styled from "styled-components";

import faqs from "./config/faqs";
import useId from "../../../hooks/useId";

import Item from "./Item/Item";
import Container from "../../Container/Container";
import Title from "./Title/Title";

const Faq = styled.section`
  padding-top: 190px;
`;

const StyledFaq = () => {
  const { selectedId, onClick } = useId(null);

  return (
    <Faq>
      <Container>
        <Title>Frequently Ask Question</Title>
        {faqs.map(el => (
          <Item
            key={el.id}
            onClick={onClick}
            {...el}
            isOpened={el.id === selectedId}
          ></Item>
        ))}
      </Container>
    </Faq>
  );
};

export default StyledFaq;
