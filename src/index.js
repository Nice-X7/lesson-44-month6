import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  font-family: Consolas, sans-serif;
  padding: 0;
  margin: 0;
  background-color: black;
  color: #fff;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);