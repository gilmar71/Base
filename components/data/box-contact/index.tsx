import router from 'next/router';

import { api } from 'src/services/api';

import { FormHandler } from 'codieweb/dist/cjs/components/data/form-handler';

import {
  InputMask,
  InputComponent,
  TextAreaComponent,
  SelectComponent,
} from 'components/inputs';

import * as S from './styles';
import { ButtonProps } from 'codieweb/dist/cjs/components/data/button';
import { IDefaultSchemas } from 'codieweb/dist/cjs/components/data/form-handler/generate-schemas';
import { PhoneIcon } from 'components/icons';
import { Error } from '../error-body';

interface BoxContactProps {
  configs: IBoxContact;
  buttonProps: ButtonProps;
  defaultSchemas?: IDefaultSchemas;
  recaptcha?: {
    key?: string;
    active?: boolean;
  };
  onSucess: (data: any) => void;
  type?: 1 | 2 | 3 | 4 | 5;
}

export interface IBoxContact {
  hasBar?: boolean;
  hasBorder?: boolean;
  hasSelect?: boolean;
  borderWithBar?: boolean;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

export function BoxContact({
  type,
  configs,
  onSucess,
  recaptcha,
  buttonProps,
  defaultSchemas,
}: BoxContactProps) {
  const options = [
    {
      label: 'teste',
      value: 'teste',
    },
    {
      label: 'teste2',
      value: 'teste2',
    },
    {
      label: 'teste3',
      value: 'teste3',
    },
  ];
  return (
    <Error name="box-contact">
      <S.BoxContact id="box-contact" $type={type}>
        {(type === 2 || type === 4 || type === 5) && (
          <h2 className="title-2 title uppercase">Entre em contato</h2>
        )}

        <FormHandler
          button={buttonProps}
          onSucess={onSucess}
          defaultSchemas={defaultSchemas}
          recaptcha={recaptcha}
        >
          <InputComponent
            configs={{
              name: 'name',
              type: 'text',
              label: <PhoneIcon />,
              placeholder: 'Digite seu nome completo aqui',
              fontSizeFamilyInput: configs.fontSizeFamilyInput,
              fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
              hasBar: configs.hasBar,
              hasBorder: configs.hasBorder,
              borderWithBar: configs.borderWithBar,
            }}
          />

          <InputComponent
            configs={{
              name: 'email',
              type: 'email',
              label: 'E-mail',
              placeholder: 'Digite seu e-mail aqui',
              fontSizeFamilyInput: configs.fontSizeFamilyInput,
              fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
              hasBar: configs.hasBar,
              hasBorder: configs.hasBorder,
              borderWithBar: configs.borderWithBar,
            }}
          />

          <InputMask
            configs={{
              id: 'phone',
              mask: '(99) 9 9999-9999',
              name: 'phone',
              label: 'Telefone',
              placeholder: '(DDD) 9 9999-9999',
              fontSizeFamilyInput: configs.fontSizeFamilyInput,
              fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
              hasBar: configs.hasBar,
              hasBorder: configs.hasBorder,
              borderWithBar: configs.borderWithBar,
            }}
          />

          {configs.hasSelect && (
            <SelectComponent
              configs={{
                name: 'teste',
                label: 'teste',
                optionsSelect: options,
                hasBar: configs.hasBar,
                fontSizeFamilyInput: configs.fontSizeFamilyInput,
                fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
              }}
            />
          )}

          <TextAreaComponent
            configs={{
              id: 'message',
              name: 'message',
              label: 'Mensagem',
              placeholder: 'O que deseja dizer?',
              fontSizeFamilyInput: configs.fontSizeFamilyInput,
              fontSizeFamilyLabel: configs.fontSizeFamilyLabel,
              hasBar: configs.hasBar,
              hasBorder: configs.hasBorder,
              borderWithBar: configs.borderWithBar,
            }}
          />
        </FormHandler>
      </S.BoxContact>
    </Error>
  );
}
