import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export function TextAreaComponent({
  id,
  name,
  label,
  hasBar,
  noMargin,
  hasBorder,
  fontSizeFamilyInput,
  fontSizeFamilyLabel,
  ...rest
}: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <S.Input hasBar={hasBar} noMargin={noMargin} hasBorder={hasBorder}>
      <div className="input-textarea">
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

        <textarea
          id={id}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          className={fontSizeFamilyInput ? fontSizeFamilyInput : 'paragraph-2'}
        />

        {error && (
          <span
            className={`error ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'paragraph-2'
            } error-message`}
          >
            {error}
          </span>
        )}
      </div>
    </S.Input>
  );
}
