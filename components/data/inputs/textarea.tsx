import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export function TextAreaComponent({
  id,
  name,
  label,
  hasBar,
  noMargin,
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

  const fontSizeFamilyLabel = 'title-11-zonaproBold uppercase';
  const fontSizeFamilyInput = 'title-11';

  return (
    <S.Input hasBar={hasBar} noMargin={noMargin}>
      <div className="input-textarea">
        {label && (
          <label
            className={`label-text ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-11'
            }`}
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {hasBar && (
          <span
            className={`${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-11'
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
          className={fontSizeFamilyInput ? fontSizeFamilyInput : 'title-11'}
        />

        {error && (
          <span
            className={`error ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-11'
            } error-message`}
          >
            {error}
          </span>
        )}
      </div>
    </S.Input>
  );
}
