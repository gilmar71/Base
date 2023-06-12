import React, { useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export interface IOption {
  label: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label: string;
  hasBorder?: boolean;
  hasBar?: boolean;
  borderWithBar?: boolean;
  placeholder?: string;
  optionsSelect: IOption[];
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

export interface ISelect {
  configs: SelectProps;
}

export function SelectComponent({ configs, ...rest }: ISelect) {
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLSelectElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(
    configs.name,
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current || value,
      path: 'value',
      setValue: (e) => {
        setValue(e);
      },
    });
  }, [fieldName, value, registerField]);

  return (
    <S.Input
      hasBar={configs.hasBar}
      hasBorder={configs.hasBorder}
      borderWithBar={configs.borderWithBar}
    >
      <div className="input-content">
        {configs.label && (
          <label
            className={`label-text ${
              configs.fontSizeFamilyLabel
                ? configs.fontSizeFamilyLabel
                : 'paragraph-2'
            }`}
            htmlFor={configs.label}
          >
            {configs.label}
          </label>
        )}

        <select
          id={configs.name}
          name={configs.name}
          ref={inputRef}
          value={defaultValue || value}
          className={`${
            configs.fontSizeFamilyInput
              ? configs.fontSizeFamilyInput
              : 'paragraph-2'
          } select-${configs.name}`}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...rest}
        >
          {configs.placeholder && (
            <option className="placeholder-select paragraph-2">
              {configs.placeholder}
            </option>
          )}

          {configs.optionsSelect.map((option, i) => {
            return (
              <option
                key={'select' + option.value + i}
                value={option.value}
                className="paragraph-2"
              >
                {option.label}
              </option>
            );
          })}
        </select>
      </div>

      {error && (
        <span className="error paragraph-3 select-gender error-message">
          {error}
        </span>
      )}
    </S.Input>
  );
}
