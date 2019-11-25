import React, { useState } from "react";
import styled from "styled-components";

import Image from "./Image/map.svg";
import Location from "./Location/Location";
import locations from "./config/locations";
import Tooltip from "./Tooltip/Tooltip";

const Map = ({ className }) => {
  const [selectedId, setSelectedId] = useState(null);
  const onClick = e => {
    const id = e.currentTarget.dataset.id;
    setSelectedId(selectedId => (selectedId === id ? null : id));
  };

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
