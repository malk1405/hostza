import React from "react";

import "./intro.css";

import IntroSection from "../../Intro/Intro";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Form from "./Form/Form";

function Intro() {
  const onSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) alert(`You've typed: ${e.target[0].value}`);
    else alert("Type something");
  };
  return (
    <IntroSection>
      <Description>The Best Domain & Hosting Provider In The Area</Description>
      <Header>Go Big With Your Next Domain</Header>
      <Form onSubmit={onSubmit}>
        <input type="text" placeholder="Find your domain"></input>
        <button type="submit">Search</button>
      </Form>
    </IntroSection>
  );
}

export default Intro;
