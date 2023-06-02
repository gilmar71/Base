import styled from 'styled-components';

interface ICardValuesStyles {
  $type?: 1 | 2;
}

export const CardValues = styled.div<ICardValuesStyles>`
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ $type }) => ($type === 1 ? '38px' : $type === 2 && '45px')};
  gap: ${({ $type }) => ($type === 1 ? '25px' : $type === 2 && '15px')};
  border: 1px solid var(--tertiary-color);

  .svg-icon {
    max-width: 50px;
    width: 100%;
    aspect-ratio: 1;
    height: auto;
  }

  h2 {
    color: var(--primary-color);
    height: ${({ $type }) => ($type === 1 ? '40px' : $type === 2 && '60px')};
    width: 100%;
    text-align: ${({ $type }) => $type === 2 && 'center'};
  }

  .description {
    height: 95px;
  }

  .box-top {
    display: flex;
    align-items: center;
    gap: 15px;
    height: 50px;
  }

  /* Responsives */

  @media only screen and (max-width: 1600px) {
    padding: ${({ $type }) => ($type === 1 ? '32px' : $type === 2 && '40px')};
    gap: ${({ $type }) => ($type === 1 ? '15px' : $type === 2 && '12px')};

    h2 {
      height: ${({ $type }) => ($type === 1 ? '35px' : $type === 2 && '50px')};
    }

    .box-top {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: ${({ $type }) => $type === 2 && '40px 65px'};

    .box-top {
      gap: 15px;
    }

    .description {
      height: 80px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: ${({ $type }) => $type === 2 && '30px 52px'};

    .box-top {
      height: 45px;
    }

    .description {
      height: 75px;
    }

    .svg-icon {
      max-width: 45px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: ${({ $type }) => $type === 2 && '30px 15px'};

    .description {
      height: 60px;
    }

    .box-top {
      gap: 20px;
    }

    .svg-icon {
      max-width: 50px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: ${({ $type }) => $type === 2 && '30px 58px'};
  }

  @media only screen and (max-width: 768px) {
    padding: ${({ $type }) =>
      $type === 1 ? '28px' : $type === 2 && '30px 32px'};

    .svg-icon {
      max-width: 40px;
    }

    .box-top {
      gap: 15px;
      height: 40px;
    }
  }

  @media only screen and (max-width: 650px) {
    padding: ${({ $type }) => $type === 2 && '30px 45px'};

    .box-top {
      width: 100%;
      max-width: 230px;
    }
  }

  @media only screen and (max-width: 500px) {
    .svg-icon {
      max-width: 45px;
    }

    .box-top {
      height: 45px;
    }
  }

  @media only screen and (max-width: 390px) {
    gap: 10px;

    .svg-icon {
      max-width: 40px;
    }
  }
`;
