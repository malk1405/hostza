import React, { useState, useEffect } from "react";

import "./Features.css";
import Container from "../../Container/Container";
import tabs from "./config/tabs";

function Features() {
  const [option, setOption] = useState(tabs[0].id);
  const [tabsHeader, setTabsHeader] = useState([]);
  const [tabsBody, setTabsBody] = useState([]);

  const onChange = e => {
    setOption(e.target.value);
  };

  useEffect(() => {
    setTabsHeader(
      tabs.map(({ id, text }) => (
        <li className="features__tab" key={id}>
          <input
            type="radio"
            name="feature"
            id={`${id}-features`}
            value={id}
            checked={option === id}
            onChange={onChange}
          ></input>
          <label htmlFor={`${id}-features`}>{text}</label>
        </li>
      ))
    );

    setTabsBody(
      tabs.map(({ id, features }) => (
        <section
          className={`tab-pane${option === id ? " tab-pane--active" : ""}`}
          key={`${id}_feature`}
        >
          {features.map(({ text, name }, i) => (
            <section className="feature" key={`${id}_feature_${i}`}>
              <div className="feature__icon"></div>
              <div className="feature__info">
                <h3 className="feature__title">{name}</h3>
                <p className="feature__text">{text}</p>
              </div>
            </section>
          ))}
        </section>
      ))
    );
  }, [option]);

  return (
    <Container>
      <section className="features">
        <section className="features__header">
          <h2 className="features__title">Core features</h2>
          <div className="features__tabs">
            <ul>{tabsHeader}</ul>
          </div>
        </section>
        <section className="features__body">{tabsBody}</section>
      </section>
    </Container>
  );
}

export default Features;
