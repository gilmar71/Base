import styled from 'styled-components';

export const NotFound = styled.section`
  color: #000;
  text-align: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    max-width: 500px;
  }

  .button {
    max-width: 300px;
  }

  @media only screen and (max-width: 650px) {
    .button {
      max-width: 200px;
    }
  }
`;
