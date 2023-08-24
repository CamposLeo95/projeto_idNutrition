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

  body{
    overflow-x: hidden;
  }

  a{    
    cursor: pointer;
  }

`