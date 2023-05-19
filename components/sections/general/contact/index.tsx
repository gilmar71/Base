import { BoxContact, Container } from 'components/data';

import * as S from './styles';

interface IContact {
  isPage?: boolean;
}

export function Contact({ isPage }: IContact) {
  return (
    <S.Contact isPage={isPage}>
      <Container>
        {isPage && (
          <div className="box-title">
            <h3 className="title-9-zonaproBold">Vamos crescer juntos</h3>

            <h2 className="title-5-zonaproBold title">Entre em contato</h2>
          </div>
        )}

        <BoxContact fontSizeFamilyLabel="title-11-zonaproBold uppercase" />
      </Container>
    </S.Contact>
  );
}
