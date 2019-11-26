import React, { useState } from "react";
import styled from "styled-components";

import tabs from "./config/tabs";

import Container from "../../../components/Container/Container";
import Header, { Title, Tabs } from "./Header/Header";
import Body, {
  Pane,
  Feature,
  Icon,
  Info,
  Title as FeatureTitle,
  Text
} from "./Body/Body";

const Features = styled.section`
  padding: 100px 0;
`;

const StyledFeatures = () => {
  const [option, setOption] = useState(tabs[0].id);

  const onChange = e => {
    setOption(e.target.value);
  };

  return (
    <Features>
      <Container>
        <Header>
          <Title>Core features</Title>
          <Tabs>
            {tabs.map(({ id, text }) => (
              <li key={id}>
                <input
                  type="radio"
                  name="feature"
                  id={`feature-${id}`}
                  value={id}
                  checked={option === id}
                  onChange={onChange}
                ></input>
                <label htmlFor={`feature-${id}`}>{text}</label>
              </li>
            ))}
          </Tabs>
        </Header>
        <Body>
          {tabs.map(({ id, features }) => (
            <Pane isActive={option === id} key={`${id}_feature`}>
              {features.map(({ text, name, iconColor }, i) => (
                <Feature key={`${id}_feature_${i}`}>
                  <Icon color={iconColor}></Icon>
                  <Info>
                    <FeatureTitle>{name}</FeatureTitle>
                    <Text>{text}</Text>
                  </Info>
                </Feature>
              ))}
            </Pane>
          ))}
        </Body>
      </Container>
    </Features>
  );
};

export default StyledFeatures;
