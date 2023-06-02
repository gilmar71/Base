import { Button, Container, NextImage } from 'components/data';

import { ISobre } from 'src/interfaces/pageInformations';

import * as S from './styles';

interface ITextImage {
  data: ISobre;
  type: 1 | 2 | 3;
}

export function TextImage({ type, data }: ITextImage) {
  return (
    <S.TextImage $type={type}>
      <Container>
        {type === 3 ? (
          <NextImage
            className="hide-mobile"
            alt={data.titulo}
            src={data.imagem}
            hasHover
          />
        ) : (
          <NextImage
            className="hide-mobile"
            isBaseUrl
            alt={data.titulo}
            src={data.imagem}
            hasHover
          />
        )}

        <div className="box-text">
          <h2 className="title-2 uppercase">{data.titulo}</h2>

          {type === 3 ? (
            <NextImage
              className="show-mobile"
              alt={data.titulo}
              src={data.imagem}
            />
          ) : (
            <NextImage
              className="show-mobile"
              isBaseUrl
              alt={data.titulo}
              src={data.imagem}
            />
          )}

          <div
            className="paragraph-2 description"
            dangerouslySetInnerHTML={{ __html: data.descricao }}
          ></div>

          <Button
            url={data.url}
            text={
              type === 1
                ? 'Saiba mais sobre nós'
                : 'Saiba mais sobre o instituto'
            }
          />
        </div>
      </Container>
    </S.TextImage>
  );
}
