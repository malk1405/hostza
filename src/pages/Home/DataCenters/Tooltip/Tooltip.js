import styled from "styled-components";

import media from "../../../../utils/media";

export default styled.div`
  background: white;
  border-radius 10px;
  bottom: 22px;
  box-shadow: 0 5px 15px 0 grey;
  left: 0;
  padding: 10px 0;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  visibility: ${props => (props.visible ? "visible" : "hidden")};
  width: 150px;
  z-index: 1;

  &::before {
    content: "";
    border: 10px solid transparent;
    border-top-color: white;
    position: absolute;
    top: 100%;
  }

  & svg {
    color: green;
  }

  & h4 {
    color: #1F1F1F;
    font-size: 1.2rem;
    font-weight: 500;
  }

  & p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 2;
  }

  ${media.md`
    padding: 20px 0;
    width: 260px;

    & h4 {
      font-size: 1.8rem;
    }
  
    & p {
      font-size: 1.4rem;
    }
  `}
`;
