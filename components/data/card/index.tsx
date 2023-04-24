import * as S from './styles';

interface ICardProps {
  card: ICard;
}

interface ICard {
  icon: JSX.Element;
  title: string;
  text: string;
}

export function Card({ card }: ICardProps) {
  return (
    <S.Card>
      {card.icon}
      <h2 className="title-8 uppercase">{card.title}</h2>
      <p className="paragraph-3-roboto-regular">{card.text}</p>
    </S.Card>
  );
}
