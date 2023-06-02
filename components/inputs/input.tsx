import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export interface Props {
  name: string;
  label?: string;
  type: string;
  mask?: string;
  placeholder?: string;
  noMargin?: boolean;
  hasBorder?: boolean;
  hasBar?: boolean;
  borderWithBar?: boolean;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export function InputComponent({
  id,
  name,
  type,
  mask,
  label,
  hasBar,
  noMargin,
  hasBorder,
  placeholder,
  borderWithBar,
  fontSizeFamilyInput,
  fontSizeFamilyLabel,
  ...rest
}: InputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: 'value',
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input
      hasBar={hasBar}
      noMargin={noMargin}
      hasBorder={hasBorder}
      borderWithBar={borderWithBar}
      className={name}
    >
      <div className="input-content">
        {label && (
          <label
            className={`label-text ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'paragraph-2'
            }`}
            htmlFor={name}
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
          id={name}
          name={name}
          type={type}
          ref={inputRef}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={fontSizeFamilyInput ? fontSizeFamilyInput : 'paragraph-2'}
          {...rest}
        />
      </div>

      {error && (
        <span
          className={`error ${
            fontSizeFamilyLabel ? fontSizeFamilyLabel : 'paragraph-2'
          } error-message`}
        >
          {error}
        </span>
      )}
    </S.Input>
  );
}
