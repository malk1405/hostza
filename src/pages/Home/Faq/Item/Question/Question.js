import styled from "styled-components";
import media from "../../../../../utils/media";

export default styled.h3`
  color: #2e004b;
  font-size: 1.3rem;
  font-weight: 400;
  vertical-align: middle;

  &::before {
    border: 1px solid lightgreen;
    border-radius: 50%;
    content: "?";
    color: lightgreen;
    display: inline-block;
    font-size: 1.2em;
    height: 1.5em;
    line-height: 1.5em;
    margin-right: 1em;
    text-align: center;
    width: 1.5em;
  }

  ${media.md`
    font-size: 1.8rem;
  `}

  ${media.lg`
    font-size: 2.4rem;
  `}
`;
