import styled from 'styled-components';

interface InputProps {
  $hasBar?: boolean;
  $inputBg?: string;
  $noMargin?: boolean;
  $hasBorder?: boolean;
  $borderWithBar?: boolean;
  $inputBoxShadow?: string;
}

export const Input = styled.div<InputProps>`
  width: 100%;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '30px')};
  background-color: ${({ $hasBar }) => $hasBar && '#fff'};
  padding-left: ${({ $hasBar }) => $hasBar && '15px'};
  border-radius: 10px;
  overflow: ${({ $hasBar }) => $hasBar && 'hidden'};
  border: ${({ $borderWithBar }) =>
    $borderWithBar && '1px solid rgba(23,23,23,0.4)'};

  .bar {
    color: #000;
  }

  .input-content {
    width: 100%;
    position: relative;
    display: ${({ $hasBar }) => $hasBar && 'flex'};
    gap: ${({ $hasBar }) => $hasBar && '7px'};
    align-items: ${({ $hasBar }) => $hasBar && 'center'};
    justify-content: ${({ $hasBar }) => $hasBar && 'center'};

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
      margin-top: ${({ $hasBar }) => ($hasBar ? '' : '5px')};
    }
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: ${({ $hasBar }) => ($hasBar ? '' : '0 15px')};
    resize: none;
    border-radius: 5px;
    background-color: ${({ $inputBg }) =>
      $inputBg ? $inputBg : 'rgba(0, 0, 0, 0.1)'};
    /* Esse box-shadow manipula o que acontece no preenchimento automático do input */
    box-shadow: ${({ $inputBoxShadow }) =>
      $inputBoxShadow
        ? $inputBoxShadow
        : 'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px rgba(255, 255, 255, 1)'};
    border: ${({ $hasBorder }) =>
      $hasBorder ? '1px solid rgba(23,23,23,0.4)' : '0'};
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
    height: ${({ $hasBar }) => $hasBar && '150px'};
    padding-top: ${({ $hasBar }) => $hasBar && '15px'};
    gap: ${({ $hasBar }) => $hasBar && '7px'};
    display: ${({ $hasBar }) => $hasBar && 'flex'};
  }

  textarea {
    height: ${({ $hasBar }) => ($hasBar ? '' : '150px')};
    padding-top: ${({ $hasBar }) => ($hasBar ? '' : '15px')};
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
    margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '25px')};

    input,
    select {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '20px')};

    input,
    select {
      height: 46px;
    }

    .input-textarea {
      height: ${({ $hasBar }) => $hasBar && '130px'};
    }

    textarea {
      height: ${({ $hasBar }) => ($hasBar ? '' : '130px')};
    }
  }

  @media only screen and (max-width: 1200px) {
    margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '15px')};

    input,
    select {
      height: 44px;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '10px')};

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
      height: ${({ $hasBar }) => $hasBar && '120px'};
    }

    textarea {
      height: ${({ $hasBar }) => ($hasBar ? '' : '120px')};
    }
  }

  @media only screen and (max-width: 500px) {
    input,
    select {
      height: 38px;
    }
  }
`;

export const InputCepBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 10px;
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
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: 400px) {
  }
`;

export const InputRadioComponent = styled.div`
  display: flex;
  gap: 15px;

  .radio {
    display: flex;
    gap: 8px;
  }
`;
