import styled from "styled-components";
import media from "../../../../utils/media";

const Plans = styled.ul`
  ${media.md`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

const Plan = styled.li`
  border: 1px solid #e0cce6;
  border-radius: 5px;
  margin: 10px 0;
  padding: 30px 15px;

  ${media.md`
    flex-basis: 49%;
  `}

  ${media.xl`
    flex-basis: 24%;
  `}
`;

const Logo = styled.div`
  background-color: ${props => props.bgColor || "red"};
  height: 3rem;
  margin-bottom: 1.5rem;
  width: 3rem;
`;

const Title = styled.h3`
  color: #2e004b;
  font-size: 1.5rem;
`;

const Description = styled.p``;

const Price = styled.p`
  font-size: 14px;
  margin: 25px 0;
`;

const Value = styled.span`
  color: #2e004b;
  font-size: 1.5rem;
`;

export default Plans;
export { Plan, Logo, Title, Description, Price, Value };
