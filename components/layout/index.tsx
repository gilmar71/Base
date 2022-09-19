import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import * as S from './styles';

interface LayoutProps {
  children?: React.ReactNode;
  isBackgroundColor?: boolean;
  logo: '/images/logo.png' | '/images/logo-footer.png';
}

export function Layout({ children, isBackgroundColor, logo }: LayoutProps) {
  return (
    <S.Layout isBackgroundColor={isBackgroundColor}>
      <HeaderComponent logo={logo} />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
