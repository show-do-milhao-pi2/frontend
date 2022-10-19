import {createGlobalStyle} from "styled-components";
import fundo from './assets/images/fundo.png'

export default createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
      background-image: url(${fundo});
      background-size: 100%;
    }
`;