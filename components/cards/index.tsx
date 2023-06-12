import { IBlogList } from 'src/interfaces/blogs';
import { CardBlog } from './card-blog';
import { CardContactLink, CardContactProps } from './card-contact-link';
import { CardSales } from './card-sales';
import { ISalesItems } from 'src/interfaces/sales';
import { CardValues } from './card-values';
import { ActivitiesProps } from 'src/interfaces/activities';
import { CardWinner } from './card-winner';
import { IWinnersList } from 'src/interfaces/winners';
import { CardFaq } from './card-faq';
import { IFaqs } from 'src/interfaces/pageInformations';
import { ICard } from './interfaces';

export function Card({ type, data, generalProps }: ICard) {
  switch (type) {
    case 'blog':
      return <CardBlog card={data} />;
    case 'contact':
      return (
        <CardContactLink
          color={generalProps?.contactProps?.color}
          hoverColor={generalProps?.contactProps?.hoverColor}
          card={data}
        />
      );
    case 'sales':
      return <CardSales card={data} />;
    case 'values':
      return <CardValues type={generalProps?.valuesProps} card={data} />;
    case 'winner':
      return <CardWinner hasHover={generalProps?.winnerProps} card={data} />;
    case 'faqs':
      return <CardFaq index={generalProps?.faqProps!} faq={data} />;
    default:
      throw new Error(`Invalid card type: ${type}`);
  }
}
