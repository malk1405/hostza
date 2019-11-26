import styled from "styled-components";
import media from "../../../../../utils/media";

export default styled.h3`
  color: #2e004b;
  font-size: 13px;
  font-weight: 400;
  padding-left: 48px;
  position: relative;

  &::before {
    border: 1px solid lightgreen;
    border-radius: 50%;
    content: "?";
    color: lightgreen;
    display: block;
    font-size: 20px;
    height: 24px;
    left: 0;
    line-height: 24px;
    position: absolute;
    text-align: center;
    width: 24px;
  }

  ${media.md`
    font-size: 18px;
  `}

  ${media.lg`
    font-size: 24px;
  `}
`;
