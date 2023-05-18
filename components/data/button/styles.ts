import Link from 'next/link';
import styled from 'styled-components';

interface IButtonStyles {
  hasBg?: boolean;
  borderRadius?: string;
}

export const Button = styled(Link)<IButtonStyles>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : '24px'};
  background-size: 300%;
  background-position: left;
  transition: all 0.4s ease-in-out;
  color: ${({ hasBg }) => (hasBg ? '#fff' : '#000')};
  border: ${({ hasBg }) => (hasBg ? 'none' : '2px solid var(--button-color)')};
  background-image: ${({ hasBg }) =>
    hasBg &&
    `linear-gradient(
      to right,
      var(--button-color),
      var(--button-hover-color),
        var(--button-color),
        var(--button-hover-color)
    )`};

  &:hover {
    background-position: right;
    background-color: ${({ hasBg }) => !hasBg && 'var(--button-color)'};
    color: ${({ hasBg }) => !hasBg && '#fff'};
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    height: 38px;
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
    height: 36px;
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    height: 34px;
  }

  @media only screen and (max-width: 390px) {
  }
`;
