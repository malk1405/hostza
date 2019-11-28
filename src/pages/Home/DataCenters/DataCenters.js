import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

import useId from "../../../hooks/useId";
import locations from "./config/locations";

import Container from "../../../components/Container/Container";
import Map from "./Map/Map";
import Location from "./Location/Location";
import Tooltip from "./Tooltip/Tooltip";
import Image from "./Image/map.svg";
import Section, {
  Header,
  Title,
  Description
} from "../../../components/Section/Section";

const DataCenters = () => {
  const { selectedId, onClick } = useId(null);
  return (
    <Section>
      <Container>
        <Header>
          <Title>Our Data Centres</Title>
          <Description>
            Your domain control panel is designed for ease-of-use and allows for
            all aspects of your domains.
          </Description>
        </Header>
        <Map>
          <img src={Image} alt="map"></img>
          {locations.map(({ id, info, coord }) => (
            <Location key={id} {...coord} data-id={id} onClick={onClick}>
              <Tooltip {...info} visible={selectedId === id}>
                <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                <h4>
                  {info.city}, {info.country}
                </h4>
                <p>{info.description}</p>
              </Tooltip>
            </Location>
          ))}
        </Map>
      </Container>
    </Section>
  );
};

export default DataCenters;
