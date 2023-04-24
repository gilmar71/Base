import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import * as S from './styles';
import { linksMenu } from './header/data';
import { useEffect, useState } from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
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
  return (
    <S.Layout>
      <HeaderComponent fixed={fixed} data={linksMenu} />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
