import { useState } from 'react';

import ReactModal from 'react-modal';

import { NextImage } from 'components/data';

import { IButtonOpenVideoProps } from './interface';

import * as S from './styles';

export function ButtonOpenModalFile({
  url,
  type,
  path,
  children,
  personalModal,
  setPersonalModal,
}: IButtonOpenVideoProps) {
  const [modal, setModal] = useState(false);

  function handleOpen() {
    setPersonalModal ? setPersonalModal(true) : setModal(true);
  }

  function handleClose() {
    setPersonalModal ? setPersonalModal(false) : setModal(false);
  }

  return (
    <>
      <ReactModal
        isOpen={personalModal || modal}
        onAfterOpen={handleOpen}
        onRequestClose={handleClose}
        ariaHideApp={false}
        style={S.customStyles}
      >
        <S.Modal>
          {type === 'image' && (
            <NextImage className="big-gallery" isService src={path} />
          )}

          {type === 'video' && (
            <iframe
              src={`https://www.youtube.com/embed/` + url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          )}
        </S.Modal>
      </ReactModal>

      {!setPersonalModal && (
        <button
          type="button"
          onClick={handleOpen}
          style={{
            border: 0,
            background: 'transparent',
            padding: 0,
            width: '100%',
          }}
        >
          {children}
        </button>
      )}

      {setPersonalModal && children}
    </>
  );
}
