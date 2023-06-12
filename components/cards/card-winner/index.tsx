import { IWinnersList } from 'src/interfaces/winners';

import { Error, NextImage } from '../../data';

import * as S from './styles';
import { ButtonOpenModalFile } from 'components/data/button-open-modal-file';
import { PlayerIcon } from 'components/icons';

interface ICardWinner {
  card: IWinnersList;
  hasHover?: boolean;
}

export function CardWinner({ card, hasHover }: ICardWinner) {
  return (
    <Error name="card-winner">
      <ButtonOpenModalFile type={'video'} url={card.url}>
        <S.CardWinner $hasHover={hasHover}>
          <div className="image">
            <NextImage isUploads src={card.imagem} hasHover />

            <div className="player-button">
              <PlayerIcon />
            </div>
          </div>

          <div className="box-text">
            <h2 className="paragraph-2">{card.titulo}</h2>

            <div
              className="paragraph-2 text"
              dangerouslySetInnerHTML={{
                __html: card.subtitulo,
              }}
            ></div>
          </div>
        </S.CardWinner>
      </ButtonOpenModalFile>
    </Error>
  );
}
