import React, { useEffect, useState, useRef } from 'react';

import { useField } from '@unform/core';

import ReactInputMask from 'comigo-tech-react-input-mask';

import * as S from './styles';

interface Props {
  name: string;
  mask: string;
  label?: string;
  edit?: boolean;
  placeholder?: string;
  onChangeInput?: React.Dispatch<string>;
  noMargin?: boolean;
  hasBorder?: boolean;
  borderWithBar?: boolean;
  hasBar?: boolean;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export function InputMask({
  id,
  name,
  mask,
  label,
  hasBar,
  noMargin,
  hasBorder,
  placeholder,
  onChangeInput,
  borderWithBar,
  fontSizeFamilyInput,
  fontSizeFamilyLabel,
  readOnly,
}: InputProps) {
  const [value, setValue] = useState('');
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const ref = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: null,
      getValue: () => {
        return value.replaceAll('_', '');
      },
      setValue: () => {
        setValue(value);
      },
      clearValue: () => {
        setValue('');
      },
    });
  }, [fieldName, value, registerField]);

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  return (
    <S.Input
      hasBar={hasBar}
      noMargin={noMargin}
      hasBorder={hasBorder}
      borderWithBar={borderWithBar}
    >
      <div className="input-content">
        {label && (
          <label
            className={`label-text ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'paragraph-2'
            }`}
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {hasBar && (
          <span
            className={`${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'paragraph-2'
            } bar`}
          >
            |
          </span>
        )}

        <input
          style={{ display: 'none' }}
          ref={ref}
          defaultValue={value}
          type="text"
          name={name}
        />

        <ReactInputMask
          mask={mask}
          onChange={(e) => {
            setValue(e.target.value);

            if (onChangeInput) {
              onChangeInput(e.target.value);
            }
          }}
          value={value}
          className={fontSizeFamilyInput ? fontSizeFamilyInput : 'paragraph-2'}
          id={id}
          type="text"
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </div>

      {error && (
        <span className="error paragraph-3-medium-lato error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
