import React from "react";
import Intro from "./Intro/Intro";
import Hosting from "./Hosting/Hosting";
import Features from "./Features/Features";
import Support from "./Support/Support";
import DataCenters from "./DataCenters/DataCenters";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Intro></Intro>
        <Hosting></Hosting>
      </main>
      <Features></Features>
      <Support></Support>
      <DataCenters></DataCenters>
    </React.Fragment>
  );
}

export default Home;
