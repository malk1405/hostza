import React from "react";
import styled from "styled-components";

import NavLg from "./Navigation/large/Nav";
import NavSm from "./Navigation/small/Nav";

import { InversedButton, TransparentButton } from "../Button/Button";
import Banner from "./Banner/Banner";
import Chat from "./Chat/Chat";

const Header = styled.header`
  align-items: center;
  display: flex;
  font-size: 1.6rem;
  height: 60px;
  left: 0;
  margin: 0;
  padding: 20px;
  padding-bottom 10px;
  position: absolute;
  right: 0;
  z-index: 1;
`;

const StyledHeader = () => (
  <Header>
    <Banner>
      <a href="/home">
        <img src="assets/img/logo.png" alt="logo"></img>
      </a>
    </Banner>
    <NavLg></NavLg>
    <NavSm></NavSm>
    <Chat>
      <TransparentButton>Log In</TransparentButton>
      <InversedButton>Live chat</InversedButton>
    </Chat>
  </Header>
);

export default StyledHeader;
