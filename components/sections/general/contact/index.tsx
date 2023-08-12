import { Contact } from 'codieweb/dist/cjs/components/sections/contact';

import { api } from 'src/services/api';
import { contactList } from 'src/localData/data';

interface IContact {
  isPage?: boolean;
}

export function ContactSection({ isPage }: IContact) {
  return (
    <Contact
      api={api}
      type={1}
      contactList={contactList}
      defaultSchemas={{
        name: true,
        email: true,
        phone: true,
        message: true,
      }}
      configs={{
        fontSizeFamilyLabel: 'paragraph-2-bold',
        hasBorder: true,
        isPage: isPage,
        inputBoxShadow:
          'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #e3f3f2',
      }}
      fontProps={{ title: 'title-2 uppercase' }}
      buttonProps={{
        text: 'Enviar',
        bgColor: '#c78c21',
        color: '#fff',
        className: 'link-1 uppercase',
      }}
      recaptcha={{
        active: true,
        key: '6Lc1v50mAAAAAJD0gheUQRt4YDHBfIclnF7M0GJA',
      }}
    />
  );
}
