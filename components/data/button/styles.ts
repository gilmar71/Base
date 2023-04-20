import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: boolean;
  $loading?: boolean;
  color?: string;
  hoverColor?: string;
  maxWidth?: string;
  marginTop?: boolean;
  center?: boolean;
}

export const Button = styled.div<ButtonProps>`
  width: 100%;
  margin-left: ${({ center }) => (center ? 'auto' : '')};
  margin-right: ${({ center }) => (center ? 'auto' : '')};
  margin-top: ${({ marginTop }) => (marginTop ? '30px' : '')};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '')};
  a,
  button {
    width: 100%;
    height: 48px;
    cursor: ${({ $loading }) => ($loading ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ backgroundColor }) =>
      backgroundColor ? 'var(--white)' : 'var(--primary-color)'};
    border-radius: 5px;
    border: ${({ backgroundColor }) =>
      backgroundColor ? 'none' : '2px solid var(--primary-color)'};
    opacity: ${({ $loading }) => $loading && '0.8'};
    transition: all 0.4s ease-in-out;
    background-size: 300%;
    background-image: ${({ backgroundColor }) =>
      backgroundColor
        ? `linear-gradient(
      to right,
      #2dafba,
      #118e99,
        #2dafba,
        #118e99
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
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 44px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 600px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 450px) {
    a,
    button {
      height: 32px;
    }
  }

  @media only screen and (max-width: 370px) {
  }

  @media only screen and (max-width: 350px) {
  }
`;
