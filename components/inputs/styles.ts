import styled from 'styled-components';

export const Input = styled.div`
  /* position: relative; */
  margin-bottom: 40px;
  width: 100%;

  /* .label-animation {
    color: rgb(160 160 160);
    text-align: left;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 20px;
    background-color: rgb(229 229 229);
    width: 100%;
    transition: 0.3s;
  } */

  .input-content {
    width: 100%;
    position: relative;

    input:focus + .label-animation,
    .label-animation:focus {
      background: transparent;
      top: 0;
      width: auto;

      span {
        display: block;
        transform: scale(0.9);
        margin-left: -5px;
      }
    }
  }

  /* .input-content.edit {
    .label-animation {
      top: 8px;
      transform: unset;
    }

    input:focus + .label-animation {
      background: transparent;
      top: 8px;
      width: unset;

      span {
        display: unset;
        transform: unset;
        margin-left: unset;
      }
    }

    .label-animation {
      opacity: 0.3;
      color: #000000;
      font-size: 12px;
      position: absolute;
    }

    input {
      height: 50px;
      padding-top: 23px;
    }
  } */

  /* .label-animation.active {
    background-color: transparent;
    top: -2px;
    width: auto;

    span {
      display: block;
      transform: scale(0.9);
      margin-left: -5px;
    }
  } */

  /* .input-content + *,
  .input-content + div + * {
    display: block;
  } */

  input,
  textarea,
  select {
    width: 100%;
    background-color: var(--white);
    padding: 0 15px;
    color: rgba(0, 0, 0, 0.5);
    border: 0;
  }

  /* textarea {
    display: block;
  } */

  /* select {
    background-color: #eae8ee;
    color: rgb(51, 33, 84, 1);
    background-image: url('/images/seta-dark.svg');
    background-repeat: no-repeat;
    background-position: 96% center;
    background-size: 16px 9px;
    outline: none;
  } */

  /* select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  } */

  /* select::-ms-expand {
    display: none;
  } */

  /* .selectValidator {
    display: none;
  } */

  /* .selectValidator[value=''] + select {
    color: #b2adc9;
  } */

  input,
  select {
    height: 50px;
  }

  input:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }

  textarea {
    height: 140px;
    padding-top: 15px;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: rgba(0, 0, 0, 0.5);
  }

  input::-moz-placeholder,
  textarea::-moz-placeholder {
    /* Firefox 19+ */
    color: rgba(0, 0, 0, 0.5);
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    /* IE 10+ */
    color: rgba(0, 0, 0, 0.5);
  }

  input:-moz-placeholder,
  textarea:-moz-placeholder {
    /* Firefox 18- */
    color: rgba(0, 0, 0, 0.5);
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  .eye {
    background-color: unset;
    border: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;

    svg {
      width: 20px;
      height: auto;
      fill: rgba(0, 0, 0, 0.3);
    }
  }

  @media only screen and (max-width: 1600px) {
    margin-bottom: 35px;

    input {
      height: 48px;
    }
    textarea {
      height: 135px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: 30px;

    input {
      height: 46px;
    }
    textarea {
      height: 130px;
    }
  }
  @media only screen and (max-width: 1200px) {
    margin-bottom: 25px;

    input {
      height: 44px;
    }
    textarea {
      height: 125px;
    }
  }
  @media only screen and (max-width: 1024px) {
    margin-bottom: 20px;

    input {
      height: 42px;
    }
    textarea {
      height: 120px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 15px;

    input {
      height: 40px;
    }
    textarea {
      height: 110px;
    }
  }
  @media only screen and (max-width: 500px) {
    margin-bottom: 12px;

    input {
      height: 38px;
    }
    textarea {
      height: 85px;
    }
  }
`;

export const InputEdit = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: rgba(51, 33, 84, 0.1);
  position: relative;
  padding: 22px 50px 15px 20px;

  input {
    background-color: transparent;
    border: 0;
    color: var(--base-color);
    width: 100%;
  }

  .editIcon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 23px;
    margin: 0;
    display: flex;

    svg {
      cursor: pointer;
      opacity: 0.3;
      transition: 0.3s;
    }
    svg:hover {
      opacity: 1;
    }
  }
`;

export const InputRadio = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 15px;

  .error-message {
    margin-top: -5px;
  }
  .input-content {
    display: flex;
    justify-content: flex-start;
    gap: 15px;
    width: 100%;
  }

  label {
    cursor: pointer;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    background-color: #fff;
    transition: 0.3s;
  }

  input[type='radio']:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    margin: 3px auto;
    border-radius: 50%;
  }
  input[type='radio']:checked:hover {
    background-color: transparent;
  }
  input[type='radio']:checked:before {
    background: var(--secundary-color);
  }

  label {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media only screen and (max-width: 768px) {
    label {
      span {
        /* width: calc(100% - 22px); */
      }
    }
  }

  @media only screen and (max-width: 400px) {
    input[type='radio'] {
      width: 10px;
      height: 10px;
    }

    input[type='radio']:before {
      content: '';
      width: 5px;
      height: 5px;
      margin: 1.2px auto 0px;
    }

    label {
      span {
        width: calc(100% - 16px);
      }
    }
  }
`;
