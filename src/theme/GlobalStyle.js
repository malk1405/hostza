import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,700,900&display=swap");

:root {
  font-size: 10px;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

body,h1,
h2,
h3,
h4,
h5,
h6, ul,
li, p {
  margin: 0;
  padding: 0;
}

body {  
  font-family: "Roboto", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}

h2 {
  color: #2e004b;
}

ul {
 list-style: none;
}

p {
  color: #919191;
  font-size: 1.6rem;
  line-height: 1.6;
}

input, select, textarea, button{
  font:inherit;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
