import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #e30613;
    --secondary-color: #2508a1;
    --tertiary-color: #e21776;
    --button-color: #fff;
    --button-hover-color: #000;
    --text-color: #101010;
  }

  html {
    scroll-behavior: smooth !important;
    font-size: 10px;
  }

  body {
    background-color: #f3f3f3;
    overflow-x: hidden !important;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--secondary-color);
    }
  }

  p {
    color: var(--text-color);
  }

  .error-message {
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
  }

  .container {
    max-width: 1380px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 1600px) {
    .container {
      max-width: 1330px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      max-width: 1150px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      max-width: 990px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      max-width: 870px;
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      max-width: 735px;
    }

    .error-message {
      font-size: 12px;
      margin-top: 4px;
      padding-left: 10px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      max-width: 625px;
    }
  }

  @media only screen and (max-width: 650px) {
    .container {
      max-width: 495px;
    }
  }

  @media only screen and (max-width: 500px) {
  }
`;
