import styled from "styled-components";
import media from "../../../../utils/media";

const Form = styled.form`
  border-radius: 5px;
  display: flex;
  font-size: 1.6rem;
  overflow: hidden;
  width: 90%;

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
  }

  ${media.xl`
    width: 65%;
  `}
`;

export default Form;
