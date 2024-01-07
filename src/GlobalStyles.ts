import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        display: block;
    }
    svg{
        display: block;
    }
    a{
        text-decoration: none;
    }
    
body{
    font-family: 'Plus Jakarta Sans';
    &::-webkit-scrollbar {
    display: none;
  } 
}
`;
export default GlobalStyles;
