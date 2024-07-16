import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-red: #C41E3A;
    --secondary-red: #8B0000;
    --light-gray: #F5F5F5;
    --white: #FFFFFF;
    --black: #333333;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--white);
    color: var(--black);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
  }

  /* Smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Hover effects */
  a:hover, button:hover {
    opacity: 0.8;
  }

  /* Add more global styles as needed */
`;