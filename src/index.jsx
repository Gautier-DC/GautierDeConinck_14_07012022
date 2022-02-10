import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import normalize from "./normalize.css";
import colors from "./utils/style/colors";

const GlobalStyle = createGlobalStyle`
    ${normalize};
    html {
        font-family:  'Dongle', 'Merriweather Sans', sans-serif;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: ${colors.secondary};
    }
    
    body {
      margin: 0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: ${colors.primary};
      background-image: url('./hr_background.svg');
      background-position: right ;
      min-width: 350px;
      max-width: 1280px;
      margin: 0 auto;
    }
    
    main{
      background-color: rgba(255,255,255, 0.9);
      border-radius: 0 0 1em 1em;
      margin: 0 4em 4em 4em;
      //min-height: 80vh;
      padding: 0 2em 2em 2em;
    }
    
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    ol,ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    a :visited {
      color: inherit;
    }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
