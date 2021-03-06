import styled from "styled-components";

export default styled.div`
  animation: shadow infinite alternate;
  animation-duration: ${props => (props.duration || 1) + "s"};
  background-color: purple;
  border-radius: 50%;
  cursor: pointer;
  height: 10px;
  left: ${props => (props.left || 1) + "%"};
  position: absolute;
  top: ${props => (props.top || 1) + "%"};
  width: 10px;

  @keyframes shadow {
    from {
      box-shadow: 0 0 0 0 #2e004b00;
    }

    to {
      box-shadow: 0 0 0 10px #2e004b7e;
    }
  }
`;
