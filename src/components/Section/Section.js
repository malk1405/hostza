import styled from "styled-components";
import media from "../../utils/media";

const Section = styled.section`
  margin-top: 6rem;

  ${media.md`
    margin-top: 8rem;
  `}

  ${media.xl`
    margin-top: 20rem;
  `}
`;

const Header = styled.header`
  margin-bottom: 4rem;
  text-align: center;

  ${media.md`
    margin-bottom: 10rem;
  `}
`;

const Title = styled.h2`
  font-size: 2.3rem;
  line-height: 1.4;
  margin-bottom: 0.8rem;

  ${media.md`
    font-size: 3.2rem;
  `}

  ${media.xl`
    font-size: 4.2rem;
  `}
`;

const Description = styled.p``;

export default Section;
export { Header, Title, Description };
