import { ISalesItems } from 'src/interfaces/sales';

import * as S from './styles';
import { NextImage } from '../../data/next-image';
import { Error } from 'components/data';

interface ICardSales {
  card: ISalesItems;
  isListPage?: boolean;
}

export function CardSales({ card, isListPage }: ICardSales) {
  return (
    <Error name="card-sales">
      <S.CardSales
        $isListPage={isListPage}
        href={{
          pathname: 'promocao/[url]',
          query: {
            url: card.url,
          },
        }}
      >
        <NextImage isUploads src={card.imagem} hasHover />

        <span className="uppercase tag">disponível</span>

        <div className="box-text">
          <h2 className="title-5 uppercase">{card.titulo}</h2>

          <span className="paragraph-2 description">
            25.649 pessoas já estão participando!
          </span>

          <span className="paragraph-2 uppercase button">quero concorrer!</span>
        </div>
      </S.CardSales>
    </Error>
  );
}
