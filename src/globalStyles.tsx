import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
  }

  a{
    color: #1d8afe;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  a:hover{
    scale: 1.1;
    color: #fe731d;
  }
`