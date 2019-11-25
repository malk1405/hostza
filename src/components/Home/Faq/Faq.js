import React, { useState } from "react";
import styled from "styled-components";

import faqs from "./config/faqs";

import Item from "./Item/Item";
import Container from "../../Container/Container";
import Title from "./Title/Title";

const Faq = styled.section`
  padding-top: 190px;
`;

const StyledFaq = () => {
  const [openedId, setOpenedId] = useState(null);
  const onClick = id => {
    setOpenedId(openedId => (openedId !== id ? id : null));
  };

  return (
    <Faq>
      <Container>
        <Title>Frequently Ask Question</Title>
        {faqs.map(el => (
          <Item
            key={el.id}
            onClick={onClick}
            {...el}
            isOpened={el.id === openedId}
          ></Item>
        ))}
      </Container>
    </Faq>
  );
};

export default StyledFaq;
