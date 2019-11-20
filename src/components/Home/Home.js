import React from "react";
import Intro from "./Intro/Intro";
import Hosting from "./Hosting/Hosting";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Intro></Intro>
        <Hosting></Hosting>
      </main>
    </React.Fragment>
  );
}

export default Home;
