import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: boolean;
  $loading?: boolean;
  color?: string;
  hoverColor?: string;
  marginTop?: boolean;
  center?: boolean;
}

export const Button = styled.div<ButtonProps>`
  width: 100%;
  margin-left: ${({ center }) => (center ? 'auto' : '')};
  margin-right: ${({ center }) => (center ? 'auto' : '')};
  margin-top: ${({ marginTop }) => (marginTop ? '30px' : '')};

  a,
  button {
    width: 100%;
    height: 40px;
    cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ backgroundColor }) =>
      backgroundColor ? 'var(--secondary-color)' : 'var(--primary-color)'};
    border-radius: 24px;
    border: ${({ backgroundColor }) =>
      backgroundColor ? 'none' : '2px solid var(--primary-color)'};
    opacity: ${({ $loading }) => $loading && '0.8'};
    transition: all 0.4s ease-in-out;
    background-size: 300%;
    background-image: ${({ backgroundColor }) =>
      backgroundColor
        ? `linear-gradient(
      to right,
      #4adbc3,
      #3cb09d,
        #4adbc3,
        #3cb09d
    )`
        : ''};
    background-position: left;
    animation: ${({ $loading }) =>
      $loading ? 'loading 2s ease-in-out infinite' : 'unset'};
  }

  a:hover,
  button:hover {
    background-position: ${({ $loading }) => ($loading ? 'unset' : 'right')};
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? 'none' : 'var(--primary-color)'};
    color: ${({ backgroundColor }) => (backgroundColor ? '' : 'var(--white)')};
  }

  @keyframes loading {
    0% {
      background-size: 300% 100%;
    }

    50% {
      background-position: 100% 0;
    }

    100% {
      background-size: 300% 100%;
    }
  }

  button:disabled {
    cursor: not-allowed;
    background: '#6749a3';
    opacity: 0.8;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-top: ${({ marginTop }) => (marginTop ? '20px' : '')};
  }

  @media only screen and (max-width: 1024px) {
    margin-top: ${({ marginTop }) => (marginTop ? '15px' : '')};

    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 600px) {
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 34px;
    }
  }

  @media only screen and (max-width: 370px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;
