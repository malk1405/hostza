import React from "react";
import styled from "styled-components";

import Image from "./Image/map.svg";
import Location from "./Location/Location";
import locations from "./config/locations";

const Map = ({ className }) => {
  return (
    <div className={className}>
      <img src={Image} alt="map"></img>
      {locations.map(({ id, info, coord }) => (
        <Location key={id} {...coord}></Location>
      ))}
    </div>
  );
};

export default styled(Map)`
  position: relative;

  & img {
    width: 100%;
  }
`;
