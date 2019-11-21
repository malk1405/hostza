import React from "react";
import Intro from "./Intro/Intro";
import Hosting from "./Hosting/Hosting";
import Features from "./Features/Features";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Intro></Intro>
        <Hosting></Hosting>
      </main>
      <Features></Features>
    </React.Fragment>
  );
}

export default Home;
