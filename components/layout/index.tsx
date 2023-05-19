import { useEffect, useState } from 'react';

import { Whattsapp } from 'codieweb/dist/cjs/components/data/whattsapp';

import { linksSections } from 'src/hooks/sections-links';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

import * as S from './styles';

interface LayoutProps {
  noBg?: boolean;
  children?: React.ReactNode;
}

export function Layout({ noBg, children }: LayoutProps) {
  // const swrLinks = linksSections();

  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linksMenu = [
    {
      id: 1,
      link: 'Home',
      href: '/',
    },
    {
      id: 2,
      link: 'Sobre nós',
      href: '/sobre',
    },
    {
      id: 3,
      link: 'Serviços',
      href: '',
    },
    {
      id: 4,
      link: 'Eventos',
      href: '/eventos',
    },
    {
      id: 5,
      link: 'Contato',
      href: '/contato',
    },
  ];
  return (
    <S.Layout>
      <HeaderComponent noBg={noBg} fixed={fixed} data={linksMenu} />

      <Whattsapp href={'/'} />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
