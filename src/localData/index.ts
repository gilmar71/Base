import { whattsAppLink, emailLink } from 'src/services/social-links';

export const siteMapFooter = [
  {
    id: 1,
    adress: 'Home',
    url: '/',
  },
  {
    id: 2,
    adress: 'Sobre nós',
    url: '/sobre',
  },
  {
    id: 3,
    adress: 'Eventos',
    url: '/eventos',
  },
  {
    id: 4,
    adress: 'Contato',
    url: '/contato',
  },
];

export const supportFooter = [
  {
    adress: 'Perguntas frequentes',
    url: '#faqs',
  },
  {
    adress: 'Privacidade e Segurança',
    url: '',
  },
  {
    adress: 'Termos de Uso',
    url: '',
  },
];

export const contactFooter = [
  {
    title: 'Dúvidas, ligue',
    adress: '(43) 9 9999-9999',
    url: whattsAppLink,
  },
  {
    title: 'Envie um e-mail',
    adress: 'contato@contato.com.br',
    url: emailLink,
  },
];
