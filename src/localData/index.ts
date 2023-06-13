import { apiWhattsApp, emailLink } from 'src/services/social-links';

export const sobreData1 = {
  imageWidth: 704,
  imageHeight: 417,
  image: '/images/sobre-home.webp',
  title: 'sobre nós',
  text: 'A CMBBrasil tem orgulho em produzir conteúdo de qualidade sobre automobilismo para seus leitores. Com uma equipe de especialistas em comunicação, marketing, design e tecnologia, nós nos comprometemos em pesquisar, criar e publicar os mais variados conteúdos, artigos, notícias e informações do mundo automotivo para nossos leitores. E tem mais! Ao comprar um dos nossos eBooks, você concorre automaticamente a um sorteio de um carro incrível! Nós acreditamos que um sorteio pode fazer a diferença na vida de alguém, por isso, nos empenhamos em realizar promoções que proporcionam a chance de realizar sonhos.',
  buttonText: 'saiba mais sobre nós',
  buttonUrl: '',
};

export const sobreData2 = {
  imageWidth: 704,
  imageHeight: 317,
  image: '/images/instituto-home.webp',
  title: 'instituto Paulo freitas',
  text: `O Instituto Paulo Freitas é uma organização que se dedica a realizar trabalhos beneficentes em prol da comunidade. Realizamos diversas ações para ajudar pessoas em situações vulneráveis, como campanhas de doação de alimentos, materiais escolares e roupas. <br/> <br/> Além disso, o instituto também oferece suporte e assistência a pessoas em tratamento médico, como pacientes com câncer. É muito gratificante ver uma organização se dedicando a causas tão nobres!`,
  buttonText: 'saiba mais sobre o instituto',
  buttonUrl: '',
};

export const fakeWinners = [
  {
    image: '/images/winner.webp',
    videoUrl: 'DAAz10iubDI',
    title:
      'O ganhador do GOLF SPORTLINE foi nosso amigo Sidenei Kichileski da cidade de Ponta Grossa-PR',
    subtitle: 'Número extraído da Loteria Federal Data do Sorteio: 08/04/2023',
  },
  {
    image: '/images/winner.webp',
    videoUrl: '4nrYWhHNP4s',
    title:
      'O ganhador do GOLF SPORTLINE foi nosso amigo Sidenei Kichileski da cidade de Ponta Grossa-PR',
    subtitle: 'Número extraído da Loteria Federal Data do Sorteio: 08/04/2023',
  },
  {
    image: '/images/winner.webp',
    videoUrl: '4PZAFaGrtu8',
    title:
      'O ganhador do GOLF SPORTLINE foi nosso amigo Sidenei Kichileski da cidade de Ponta Grossa-PR',
    subtitle: 'Número extraído da Loteria Federal Data do Sorteio: 08/04/2023',
  },
  {
    image: '/images/winner.webp',
    videoUrl: 'M4mvw0464Wc',
    title:
      'O ganhador do GOLF SPORTLINE foi nosso amigo Sidenei Kichileski da cidade de Ponta Grossa-PR',
    subtitle: 'Número extraído da Loteria Federal Data do Sorteio: 08/04/2023',
  },
];

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

// TODO COLOCAR NO BASE
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
    url: apiWhattsApp,
  },
  {
    title: 'Envie um e-mail',
    adress: 'contato@contato.com.br',
    url: emailLink,
  },
];

export const sobrePage = {
  titulo: 'Sobre nós',
  descricao: `A CMBBrasil tem orgulho em produzir conteúdo de qualidade sobre automobilismo para seus leitores. Com uma equipe de especialistas em comunicação, marketing, design e tecnologia, nós nos comprometemos em pesquisar, criar e publicar os mais variados conteúdos, artigos, notícias e informações do mundo automotivo para nossos leitores. <br/> <br/>
Compilamos esses materiais em eBooks que estão disponíveis em nossa loja virtual. Nossos eBooks, em sua grande maioria, contam a história da indústria automotiva do Brasil e do mundo, levando informações e curiosidades por meio de textos e fotos exclusivas. Entre eles, destacamos o lendário Ford Maverick, o bravo Land Rover Defender e o icônico Fusca, o carro mais queridinho dos brasileiros. <br/> <br/>
E tem mais! Ao comprar um dos nossos eBooks, você concorre automaticamente a um sorteio de um carro incrível! Nós acreditamos que um sorteio pode fazer a diferença na vida de alguém, por isso, nos empenhamos em realizar promoções que proporcionam a chance de realizar sonhos. <br/> <br/>
Com a CMBBrasil, você pode participar dos nossos sorteios com total confiança, sabendo que seus bilhetes serão respeitados e que o processo de escolha do vencedor será justo e transparente. Não perca a chance de adquirir nossos eBooks incríveis e ainda concorrer a um carro dos sonhos! Confie na CMBBrasil para entregar prêmios incríveis e conteúdo de qualidade sobre o mundo automotivo.`,
  imagem: '/images/sobrePage.webp',
  url: '',
  id: 1,
  ativo: true,
  dataCriacao: '',
  dataEdicao: '',
};
