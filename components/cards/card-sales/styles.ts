import Link from 'next/link';
import styled from 'styled-components';

interface ICardSalesStyles {
  $isListPage?: boolean;
}

export const CardSales = styled(Link)<ICardSalesStyles>`
  width: 100%;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 2px;
  transition: 0.3s;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: var(--tertiary-color);

    .box-text h2 {
      color: #fff;
    }
  }

  .next-image {
    width: 100%;
    border-radius: 20px 20px 0 0;
    aspect-ratio: 486/260;
  }

  .tag {
    position: absolute;
    top: 30px;
    right: 0;
    color: #fff;
    background-color: var(--secondary-color);
    border-radius: 6px 0 0 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: fit-content;
    padding: 5px 10px;
    font-size: 12px;
  }

  .box-text {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 22px;

    h2 {
      transition: 0.3s;
      color: var(--primary-color);
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 60px;
      line-height: 1.25;
    }
  }

  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: var(--secondary-color);
    border-radius: 24px;
    height: 48px;
    background-size: 300%;
    background-position: left;
    transition: all 0.4s ease-in-out;
    background-image: linear-gradient(
      to right,
      var(--secondary-color),
      #31850b,
      var(--secondary-color),
      #31850b
    );

    &:hover {
      background-position: right;
    }
  }

  @media only screen and (max-width: 1600px) {
    .box-text h2 {
      height: 55px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .box-text {
      padding: 28px 25px;
      gap: 16px;

      h2 {
        line-height: 1.15;
        height: 45px;
      }
    }

    .button {
      height: 45px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-text {
      padding: ${({ $isListPage }) => ($isListPage ? '18px' : '22px')};
      gap: ${({ $isListPage }) => ($isListPage ? '10px' : '14px')};

      h2 {
        line-height: 1.15;
      }
    }

    .description {
      line-height: 1.2;
    }

    .tag {
      top: 20px;
      padding: 3px 7px;
      font-size: 11.5px;
    }

    .button {
      height: 40px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-text {
      padding: ${({ $isListPage }) => ($isListPage ? '16px' : '22px')};
      gap: ${({ $isListPage }) => ($isListPage ? '10px' : '14px')};

      h2 {
        height: ${({ $isListPage }) => $isListPage && '38px'};
        line-height: 1.1;
      }
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    .box-text {
      padding: 20px;
      gap: 12px;
    }

    .button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 650px) {
    .box-text {
      padding: ${({ $isListPage }) => ($isListPage ? '12px' : '20px')};
      gap: ${({ $isListPage }) => ($isListPage ? '8px' : '12px')};

      h2 {
        height: ${({ $isListPage }) => $isListPage && '30px'};
      }
    }

    .button {
      height: ${({ $isListPage }) => $isListPage && '32px'};
    }

    .tag {
      top: ${({ $isListPage }) => $isListPage && '16px'};
      padding: 3px 7px;
      font-size: ${({ $isListPage }) => $isListPage && '10px'};
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
    .box-text {
      padding: 18px;
      gap: 10px;
    }

    .button {
      height: 34px;
    }
  }
`;
