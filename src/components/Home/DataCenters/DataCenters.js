import React from "react";
import styled from "styled-components";

import Container from "../../Container/Container";
import Map from "./Map/Map";

const DataCenters = ({ className }) => {
  return (
    <section className={className}>
      <Container>
        <Map></Map>
      </Container>
    </section>
  );
};

export default styled(DataCenters)`
  padding-top: 200px;
`;
