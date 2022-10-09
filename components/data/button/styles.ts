import styled from 'styled-components';
import { lighten } from 'polished';

interface ButtonProps {
  backgroundColor?: string;
  $loading?: boolean;
}

export const Button = styled.div<ButtonProps>`
  width: 100%;
  a,
  button {
    width: 100%;
    height: 48px;
    cursor: ${(props) => (props.$loading ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondary);
    border-radius: 24px;
    border: 0;
    opacity: ${(props) => props.$loading && '0.8'};
    transition: all 0.4s ease-in-out;
    background-size: 300% 100%;
    background-image: ${(props) =>
      props.backgroundColor
        ? `linear-gradient(to right, ${props.backgroundColor}, ${
            props.backgroundColor
          }, ${lighten(0.3, props.backgroundColor)}, ${props.backgroundColor})`
        : `linear-gradient(to right, #f5cf2d;, #d4ab24, ${lighten(
            0.1,
            '#d4ab24',
          )} , #f5cf2d)`};
    animation: ${(props) =>
      props.$loading ? 'loading 2s ease-in-out infinite' : 'unset'};
    /* background: ${(props) => props.$loading && '#6749a3'}; */
  }

  a:hover,
  button:hover {
    background-position: ${(props) => (props.$loading ? 'unset' : '100% 0')};
    color: #000 !important;
    transition: all 0.4s ease-in-out;
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
