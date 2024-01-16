import { createGlobalStyle, styled } from 'styled-components';

import { FONT_DEFAULT, PRIMARY_COLOR, PRIMARY_DARK_COLOR } from './default';

const GlobalStyles = createGlobalStyle`
  //All styles
  /* font-family: "Poppins", sans-serif; */

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li{
    list-style: none;
  }

    /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #000;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const CustomButton = styled.button`
  width: ${({ width }) => width ?? '100%'};
  padding: ${({ padding }) => padding ?? '15px'};

  font-size: 18px;
  font-family: ${FONT_DEFAULT};
  background: ${PRIMARY_COLOR};
  color: #fff;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  transition: 250ms;
  cursor: pointer;

  &:hover{
    background: ${PRIMARY_DARK_COLOR};
  }
`;

export default GlobalStyles;
