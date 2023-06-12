import { IBlogList } from 'src/interfaces/blogs';
import { CardContactProps } from './card-contact-link';
import { ISalesItems } from 'src/interfaces/sales';
import { IWinnersList } from 'src/interfaces/winners';
import { IFaqs } from 'src/interfaces/pageInformations';
import { ActivitiesProps } from 'src/interfaces/activities';

interface ICardDataMap {
  blog: { type: 'blog'; data: IBlogList };
  contact: { type: 'contact'; data: CardContactProps };
  sales: { type: 'sales'; data: ISalesItems };
  values: { type: 'values'; data: ActivitiesProps };
  winner: { type: 'winner'; data: IWinnersList };
  faqs: { type: 'faqs'; data: IFaqs };
}

interface GeneralProps {
  generalProps?: {
    valuesProps?: 1 | 2;
    winnerProps?: boolean;
    faqProps?: number;
    contactProps?: {
      color?: string;
      hoverColor?: string;
    };
  };
}

export type ICard = ICardDataMap[keyof ICardDataMap] & GeneralProps;
