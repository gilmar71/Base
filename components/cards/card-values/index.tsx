import { ActivitiesProps } from 'src/interfaces/activities';

import * as S from './styles';
import { Error } from 'components/data';

interface ICardValues {
  card: ActivitiesProps;
  type?: 1 | 2;
}

export function CardValues({ type, card }: ICardValues) {
  return (
    <Error name="card-values">
      <S.CardValues $type={type}>
        {type === 1 ? (
          <div className="box-top">
            {card.icon}
            <h2 className="paragraph-1 uppercase">{card.title}</h2>
          </div>
        ) : (
          <>
            {card.icon}
            <h2 className="paragraph-1 uppercase">{card.title}</h2>
          </>
        )}
        {type === 1 && <p className="paragraph-3 description">{card.text}</p>}
      </S.CardValues>
    </Error>
  );
}
