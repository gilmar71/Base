import Link from 'next/link';
import styled from 'styled-components';

interface ICardContactLinkStyles {
  $color?: string;
  $hoverColor?: string;
}

export const CardContactLink = styled(Link)<ICardContactLinkStyles>`
  display: flex;
  width: 100%;
  max-width: fit-content;
  gap: 10px;
  position: relative;

  * {
    color: ${({ $color }) => ($color ? $color : '#171717')};
    transition: 0.3s;
    fill: var(--primary-color);
    line-height: 1;
  }

  &:hover {
    * {
      color: ${({ $hoverColor }) =>
        $hoverColor ? $hoverColor : 'var(--primary-color)'};
      fill: var(--secondary-color);
    }
  }

  span {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background-color: currentColor;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  .svg-icon {
    max-width: 20px;
    aspect-ratio: 1;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;
