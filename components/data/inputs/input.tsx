import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

import { useField } from '@unform/core';

const ReactInputMask = dynamic(() => import('react-input-mask'), {
  ssr: false,
});

import { EyeClosedIcon, EyeOpenedIcon } from 'components/icons';

import * as S from './styles';

export interface Props {
  id?: string;
  name: string;
  labelAnimation?: string;
  label?: string;
  edit?: boolean;
  type: string;
  mask?: string;
  placeholder?: string;
  onChangeInput?: React.Dispatch<string>;
  noMargin?: boolean;
  hasBar?: boolean;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

export function InputComponent({
  id,
  name,
  edit,
  type,
  mask,
  label,
  hasBar,
  noMargin,
  onChangeInput,
  labelAnimation,
  fontSizeFamilyInput,
  fontSizeFamilyLabel,
  ...rest
}: InputProps) {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    <S.Input hasBar={hasBar} noMargin={noMargin}>
      <div className="input-content">
        {label && (
          <label
            className={`label-text ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-4'
            }`}
            htmlFor={id}
          >
            {label}
          </label>
        )}

        {hasBar && (
          <span
            className={`${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-4'
            } bar`}
          >
            |
          </span>
        )}

        {mask ? (
          <ReactInputMask
            mask={mask}
            onChange={(e) => {
              setValue(e.target.value);

              if (onChangeInput) {
                onChangeInput(e.target.value);
              }
            }}
            value={value}
          >
            {() => (
              <input
                className={
                  fontSizeFamilyInput ? fontSizeFamilyInput : 'title-4'
                }
                id={id}
                defaultValue={defaultValue}
                ref={inputRef}
                type={
                  type === 'password' && !showPassword
                    ? 'password'
                    : type === 'password'
                    ? 'text'
                    : type
                }
                name={name}
                {...rest}
              />
            )}
          </ReactInputMask>
        ) : (
          <>
            <input
              id={id}
              defaultValue={defaultValue}
              ref={inputRef}
              name={name}
              type={
                type === 'password' && !showPassword
                  ? 'password'
                  : type === 'password'
                  ? 'text'
                  : type
              }
              {...rest}
              className={fontSizeFamilyInput ? fontSizeFamilyInput : 'title-4'}
              onChange={(e) => {
                if (labelAnimation) {
                  setValue(e.target.value);
                }
              }}
            />
          </>
        )}

        {labelAnimation && (
          <label
            htmlFor={id}
            className={`label-animation ${
              fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-4'
            } ${value.length > 0 && 'active'}`}
            onClick={() => {
              inputRef.current?.focus();
            }}
          >
            {labelAnimation}
          </label>
        )}

        {type === 'password' && (
          <button
            type="button"
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
            aria-label="password eye"
          >
            {!showPassword ? <EyeClosedIcon /> : <EyeOpenedIcon />}
          </button>
        )}
      </div>

      {error && (
        <span
          className={`error ${
            fontSizeFamilyLabel ? fontSizeFamilyLabel : 'title-4'
          } error-message`}
        >
          {error}
        </span>
      )}
    </S.Input>
  );
}
