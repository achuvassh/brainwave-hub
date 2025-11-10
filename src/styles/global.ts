import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: all .3s;
}

body {
  margin: 0;
  background-color: ${props => props.theme.colors.background};
}
`