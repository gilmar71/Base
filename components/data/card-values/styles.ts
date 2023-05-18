import styled from 'styled-components';

interface ICardValuesStyles {
  type?: 1 | 2;
}

export const CardValues = styled.div<ICardValuesStyles>`
  width: 100%;
  border-radius: ${({ type }) => type === 1 && '10px'};
  background-color: ${({ type }) => type === 1 && '#fff'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ type }) => type === 1 && '50px'};
  text-align: center;
  gap: ${({ type }) => (type === 1 ? '25px' : type === 2 && '15px')};
  box-shadow: ${({ type }) => type === 1 && '0 3px 6px rgba(0, 0, 0, 0.16)'};
  margin-bottom: ${({ type }) => type === 1 && '2px'};

  .svg-icon {
    max-width: 65px;
    width: 100%;
    aspect-ratio: 1;
  }

  h2 {
    color: var(--secondary-color);
    height: ${({ type }) => type === 2 && '36px'};
    width: 100%;
    max-width: ${({ type }) => type === 2 && '170px'};
    text-align: center;
  }

  p {
    color: var(--text-color);
    height: ${({ type }) => type === 1 && '65px'};
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
    padding: ${({ type }) => type === 1 && '40px'};
    gap: ${({ type }) => type === 2 && '12px'};
  }

  @media only screen and (max-width: 1400px) {
    padding: ${({ type }) => type === 1 && '35px'};
    gap: ${({ type }) => type === 1 && '20px'};

    .svg-icon {
      max-width: 60px;
    }

    h2 {
      height: ${({ type }) => type === 2 && '32px'};
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: ${({ type }) => type === 1 && '20px'};
    gap: 10px;

    h2 {
      height: ${({ type }) => type === 2 && '30px'};
    }

    .svg-icon {
      max-width: 55px;
    }
  }

  @media only screen and (max-width: 1024px) {
    gap: ${({ type }) => (type === 1 ? '15px' : type === 2 && '12px')};

    h2 {
      height: ${({ type }) => type === 2 && '28px'};
    }

    .svg-icon {
      max-width: 50px;
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

  @media only screen and (max-width: 390px) {
    gap: 10px;
  }
`;
