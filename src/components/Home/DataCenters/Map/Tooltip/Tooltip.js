import styled from "styled-components";

import media from "../../../../../utils/media";

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
    font-size: 12px;
    font-weight: 500;
  }

  & p {
    color: #919191;
    font-size: 10px;
    font-weight: 400;
    line-height: 20px;
  }

  ${media.md`
    padding: 20px 0;
    width: 260px;

    & h4 {
      font-size: 18px;
    }
  
    & p {
      font-size: 14px;
      line-height: 28px;
    }
  `}
`;
