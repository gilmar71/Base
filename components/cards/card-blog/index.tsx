import { IBlogList } from 'src/interfaces/blogs';

import { NextImage } from '../../data/next-image';

import * as S from './styles';
import { Error } from 'components/data';

interface ICardBlog {
  card: IBlogList;
}

export function CardBlog({ card }: ICardBlog) {
  return (
    <Error name="card-blog">
      <S.CardBlog
        href={{
          pathname: 'post/[url]',
          query: {
            url: card.url,
          },
        }}
      >
        <NextImage isUploads src={card.imagem} hasHover />

        <span className="paragraph-2 tag">Dicas</span>

        <div className="box-text">
          <div className="paragraph-2 uppercase box-author">
            {card.subtitulo}
          </div>

          <h2 className="title-5 uppercase title">{card.titulo}</h2>

          <div
            className="paragraph-2 description"
            dangerouslySetInnerHTML={{
              __html: card.descricao,
            }}
          ></div>
        </div>
      </S.CardBlog>
    </Error>
  );
}
