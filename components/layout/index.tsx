import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

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
  const router = useRouter();

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
      link: 'Vantagens',
      href: `${router.asPath === '/' ? '#vantagens' : '/#vantagens'}`,
    },
    {
      id: 2,
      link: 'Planos',
      href: `${router.asPath === '/' ? '#planos' : '/#planos'}`,
    },
    {
      id: 3,
      link: 'FAQ',
      href: `${router.asPath === '/' ? '#faqs' : '/#faqs'}`,
    },
    {
      id: 4,
      link: 'Sobre nós',
      href: `${router.asPath === '/' ? '#sobre' : '/#sobre'}`,
    },
    {
      id: 5,
      link: 'Contato',
      href: `${router.asPath === '/' ? '#contato' : '/#contato'}`,
    },
    {
      id: 6,
      link: 'Central do Assinante',
      href: '',
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
