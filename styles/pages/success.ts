import styled from 'styled-components';

export const SuccessPage = styled.section`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    max-width: 500px;
    gap: 30px;

    h2,
    p {
      color: #000;
    }
  }

  .button {
    max-width: 300px;

    a,
    button {
      color: #fff;
    }
  }

  @media only screen and (max-width: 650px) {
    .button {
      max-width: 200px;
    }
  }
`;
