import * as S from './styles';

interface ICardValues {
  card: {
    icon: JSX.Element;
    title: string;
    text: string;
  };
  type?: 1 | 2;
}

export function CardValues({ type, card }: ICardValues) {
  return (
    <S.CardValues type={type}>
      {card.icon}
      <h2 className={`${type === 1 ? 'title-8' : 'title-11'} uppercase`}>
        {card.title}
      </h2>
      <p className="paragraph-3">{card.text}</p>
    </S.CardValues>
  );
}
