import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #14b2ac;
    --secondary-color: #2508a1;
    --tertiary-color: #e21776;
    --button-color: #fff;
    --button-hover-color: #000;
    --text-color: #333;
  }

  html {
    scroll-behavior: smooth !important;
    font-size: 10px;
  }

  body {
    background-color: #f7f8fa;
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

  p,
  .description {
    color: var(--text-color);
  }

  .description {
    padding-right: 5px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 3px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }
  }

  .error-message {
    font-size: 13px;
    color: #db3232;
    text-align: left;
    margin-top: 5px;
  }

  .container {
    max-width: 1545px;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  section {
    padding: 80px 0;
  }

  @media only screen and (max-width: 1600px) {
    .container {
      max-width: 1330px;
    }

    section {
      padding: 70px 0;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      max-width: 1150px;
    }

    section {
      padding: 50px 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      max-width: 990px;
    }

    section {
      padding: 40px 0;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      max-width: 870px;
    }

    section {
      padding: 35px 0;
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

    section {
      padding: 30px 0;
    }
  }

  @media only screen and (max-width: 650px) {
    .container {
      max-width: 495px;
    }
  }

  @media only screen and (max-width: 500px) {
    section {
      padding: 25px 0;
    }
  }
`;
