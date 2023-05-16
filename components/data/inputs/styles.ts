import styled from 'styled-components';

interface InputProps {
  noMargin?: boolean;
  hasBar?: boolean;
}

export const Input = styled.div<InputProps>`
  width: 100%;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '30px')};
  background-color: ${({ hasBar }) => hasBar && '#fff'};
  padding-left: ${({ hasBar }) => hasBar && '15px'};
  border-radius: ${({ hasBar }) => hasBar && '5px'};
  overflow: ${({ hasBar }) => hasBar && 'hidden'};

  .bar {
    color: #000;
  }

  .input-content {
    width: 100%;
    position: relative;
    display: ${({ hasBar }) => hasBar && 'flex'};
    gap: ${({ hasBar }) => hasBar && '7px'};
    align-items: ${({ hasBar }) => hasBar && 'center'};
    justify-content: ${({ hasBar }) => hasBar && 'center'};

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

  .label-text {
    color: #000;
    width: 100%;
    max-width: fit-content;

    & + * {
      margin-top: ${({ hasBar }) => (hasBar ? '' : '5px')};
    }
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: ${({ hasBar }) => (hasBar ? '' : '0 15px')};
    resize: none;
    border: 0;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
    /* Esse box-shadow manipula o que acontece no preenchimento automático do input */
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 0 0 100px rgba(255, 255, 255, 1);
  }

  input,
  select {
    height: 48px;
  }

  input:read-only {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .input-textarea {
    height: ${({ hasBar }) => hasBar && '150px'};
    padding-top: ${({ hasBar }) => hasBar && '15px'};
    gap: ${({ hasBar }) => hasBar && '7px'};
    display: ${({ hasBar }) => hasBar && 'flex'};
  }

  textarea {
    height: ${({ hasBar }) => (hasBar ? '' : '150px')};
    padding-top: ${({ hasBar }) => (hasBar ? '' : '15px')};
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
    margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '25px')};

    input,
    select {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '20px')};

    input,
    select {
      height: 46px;
    }

    .input-textarea {
      height: ${({ hasBar }) => hasBar && '130px'};
    }

    textarea {
      height: ${({ hasBar }) => (hasBar ? '' : '130px')};
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '15px')};

    input,
    select {
      height: 44px;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: ${({ noMargin }) => (noMargin ? '0' : '10px')};

    input,
    select {
      height: 42px;
    }
  }

  @media only screen and (max-width: 768px) {
    input,
    select {
      height: 40px;
    }

    .input-textarea {
      height: ${({ hasBar }) => hasBar && '120px'};
    }

    textarea {
      height: ${({ hasBar }) => (hasBar ? '' : '120px')};
    }
  }

  @media only screen and (max-width: 500px) {
    input,
    select {
      height: 38px;
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
