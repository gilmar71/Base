export const linksMenu = [
  {
    id: 1,
    link: 'Início',
    href: '/',
  },
  {
    id: 2,
    link: 'Sobre nós',
    href: '/sobre',
  },
  {
    id: 3,
    link: 'Nossos serviços',
    href: '',
    categorias: [
      {
        id: 1,
        sublink: 'Automação industrial',
        href: '/servicos/automacao',
      },
      {
        id: 2,
        sublink: 'Energia solar',
        href: '/servicos/solar',
      },
    ],
  },
  {
    id: 4,
    link: 'Projetos',
    href: '/projetos',
  },
  {
    id: 5,
    link: 'Contato',
    href: '/contato',
  },
];

export const listBanners = [
  {
    id: 1,
    titulo: 'Soluções completas em automação industrial',
    subtitulo:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.',
    thumbnail: '',
    imagem: 'images/banner-1.webp',
  },
  {
    id: 1,
    titulo: '',
    subtitulo: '',
    thumbnail: '',
    imagem: 'images/teste.jpg',
  },
];
