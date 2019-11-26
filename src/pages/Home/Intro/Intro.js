import React, { useEffect, useState } from "react";

import IntroSection from "../../../components/Intro/Intro";
import Header from "./Header/Header";
import Description from "./Description/Description";
import Form from "./Form/Form";

function Intro() {
  const [height, setHeight] = useState("auto");
  useEffect(() => {
    setHeight(window.innerHeight + "px");
  }, [setHeight]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target[0].value;
    if (value) alert(`You've typed: ${e.target[0].value}`);
    else alert("Type something");
  };
  return (
    <IntroSection height={height}>
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
