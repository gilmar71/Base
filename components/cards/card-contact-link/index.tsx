import { Error } from 'components/data';
import * as S from './styles';

export interface ICardContactLink {
  card: CardContactProps;
  color?: string;
  hoverColor?: string;
}

export interface CardContactProps {
  icon?: JSX.Element;
  title?: string;
  adress: string;
  url: string;
}

export function CardContactLink({ card, color, hoverColor }: ICardContactLink) {
  return (
    <Error name="card-contact">
      <S.CardContactLink
        href={card.url}
        $color={color}
        $hoverColor={hoverColor}
      >
        {card.icon && card.icon}

        <div className="box-text">
          <h3 className="link-1 uppercase">{card.title}</h3>
          <span
            className="link-1"
            dangerouslySetInnerHTML={{ __html: card.adress }}
          ></span>
        </div>
      </S.CardContactLink>
    </Error>
  );
}
