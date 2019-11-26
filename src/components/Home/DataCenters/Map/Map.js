import React from "react";
import styled from "styled-components";

import useId from "../../../../hooks/useId";

import Image from "./Image/map.svg";
import Location from "./Location/Location";
import locations from "./config/locations";
import Tooltip from "./Tooltip/Tooltip";

const Map = ({ className }) => {
  const { selectedId, onClick } = useId(null);

  return (
    <div className={className}>
      <img src={Image} alt="map"></img>
      {locations.map(({ id, info, coord }) => (
        <Location key={id} {...coord} data-id={id} onClick={onClick}>
          <Tooltip {...info} visible={selectedId === id}></Tooltip>
        </Location>
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
