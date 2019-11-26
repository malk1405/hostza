import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 10px 20px;
  max-height: 30px;
  max-width: 30px;
  min-height: 30px;
  min-width: 30px;
  position: relative;
  outline: none;

  & span,
  & span::before,
  & span::after {
    background-color: white;
    display: block;
    height: 3px;
    position: absolute;
    transition: 0.3s;
    transform-origin: center;
    width: 25px;
  }

  & span {
    background-color: ${props => (props.opened ? "transparent" : "white")};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & span::before {
    content: "";
    top: ${props => (props.opened ? "0" : "8px")};
    transform: rotate(${props => (props.opened ? "-135deg" : "0")});
  }

  & span::after {
    bottom: ${props => (props.opened ? "0" : "8px")};
    content: "";
    transform: rotate(${props => (props.opened ? "-225deg" : "0")});
  }
`;

const Hamburger = props => (
  <Button {...props}>
    <span></span>
  </Button>
);

export default Hamburger;
