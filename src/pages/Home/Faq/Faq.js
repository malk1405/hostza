import React from "react";

import faqs from "./config/faqs";
import useId from "../../../hooks/useId";

import Item from "./Item/Item";
import Container from "../../../components/Container/Container";
import Title from "./Title/Title";
import Section from "../../../components/Section/Section";

const Faq = () => {
  const { selectedId, onClick } = useId(null);

  return (
    <Section>
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
    </Section>
  );
};

export default Faq;
