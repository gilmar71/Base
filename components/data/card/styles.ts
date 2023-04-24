import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #393939;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  gap: 15px;

  .svg-icon {
    max-width: 75px;
    width: 100%;
    aspect-ratio: 75/80;
  }

  h2 {
    color: var(--primary-color);
    width: 100%;
    max-width: 278px;
    height: 48px;
  }

  p {
    color: var(--text-color);
    height: 65px;
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

  /* Responsives */

  @media only screen and (max-width: 1600px) {
    padding: 40px;

    .svg-icon {
      max-width: 70px;
    }

    h2 {
      max-width: 265px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 35px;

    .svg-icon {
      max-width: 65px;
    }

    h2 {
      height: 40px;
      max-width: 240px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 25px;
    gap: 10px;

    h2 {
      height: 35px;
      max-width: 220px;
    }

    .svg-icon {
      width: 100%;
      max-width: 50px;
    }
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      height: 30px;
      max-width: 190px;
    }

    .svg-icon {
      max-width: 40px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 400px) {
  }
`;
