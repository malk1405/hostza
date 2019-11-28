import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import Container from "../Container/Container";
import Top from "./Top/Top";
import Copyright from "./Copyright/Copyright";

const Footer = styled.footer`
  background-color: #2e004b;
`;

function StyledFooter() {
  return (
    <Footer>
      <Container>
        <Top></Top>
      </Container>
      <Container>
        <Copyright>
          <p>
            Copyright ©2019 All rights reserved | This template is made with{" "}
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> by{" "}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorlib
            </a>
          </p>
        </Copyright>
      </Container>
    </Footer>
  );
}

export default StyledFooter;
