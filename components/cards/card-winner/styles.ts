import styled from 'styled-components';

interface ICardWinnerStyles {
  $hasHover?: boolean;
}

export const CardWinner = styled.div<ICardWinnerStyles>`
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 2px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ $hasHover }) => $hasHover && 'var(--primary-color)'};

    .box-text h2 {
      color: ${({ $hasHover }) => $hasHover && '#fff'};
    }

    .text {
      color: ${({ $hasHover }) => $hasHover && '#fff'};
    }
  }

  .image {
    width: 100%;
    position: relative;
  }

  .player-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    max-width: 55px;
    padding: 0;
    background: none;
    border: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    fill: #fff;
    aspect-ratio: 55/61;
    transition: 0.3s ease-in-out;

    &:hover {
      fill: var(--primary-color);
      transform: translate(-50%, -50%) scale(1.3);
    }
  }

  .svg-icon {
    max-width: inherit;
    aspect-ratio: inherit;
  }

  .next-image {
    border-radius: 20px 20px 0 0;
    aspect-ratio: 430/377;
  }

  .box-text {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    h2 {
      color: #353535;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      line-clamp: 3;
      -webkit-box-orient: vertical;
      line-height: 1.25;
      transition: 0.3s;
      height: 60px;
    }
  }

  .text {
    color: #848484;
    height: 48px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media only screen and (max-width: 1600px) {
    .box-text h2 {
      height: 58px;
    }

    .text {
      height: 46.5px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-text {
      padding: 25px;
      gap: 16px;

      h2 {
        height: 54px;
        line-height: 1.2;
      }
    }

    .text {
      height: 36px;
      line-height: 1.2;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-text {
      padding: 20px 18px;
      gap: 12px;

      h2 {
        height: 52px;
      }
    }

    .text {
      height: 35px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .box-text h2 {
      height: 48.5px;
    }

    .text {
      height: 32px;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-text h2 {
      height: 46.5px;
    }

    .text {
      height: 30px;
    }
  }

  @media only screen and (max-width: 650px) {
    .box-text h2 {
      height: 32px;
    }

    .text {
      height: 28px;
    }
  }

  @media only screen and (max-width: 500px) {
    border-radius: 15px;

    .box-image {
      border-radius: 15px 15px 0 0;
    }

    .box-text {
      padding: 16px;
      gap: 10px;
    }

    .player-button {
      max-width: 45px;
    }
  }

  @media only screen and (max-width: 390px) {
    .box-text h2 {
      height: 43px;
    }

    .text {
      height: 30px;
    }
  }
`;
