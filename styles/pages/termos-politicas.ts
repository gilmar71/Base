import styled from 'styled-components';

export const TermosPoliticas = styled.section`
  padding: 140px 0 100px;

  ul + * {
    margin-top: 10px;
  }

  h2 {
    color: var(--primary-color);
    line-height: 1;
    font-size: 35px;

    & + * {
      margin-top: 20px;
    }
  }

  h3 {
    font-size: 22px;

    & + * {
      margin-top: 10px;
    }
  }

  .content {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    box-shadow: 0 3px 50px rgba(0, 0, 0, 0.1);

    p {
      font-size: 16px;
      line-height: 1.3;

      & + * {
        margin-top: 10px;
      }

      & + h2 {
        margin-top: 30px;
      }
    }
  }

  ul {
    list-style: unset;
  }

  li {
    margin-left: 30px;
    font-size: 16px;

    & + li {
      margin-top: 8px;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    ul + * {
      margin-top: 10px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 20px;
    }

    .content {
      padding: 40px;

      p {
        font-size: 15px;

        & + h2 {
          margin-top: 25px;
        }
      }
    }

    li {
      margin-left: 25px;
      font-size: 16px;

      & + li {
        margin-top: 6px;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    ul + * {
      margin-top: 20px;
    }

    h2 {
      font-size: 30px;

      & + * {
        margin-top: 12px;
      }
    }

    h3 {
      font-size: 18px;
    }

    .content {
      padding: 35px;

      p {
        font-size: 15px;

        & + h2 {
          margin-top: 25px;
        }
      }
    }

    li {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 100px 0 80px;

    h2 {
      font-size: 25px;
    }

    .content p {
      font-size: 14px;
    }

    li {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 16px;
    }

    .content p {
      font-size: 13px;
    }

    li {
      font-size: 13px;
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 90px 0 60px;

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 15px;
    }

    .content {
      padding: 25px;

      p {
        font-size: 12px;
      }
    }

    li {
      font-size: 12px;
      margin-left: 15px;

      & + li {
        margin-top: 5px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    h2 {
      font-size: 18px;
    }

    .content {
      padding: 18px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;
