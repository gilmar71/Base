import { CardContactLink } from './card-contact-link';
import { ICard } from './interfaces';

export function Card({ type, data }: ICard) {
  switch (type) {
    case 'contact':
      return <CardContactLink card={data} />;

    default:
      throw new Error(`Invalid card type: ${type}`);
  }
}
