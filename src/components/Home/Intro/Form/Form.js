import styled from "styled-components";
import media from "../../../../utils/media";

const Form = styled.form`
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  width: 90%;

  & input,
  & button {
    font-family: inherit;
    font-size: 1rem;
  }

  & input {
    flex-grow: 1;
    min-width: 0;
    padding: 1rem;
  }

  & button {
    background-color: #670080;
    border: none;
    color: white;
    flex-basis: 30%;
    flex-shrink: 0;
    padding: 1rem 2rem;
  }

  ${media.xl`
    width: 50%;
  `}
`;

export default Form;
