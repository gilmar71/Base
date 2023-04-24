import styled from 'styled-components';

export const BoxContact = styled.div`
  width: 100%;

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
    gap: 30px;

    .button {
      width: 100%;

      button {
        border-radius: 10px;
      }
    }

    .recaptcha {
      width: 100%;
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
    .actions {
      gap: 10px;
    }
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
`;
