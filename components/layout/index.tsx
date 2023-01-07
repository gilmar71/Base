import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import * as S from './styles';
import { linksMenu } from './header/data';

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <HeaderComponent data={linksMenu} />

      {children}

      <FooterComponent />
    </S.Layout>
  );
}
