import React, { useEffect, useRef } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export function TextAreaComponent({ id, name, hasBar, label, ...rest }: any) {
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
    <S.Input>
      <div className="input-textarea">
        <label htmlFor={id} className="title-11-roboto-medium label-text">
          {label}
        </label>

        {hasBar && <span className="title-11-roboto-medium bar">|</span>}

        <textarea
          id={id}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          className="title-11-roboto-regular"
        />

        {error && (
          <span className="title-11-roboto-medium error-message">{error}</span>
        )}
      </div>
    </S.Input>
  );
}
