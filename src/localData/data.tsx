import { EmailIcon, PhoneIcon, PinIcon, WhattsAppIcon } from 'components/icons';
import { WhattsAppInvIcon } from 'components/icons/Whattsapp';
import {
  whattsAppLink,
  emailLink,
  googleMapsLink,
} from 'src/services/social-links';

export const contactList = [
  {
    icon: <PhoneIcon />,
    title: 'telefone fixo',
    adress: '43 3333-3333',
    url: '',
  },
  {
    icon: <WhattsAppInvIcon />,
    title: 'whatsapp',
    adress: '(43) 9 9999-9999',
    url: whattsAppLink,
  },
  {
    icon: <PinIcon />,
    title: 'endereço',
    adress:
      'Av. Duque de Caxias, 1726 - Sala 707 <br/> Vila Brasil, Londrina - PR, 86010-190',
    url: googleMapsLink,
  },
  {
    icon: <EmailIcon />,
    title: 'e-mail',
    adress: 'contato@contato.com.br',
    url: emailLink,
  },
];
