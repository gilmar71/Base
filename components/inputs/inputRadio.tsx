import { useCallback, useEffect, useRef, useState } from 'react';

import { useField } from '@unform/core';

import * as S from './styles';

export interface IInputProps {
  name: string;
  options: Options[];
}

interface Options {
  option: string;
}

type InputProps = JSX.IntrinsicElements['input'] & IInputProps;

export function InputRadioComponent({ name, options }: InputProps) {
  const [value, setValue] = useState('');
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const handleOnChange = useCallback(
    (input: React.ChangeEvent<HTMLInputElement>) => {
      if (value !== input.target.value) {
        ({ value: '', input: null });
      }

      setValue(input.target.value);
    },
    [],
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRefs.current,
      getValue: (refs: HTMLInputElement[]) => {
        return refs.find((ref) => ref.checked)?.value || '';
      },
      setValue: (refs: HTMLInputElement[], id: string) => {
        const inputRef = refs.find((ref) => ref.id === id);
        if (inputRef) inputRef.checked = true;
      },
      clearValue: (refs: HTMLInputElement[]) => {
        const inputRef = refs.find((ref) => ref.checked === true);
        if (inputRef) inputRef.checked = false;
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.InputRadioComponent>
      {options.map((object, index) => (
        <>
          <div className="radio">
            <input
              ref={(ref) => ref && (inputRefs.current[index] = ref)}
              type="radio"
              id="cabelereiro"
              name="cabelereiro"
              value={object.option}
              onChange={handleOnChange}
            />

            <label className="paragraph-2 radio-label" htmlFor="opcao1">
              {object.option}
            </label>
          </div>

          {error && (
            <span className="error paragraph-2 error-message">{error}</span>
          )}
        </>
      ))}
    </S.InputRadioComponent>
  );
}
