import styled from 'styled-components';

interface IContactStyles {
  isPage?: boolean;
}

export const Contact = styled.section<IContactStyles>`
  padding-top: ${({ isPage }) => (isPage ? '220px' : '10px')};
  padding-bottom: 80px;

  .container {
    display: flex;
    flex-direction: ${({ isPage }) => isPage && 'column'};
    gap: ${({ isPage }) => isPage && '30px'};

    justify-content: center;
    align-items: center;
    padding-left: 8px;
    padding-right: 8px;
  }

  .box-title {
    text-align: center;

    h3 {
      color: var(--tertiary-color);

      & + * {
        margin-top: 10px;
      }
    }

    h2 {
      color: var(--secondary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding-top: ${({ isPage }) => (isPage ? '200px' : '10px')};
    padding-bottom: 70px;
  }

  @media only screen and (max-width: 1400px) {
    padding-top: ${({ isPage }) => (isPage ? '180px' : '10px')};
    padding-bottom: 60px;
  }

  @media only screen and (max-width: 1200px) {
    padding-top: ${({ isPage }) => (isPage ? '160px' : '10px')};
    padding-bottom: 50px;
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    padding-top: ${({ isPage }) => (isPage ? '150px' : '10px')};
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 390px) {
    padding-top: ${({ isPage }) => (isPage ? '130px' : '10px')};
  }
`;
