import styled from "styled-components";
import media from "../../../../utils/media";

const Body = styled.div``;

const Pane = styled.div`
  display: ${props => (props.isActive ? "block" : "none")};
  margin-bottom: 30px;

  ${media.xl`
    display: ${props => (props.isActive ? "flex" : "none")};
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const Feature = styled.div`
  margin-bottom: 30px;

  ${media.md`
    display: flex;
  `}

  ${media.xl`
    flex-basis: 48%;
  `}
`;

const Icon = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  height: 82px;
  margin-bottom: 30px;
  width: 82px;

  ${Feature}:hover & {
    box-shadow: 0 0 5px 5px #886cfe66;
  }

  ${media.md`
    flex-shrink: 0;
    margin-bottom: 0;
  `}
`;

const Info = styled.div`
  ${media.md`
    padding-left: 30px;
  `}
`;

const Title = styled.h3`
  color: #1f1f1f;
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

const Text = styled.p``;

export default Body;
export { Pane, Feature, Icon, Info, Title, Text };
