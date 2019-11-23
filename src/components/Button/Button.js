import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #00d363;
  border-radius: 30px;
  color: #00d363;
  cursor: pointer;
  font-size: 16px;
  padding: 12px 30px;
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
