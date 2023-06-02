import styled from 'styled-components';

interface ITextImageStyles {
  $type: 1 | 2 | 3;
}

export const TextImage = styled.section<ITextImageStyles>`
  background-color: ${({ $type }) => ($type === 3 ? '#fff' : '#f2f2f2')};
  padding-bottom: ${({ $type }) => $type === 3 && '0'};

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4.5vw;
    flex-direction: ${({ $type }) => $type === 2 && 'row-reverse'};
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    h2 {
      color: var(--primary-color);
    }
  }

  .next-image {
    border-radius: 20px;
    aspect-ratio: ${({ $type }) =>
      $type === 1
        ? '704/417'
        : $type === 2
        ? '704/347'
        : $type === 3 && '833/660'};
  }

  .button {
    display: ${({ $type }) => $type === 3 && 'none'};
    max-width: fit-content;
    padding: 0 35px;
    font-weight: 700;
  }

  .description {
    height: ${({ $type }) => $type === 3 && '450px'};
  }

  .show-mobile {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    padding: ${({ $type }) =>
      $type === 1 ? '70px 0 40px' : $type === 2 && '40px 0 70px'};

    .container {
      gap: 4vw;
    }

    .description {
      height: ${({ $type }) => $type === 3 && '400px'};
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: ${({ $type }) =>
      $type === 1 ? '60px 0 30px' : $type === 2 && '30px 0 60px'};

    .container {
      gap: 3vw;
    }

    .box-text {
      gap: 20px;
    }

    .description {
      line-height: 1.2;
      height: ${({ $type }) => $type === 3 && '350px'};
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: ${({ $type }) =>
      $type === 1 ? '50px 0 30px' : $type === 2 && '30px 0 50px'};

    .container {
      gap: 2.5vw;
    }

    .description {
      height: ${({ $type }) => ($type === 3 ? '300px' : '170px')};
      line-height: 1.3;
    }

    .button {
      padding: 0 25px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: ${({ $type }) =>
      $type === 1 ? '35px 0 20px' : $type === 2 && '20px 0 35px'};

    .container {
      gap: 3vw;
      justify-content: center;
      max-width: 680px;
    }

    .box-text {
      gap: 20px;
      text-align: center;
      align-items: center;
    }

    .description {
      height: unset;
    }

    .button {
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: block;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    padding: ${({ $type }) =>
      $type === 1 ? '30px 0 16px' : $type === 2 && '16px 0 30px'};

    .container {
      max-width: 580px;
    }
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    padding: ${({ $type }) =>
      $type === 1 ? '25px 0 12px' : $type === 2 && '12px 0 25px'};

    .box-text {
      gap: 16px;
    }

    .description {
      height: ${({ $type }) => ($type === 3 ? '200px' : '130px')};
    }

    .button {
      padding: 0 20px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;
