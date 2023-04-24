import router from 'next/router';

import { api } from 'src/services/api';

import { FormHandler } from 'codieweb/dist/cjs/components/data/form-handler';

import { InputComponent, TextAreaComponent } from 'components/data/inputs/core';

import * as S from './styles';

interface SubmitProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export function BoxContact() {
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
          className: 'link-3',
          color: '#fff',
          backgroundColor: 'var(--primary-color)',
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
          key: '6LcSmKclAAAAABuhhiHd_Vlf5Mj046_9dywsioHv',
        }}
      >
        <InputComponent
          id="name"
          name="name"
          type="text"
          label="Nome completo"
          placeholder="Digite seu nome completo aqui"
          hasBar
        />

        <InputComponent
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="Digite seu e-mail aqui"
          hasBar
        />

        <InputComponent
          id="phone"
          type="text"
          name="phone"
          label="Telefone"
          mask="(99) 9 9999-9999"
          placeholder="(DDD) 9 9999-9999"
          hasBar
        />

        <TextAreaComponent
          id="message"
          name="message"
          label="Mensagem"
          placeholder="O que deseja dizer?"
          hasBar
        />
      </FormHandler>
    </S.BoxContact>
  );
}
