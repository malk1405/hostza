import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #00d363;
  border-radius: 100px;
  color: #00d363;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.5;
  padding: 0.75em 2em;
  transition: 0.3s;

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
