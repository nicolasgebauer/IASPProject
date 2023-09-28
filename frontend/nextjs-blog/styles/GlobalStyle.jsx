import { createGlobalStyle } from "styled-components";
import { darkTheme } from "./theme";
import 'typeface-quicksand';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
  
  body {
    font-size: 1rem;
    font-family: ${darkTheme.font}, sans-serif;
    color: ${darkTheme.primaryColor};
    background-color: ${darkTheme.bg};
    line-height: 1.8;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, textarea {
    font-family: ${darkTheme.font}, sans-serif;
    font-size: 1rem;
  }

  input:focus, textarea:focus, button:focus, video:focus {
    outline: none;
  }

  button {
    font-family: 'Fira Sans', sans-serif;
    font-size: 1rem;
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  svg, .pointer {
    cursor: pointer;
  }

  .secondary {
    color: ${darkTheme.secondaryColor};
  }

  .avatar {
    height: 22px;
    width: 22px;
    border-radius: 10px;
    object-fit: cover;
  }

  .md {
    height: 50px;
    width: 50px;
    border-radius: 25px;
  }

  .small {
    font-size: 0.9rem;
  }

  .lg {
    height: 60px;
    width: 60px;
    border-radius: 30px;
  }

  .flex-row {
    display: flex;
    align-items: center;
  }

  .flex-row img, .flex-row svg {
    margin-right: 0.8rem;
  }

  .ruler {
    height: 1px;
    background: ${darkTheme.darkGrey};
    margin: 1rem 0;
  }

  .Toastify__toast {
    font-family: ${darkTheme.font}, sans-serif;
    border-radius: 4px;
  }

  .Toastify__toast--error {
    background: ${darkTheme.font};
  }

  .Toastify__toast--dark, .Toastify__toast--default {
    background: ${darkTheme.pur};
    color: #fff;
  }

  @media screen and (max-width: 530px) {
    body {
      font-size: 0.95rem;
    }

    button {
      font-size: 0.9rem;
    }
  }
`;

export default GlobalStyle;