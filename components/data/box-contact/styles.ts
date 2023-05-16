import styled from 'styled-components';

export const BoxContact = styled.div`
  width: 100%;
  max-width: 48vw;

  .form {
    display: flex;
    flex-direction: column;

    .phone-plan {
      display: flex;
      gap: 20px;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 15px;

    .button {
      width: 100%;

      button {
        border-radius: 10px;
      }
    }

    .captcha {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .actions {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1200px) {
    max-width: 60vw;

    .actions {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .actions {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 900px) {
    max-width: 65vw;
  }

  @media only screen and (max-width: 768px) {
    max-width: 75vw;
  }

  @media only screen and (max-width: 650px) {
    .actions {
      flex-direction: column;
      align-items: center;
      max-width: 304px;
      margin-left: auto;
      margin-right: auto;
      gap: 10px;

      .captcha {
        justify-content: center;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    max-width: 304px;
  }
`;
