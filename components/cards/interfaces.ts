import { CardContactProps } from './card-contact-link';

interface ICardDataMap {
  contact: { type: 'contact'; data: CardContactProps };
}

export type ICard = ICardDataMap[keyof ICardDataMap];
