import { reset } from './reset';
import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    background-color: ${colors.gray1};
  }
`;

export default GlobalStyle;
