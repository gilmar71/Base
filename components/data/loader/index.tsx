import { Error } from '../error-body';
import * as S from './styles';

export function Loader() {
  return (
    <Error name="loader">
      <S.Loader>
        <div className="text">
          <p className="title-1-bold-cinzel">Carregando</p>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <img src="images/collection/Goblin.gif" loading="lazy" />
      </S.Loader>
    </Error>
  );
}
