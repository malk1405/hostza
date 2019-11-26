import styled from "styled-components";
import media from "../../../../utils/media";

const Header = styled.div`
  border-bottom: 1px solid #efe5f2;
  margin-bottom: 90px;

  ${media.md`
  align-items: baseline;
  display: flex;
`}
`;

const Title = styled.h2`
  color: #2e004b;
  font-size: 1.5rem;
  margin-bottom: 8px;

  ${media.md`  
    flex-grow: 1;
  `}
`;

const Tabs = styled.ul`
  & li {
    display: inline-block;
  }

  & input {
    display: none;
  }

  & label {
    color: #919191;
    cursor: pointer;
    display: inline-block;
    font-size: 0.8rem;
    margin-left: 1em;
    padding: 0.5em 1em 2em;
    position: relative;
  }

  & input:checked + label {
    color: #2e004b;
  }

  & input:checked + label::after {
    background-color: #00d363;
    bottom: 0;
    content: "";
    height: 3px;
    left: 0;
    position: absolute;
    right: 0;
  }

  ${media.md`
    & label {
      font-size: 1rem;
    }
`}
`;

export default Header;
export { Title, Tabs };
