import React, { useState, useEffect } from "react";

import "./Features.css";

const tabs = [
  {
    id: "general",
    text: "Features",
    features: [
      { name: "Free Domain for 1st Year", text: "Feature 1" },
      { name: "Free SSL Certificate", text: "Feature 2" },
      { name: "30-Day Money-Back Guarantee", text: "Feature 3" },
      { name: "Some other feature", text: "Feature 4" }
    ]
  },
  {
    id: "advanced",
    text: "Advanced features",
    features: [
      { name: "Free Domain for 1st Year", text: "Advanced Feature 1" },
      { name: "Free SSL Certificate", text: "Advanced Feature 2" },
      { name: "30-Day Money-Back Guarantee", text: "Advanced Feature 3" },
      { name: "Spam Protection", text: "Advanced Feature 4" },
      {
        name: "Some other feature",
        text:
          "Nulla esse aute elit elit labore commodo exercitation proident quis magna ipsum dolore. Proident nostrud aliquip consequat tempor proident. Nulla laboris ullamco duis laborum nulla non sit minim excepteur aliquip magna fugiat. Ut cillum et dolor quis nisi deserunt proident cupidatat pariatur."
      }
    ]
  }
];

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
    <section className="container features">
      <section className="features__header">
        <h2 className="features__title">Core features</h2>
        <div className="features__tabs">
          <ul>{tabsHeader}</ul>
        </div>
      </section>
      <section className="features__body">{tabsBody}</section>
    </section>
  );
}

export default Features;
