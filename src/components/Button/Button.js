import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #00d363;
  border-radius: 2em;
  color: #00d363;
  cursor: pointer;
  font-family: inherit;
  font-size: 1rem;
  line-height: 1em;
  padding: 1em 1.5em;

  &:hover {
    background-color: #00d363;
    color: white;
  }
`;

const InversedButton = styled(Button)`
  background-color: #00d363;
  color: white;

  &:hover {
    background-color: transparent;
    color: #00d363;
  }
`;

const TransparentButton = styled(Button)`
  border-color: transparent;
  color: white;

  &:hover {
    background-color: transparent;
  }
`;

export { Button, InversedButton, TransparentButton };
