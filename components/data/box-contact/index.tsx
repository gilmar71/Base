import router from 'next/router';

import { api } from 'src/services/api';

import { FormHandler } from 'codieweb/dist/cjs/components/data/form-handler';

import { InputComponent, TextAreaComponent } from 'components/data/inputs/core';

import * as S from './styles';

interface IBoxContact {
  hasBar?: boolean;
  fontSizeFamilyLabel?: string;
  fontSizeFamilyInput?: string;
}

interface SubmitProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export function BoxContact({
  hasBar,
  fontSizeFamilyLabel,
  fontSizeFamilyInput,
}: IBoxContact) {
  async function handleSucess(data: SubmitProps) {
    const response = await api.post('form', { data });

    if (response.status === 200) {
      router.push({ pathname: '/contato/sucesso', query: data.name });
    }
  }
  return (
    <S.BoxContact id="box-contact">
      <FormHandler
        button={{
          text: 'Enviar',
          className: 'link-4-zonapro',
          color: '#fff',
          backgroundColor: 'var(--tertiary-color)',
        }}
        onSucess={handleSucess}
        defaultSchemas={{
          name: true,
          email: true,
          phone: true,
          message: true,
        }}
        recaptcha={{
          active: true,
          key: '6Leo8_4lAAAAALz89Tb6i1937jkUbqllMqCkdKRA',
        }}
      >
        <InputComponent
          id="name"
          name="name"
          type="text"
          label="Nome completo"
          placeholder="Digite seu nome completo aqui"
          fontSizeFamilyLabel={fontSizeFamilyLabel}
          fontSizeFamilyInput={fontSizeFamilyInput}
          hasBar={hasBar}
        />

        <InputComponent
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail aqui"
          fontSizeFamilyLabel={fontSizeFamilyLabel}
          fontSizeFamilyInput={fontSizeFamilyInput}
          hasBar={hasBar}
        />

        <InputComponent
          id="phone"
          type="text"
          name="phone"
          label="Telefone"
          mask="(99) 9 9999-9999"
          placeholder="(DDD) 9 9999-9999"
          fontSizeFamilyLabel={fontSizeFamilyLabel}
          fontSizeFamilyInput={fontSizeFamilyInput}
          hasBar={hasBar}
        />

        <TextAreaComponent
          id="message"
          name="message"
          label="Mensagem"
          placeholder="O que deseja dizer?"
          noMargin
          fontSizeFamilyLabel={fontSizeFamilyLabel}
          fontSizeFamilyInput={fontSizeFamilyInput}
          hasBar={hasBar}
        />
      </FormHandler>
    </S.BoxContact>
  );
}
