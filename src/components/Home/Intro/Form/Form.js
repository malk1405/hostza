import styled from "styled-components";

const Form = styled.form`
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  width: 90%;
  max-width: 1000px;

  & input,
  & button {
    font-family: inherit;
    font-size: 0.9rem;
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
    flex-shrink: 0;
    padding: 1rem 2rem;
  }
`;

export default Form;
