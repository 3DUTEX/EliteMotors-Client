import { createGlobalStyle } from 'styled-components';

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

export default GlobalStyles;
