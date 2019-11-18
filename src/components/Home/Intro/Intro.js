import React from "react";

import "./intro.css";

function Intro() {
  return (
    <section className="intro">
      <h2>The Best Domain & Hosting Provider In The Area</h2>
      <h1>Go Big With Your Next Domain</h1>
      <form>
        <input type="text" placeholder="Find your domain"></input>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default Intro;
